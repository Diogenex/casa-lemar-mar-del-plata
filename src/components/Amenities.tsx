import {
  Bed,
  Bath,
  Wifi,
  Tv,
  Utensils,
  Refrigerator,
  Wind,
  Home,
  PawPrint,
  Shirt,
} from "lucide-react";

const Amenities = () => {
  const amenities = [
    {
      icon: Bed,
      title: "2 Dormitorios",
      description: "1 matrimonial + 1 con cama individual y cucheta",
    },
    {
      icon: Bath,
      title: "Baño Completo",
      description: "Con bañera (toallas no incluidas)",
    },
    {
      icon: Wifi,
      title: "WiFi Gratuito",
      description: "Internet de alta velocidad en todos los ambientes",
    },
    {
      icon: Tv,
      title: "TV LED Smart",
      description: "Entretenimiento para toda la familia",
    },
    {
      icon: Utensils,
      title: "Cocina Equipada",
      description: "Cocina a gas, vajilla completa, microondas, pava eléctrica",
    },
    {
      icon: Refrigerator,
      title: "Heladera con Freezer",
      description: "Termotanque a gas de alta recuperación",
    },
    {
      icon: Wind,
      title: "Ventilador",
      description: "Para los días más calurosos",
    },
    {
      icon: Home,
      title: "Patio Delantero",
      description: "Espacio al aire libre para relajarse",
    },
    {
      icon: PawPrint,
      title: "Pet Friendly",
      description: "Mascotas pequeñas y medianas bienvenidas",
    },
    {
      icon: Shirt,
      title: "Ropa Blanca Incluida",
      description: "Sábanas, acolchados y mantas provistas",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            <span className="text-primary">Comodidades</span> y Equipamiento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitás para sentirte como en casa durante tus vacaciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-ocean-light/20 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{amenity.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-ocean-light/10 to-primary/5 rounded-3xl p-8 border border-ocean-light/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Extras Incluidos</h3>
            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Juegos de mesa
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Estacionamiento fácil
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Zona tranquila
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Cerca de comercios
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
