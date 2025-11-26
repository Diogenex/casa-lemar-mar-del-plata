import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Hero = () => {
  const whatsappNumber = "5492235959372"; // Replace with actual number
  const whatsappMessage = "Hola! Me interesa consultar disponibilidad en CASA LeMar.";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-light/20 via-background to-sand z-0" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-ocean rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="CASA LeMar" className="h-32 md:h-40 w-auto" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Alquiler Temporario en Mar del Plata
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tu refugio perfecto frente al mar. Capacidad para 6 personas en el corazón de Villa Lourdes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-ocean-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultá Disponibilidad
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              onClick={() => {
                document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Galería
            </Button>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-16 animate-slide-up">
          {[
            { label: "Capacidad", value: "6 personas" },
            { label: "Dormitorios", value: "2" },
            { label: "WiFi", value: "Gratis" },
            { label: "Mascotas", value: "Bienvenidas" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-lg font-semibold text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
