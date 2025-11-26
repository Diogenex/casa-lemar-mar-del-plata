import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { MessageCircle, Calendar as CalendarIcon, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import type { DateRange } from "react-day-picker";

const BookingCalendar = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const whatsappNumber = "5492233000000"; // Replace with actual number

  useEffect(() => {
    fetchBlockedDates();
  }, []);

  const fetchBlockedDates = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke('fetch-calendar');

      if (error) {
        console.error('Error fetching calendar:', error);
        toast.error('Error al cargar el calendario');
        setIsLoading(false);
        return;
      }

      if (data?.dates) {
        const dates = data.dates.map((dateStr: string) => new Date(dateStr + 'T00:00:00'));
        setBlockedDates(dates);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error al cargar las fechas ocupadas');
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (!dateRange?.from) {
      toast.error('Por favor seleccioná las fechas de tu estadía');
      return;
    }

    const checkIn = format(dateRange.from, "dd 'de' MMMM", { locale: es });
    const checkOut = dateRange.to 
      ? format(dateRange.to, "dd 'de' MMMM", { locale: es })
      : checkIn;

    const message = `Hola 👋 Estoy interesado en reservar CASA LeMar del ${checkIn} al ${checkOut}. ¿Está disponible?`;
    
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const isDateBlocked = (date: Date) => {
    return blockedDates.some(
      blocked => 
        blocked.getDate() === date.getDate() &&
        blocked.getMonth() === date.getMonth() &&
        blocked.getFullYear() === date.getFullYear()
    );
  };

  return (
    <section id="disponibilidad" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <CalendarIcon className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Disponibilidad y <span className="text-primary">Reservas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Seleccioná tus fechas y consultá disponibilidad para tu estadía en CASA LeMar
            </p>
          </div>

          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground text-center">
                    Seleccioná tus fechas
                  </h3>
                  <div className="flex justify-center">
                    <Calendar
                      mode="range"
                      selected={dateRange}
                      onSelect={setDateRange}
                      numberOfMonths={2}
                      disabled={(date) => {
                        // Disable past dates and blocked dates
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        return date < today || isDateBlocked(date);
                      }}
                      className="rounded-2xl border border-border p-4"
                    />
                  </div>
                </div>

                {dateRange?.from && (
                  <div className="mb-8 p-6 bg-ocean-light/10 rounded-2xl border border-ocean-light/20">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Check-in</p>
                        <p className="text-xl font-semibold text-foreground">
                          {format(dateRange.from, "dd 'de' MMMM, yyyy", { locale: es })}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-2">Check-out</p>
                        <p className="text-xl font-semibold text-foreground">
                          {dateRange.to 
                            ? format(dateRange.to, "dd 'de' MMMM, yyyy", { locale: es })
                            : 'Seleccioná fecha de salida'}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-center">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-ocean-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Consultar por WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground mt-6">
                    Los días marcados están ocupados. La confirmación final se realiza por WhatsApp.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;