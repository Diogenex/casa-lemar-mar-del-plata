import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import { useState } from "react";

const Contact = () => {
  const whatsappNumber = "5492235959372"; // Replace with actual number
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola! Soy ${formData.name}.\n\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje: ${formData.message}`;
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 9 11 1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Cuéntanos sobre tu consulta, fechas de interés, cantidad de personas..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-ocean-dark transition-all duration-300 shadow-lg hover:shadow-xl w-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar consulta por WhatsApp
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Tu mensaje se abrirá en WhatsApp para que puedas enviarlo
              </p>
            </form>
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
