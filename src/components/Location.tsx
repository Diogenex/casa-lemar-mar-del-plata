import { MapPin, Store, ShoppingCart, Church, Anchor } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary">Ubicación</span> Estratégica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            En el tranquilo barrio de Villa Lourdes, cerca de todo lo que necesitás
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Dirección</h3>
                  <p className="text-muted-foreground">San Salvador 3734, Villa Lourdes, Mar del Plata</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Store className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Comercios Cercanos</h3>
                  <p className="text-muted-foreground">Comercios a 1 cuadra - Fácil acceso a todo</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Supermercado</h3>
                  <p className="text-muted-foreground">A solo 4 cuadras para tus compras diarias</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Church className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Gruta de Lourdes</h3>
                  <p className="text-muted-foreground">A 3 km - Centro Comercial 12 de Octubre</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Anchor className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Puerto</h3>
                  <p className="text-muted-foreground">A 5 minutos - Centro Comercial Puerto y Escollera Sur</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-ocean-light/10 to-primary/5 rounded-3xl p-8 border border-ocean-light/20">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Distancias a las Playas</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Playa Grande / Escollera Norte</span>
                  <span className="text-primary font-semibold">12 min</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Puerto y Banquina</span>
                  <span className="text-primary font-semibold">7 min</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground">Punta Mogotes</span>
                  <span className="text-primary font-semibold">10 min</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-background/50 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  ✓ Estacionamiento fácil y sin bullicio turístico
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0!2d-57.5569!3d-38.0054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc08fcffffff%3A0xffff!2sSan%20Salvador%203734%2C%20Mar%20del%20Plata!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación CASA LeMar"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
