import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar as CalendarIcon } from "lucide-react";

const Calendar = () => {
  const whatsappNumber = "5492233000000"; // Replace with actual number
  const whatsappMessage = "Hola! Quisiera consultar disponibilidad de fechas en CASA LeMar.";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section id="calendar" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <CalendarIcon className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Disponibilidad y <span className="text-primary">Reservas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consultá disponibilidad para tus fechas y reservá tu estadía en CASA LeMar
            </p>
          </div>

          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Temporada 2025/2026</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Para consultar disponibilidad y confirmar tu reserva, comunicate con nosotros por WhatsApp. 
                Te responderemos a la brevedad con información actualizada de fechas disponibles y tarifas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-ocean-light/10 rounded-2xl p-6 border border-ocean-light/20">
                <p className="text-sm text-muted-foreground mb-2">Check-in</p>
                <p className="text-lg font-semibold text-foreground">Flexible</p>
              </div>
              <div className="bg-ocean-light/10 rounded-2xl p-6 border border-ocean-light/20">
                <p className="text-sm text-muted-foreground mb-2">Check-out</p>
                <p className="text-lg font-semibold text-foreground">Flexible</p>
              </div>
              <div className="bg-ocean-light/10 rounded-2xl p-6 border border-ocean-light/20">
                <p className="text-sm text-muted-foreground mb-2">Estadía mínima</p>
                <p className="text-lg font-semibold text-foreground">Consultar</p>
              </div>
            </div>

            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-ocean-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar Disponibilidad por WhatsApp
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              La confirmación final de tu reserva será realizada por WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
