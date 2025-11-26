import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Contact = () => {
  const whatsappNumber = "5492233000000"; // Replace with actual number
  const whatsappMessage = "Hola! Me gustaría obtener más información sobre CASA LeMar.";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              <span className="text-primary">Contacto</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos para ayudarte a planificar tus vacaciones perfectas
            </p>
          </div>

          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl border border-border">
            <div className="flex flex-col items-center text-center mb-8">
              <img src={logo} alt="CASA LeMar Logo" className="h-24 w-auto mb-6" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">CASA LeMar</h3>
              <p className="text-muted-foreground">Tu refugio en Mar del Plata</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-4 p-4 bg-sand rounded-2xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">Dirección</h4>
                  <p className="text-sm text-muted-foreground">
                    San Salvador 3734<br />
                    Villa Lourdes, Mar del Plata
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-sand rounded-2xl">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-foreground">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">
                    Consultas y reservas<br />
                    Respuesta inmediata
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-ocean-dark transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Te respondemos rápidamente para ayudarte con tu reserva
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 CASA LeMar. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
