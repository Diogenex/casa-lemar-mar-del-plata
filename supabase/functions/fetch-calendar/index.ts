import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface VEvent {
  start: Date;
  end: Date;
  summary?: string;
}

// Simple iCal parser for VEVENT entries
function parseICalendar(icalData: string): VEvent[] {
  const events: VEvent[] = [];
  const lines = icalData.split(/\r?\n/);
  
  let currentEvent: Partial<VEvent> | null = null;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (trimmed === 'END:VEVENT' && currentEvent) {
      if (currentEvent.start && currentEvent.end) {
        events.push(currentEvent as VEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (trimmed.startsWith('DTSTART')) {
        const dateStr = trimmed.split(':')[1];
        currentEvent.start = parseICalDate(dateStr);
      } else if (trimmed.startsWith('DTEND')) {
        const dateStr = trimmed.split(':')[1];
        currentEvent.end = parseICalDate(dateStr);
      } else if (trimmed.startsWith('SUMMARY:')) {
        currentEvent.summary = trimmed.substring(8);
      }
    }
  }
  
  return events;
}

function parseICalDate(dateStr: string): Date {
  // Handle both date formats: YYYYMMDD and YYYYMMDDTHHMMSSZ
  const cleanStr = dateStr.replace(/[^0-9]/g, '');
  
  const year = parseInt(cleanStr.substring(0, 4));
  const month = parseInt(cleanStr.substring(4, 6)) - 1;
  const day = parseInt(cleanStr.substring(6, 8));
  
  if (cleanStr.length > 8) {
    const hour = parseInt(cleanStr.substring(8, 10));
    const minute = parseInt(cleanStr.substring(10, 12));
    const second = parseInt(cleanStr.substring(12, 14));
    return new Date(Date.UTC(year, month, day, hour, minute, second));
  }
  
  return new Date(Date.UTC(year, month, day));
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    // Get the iCal URL from the database
    const { data: config, error: configError } = await supabaseClient
      .from('calendar_config')
      .select('ical_url')
      .single();

    if (configError) {
      console.error('Error fetching config:', configError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch calendar configuration', dates: [] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    if (!config?.ical_url) {
      console.log('No iCal URL configured');
      return new Response(
        JSON.stringify({ dates: [] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch the iCal feed
    console.log('Fetching iCal from:', config.ical_url);
    const icalResponse = await fetch(config.ical_url);
    
    if (!icalResponse.ok) {
      console.error('Failed to fetch iCal:', icalResponse.status);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch calendar data', dates: [] }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    const icalData = await icalResponse.text();
    
    // Parse the iCal data
    const events = parseICalendar(icalData);
    console.log(`Parsed ${events.length} events`);

    // Generate all blocked dates (including date ranges)
    const blockedDates: string[] = [];
    
    for (const event of events) {
      const start = new Date(event.start);
      const end = new Date(event.end);
      
      // Add all dates in the range
      const current = new Date(start);
      while (current <= end) {
        blockedDates.push(current.toISOString().split('T')[0]);
        current.setDate(current.getDate() + 1);
      }
    }

    // Remove duplicates
    const uniqueDates = [...new Set(blockedDates)];

    return new Response(
      JSON.stringify({ dates: uniqueDates }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in fetch-calendar function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage, dates: [] }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});