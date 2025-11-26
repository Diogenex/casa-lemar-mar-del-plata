import { Home, MapPin, Wifi, Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-sand">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Tu Casa en <span className="text-primary">Mar del Plata</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ubicada en el barrio de Villa Lourdes, CASA LeMar es el lugar perfecto para tus vacaciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <Home className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Espacios Cómodos</h3>
              <p className="text-muted-foreground leading-relaxed">
                2 dormitorios amplios, cocina-comedor-living integrados, baño completo con bañera y un acogedor patio delantero. Todo el espacio que necesitás para disfrutar con familia o amigos.
              </p>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Ubicación Privilegiada</h3>
              <p className="text-muted-foreground leading-relaxed">
                Zona tranquila ideal para el descanso, cerca de Av. Vertiz y Av. Edison. Comercios a 1 cuadra, supermercado a 4 cuadras. Fácil estacionamiento sin el bullicio del centro turístico.
              </p>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <Wifi className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Totalmente Equipada</h3>
              <p className="text-muted-foreground leading-relaxed">
                WiFi en todos los ambientes, cocina completa con heladera y microondas, TV LED Smart, vajilla completa, ropa blanca incluida, ventilador y juegos de mesa para toda la familia.
              </p>
            </div>

            <div className="bg-background rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-foreground">Pet Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tus mascotas pequeñas y medianas son bienvenidas. Sabemos que son parte de la familia y queremos que disfruten las vacaciones junto a vos.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-ocean-light/20 to-primary/10 rounded-3xl p-8 md:p-12 border border-ocean-light/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Cercanía a las Playas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary mb-1">5 min</p>
                <p className="text-muted-foreground">Puerto y Banquina de Pescadores</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">10 min</p>
                <p className="text-muted-foreground">Playas Punta Mogotes</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-1">12 min</p>
                <p className="text-muted-foreground">Playa Grande y Escollera Norte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
