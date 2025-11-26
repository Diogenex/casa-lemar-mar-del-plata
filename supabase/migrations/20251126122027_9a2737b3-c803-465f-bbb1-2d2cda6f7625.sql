-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create calendar_config table to store external calendar URL
CREATE TABLE public.calendar_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ical_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default row
INSERT INTO public.calendar_config (ical_url) VALUES (NULL);

-- Create function to ensure only one config row exists
CREATE OR REPLACE FUNCTION public.ensure_single_calendar_config()
RETURNS TRIGGER AS $$
BEGIN
  IF (SELECT COUNT(*) FROM public.calendar_config) > 1 THEN
    RAISE EXCEPTION 'Only one calendar configuration is allowed';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to enforce single row
CREATE TRIGGER check_single_calendar_config
AFTER INSERT ON public.calendar_config
FOR EACH ROW
EXECUTE FUNCTION public.ensure_single_calendar_config();

-- Enable RLS (everyone can read, no one can insert/delete, only update)
ALTER TABLE public.calendar_config ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read the config
CREATE POLICY "Anyone can read calendar config"
ON public.calendar_config
FOR SELECT
USING (true);

-- For now, allow updates without auth (admin will set this manually)
CREATE POLICY "Anyone can update calendar config"
ON public.calendar_config
FOR UPDATE
USING (true);

-- Update timestamp trigger
CREATE TRIGGER update_calendar_config_updated_at
BEFORE UPDATE ON public.calendar_config
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();