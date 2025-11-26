import { Clock, DollarSign, FileText, AlertTriangle, Key, Ban, Home } from "lucide-react";

const RentalConditions = () => {
  const conditions = [
    {
      icon: Clock,
      title: "Check in",
      description: "De 15 a 18hs. Entrega de llaves y normas de convivencia.",
    },
    {
      icon: Clock,
      title: "Check out",
      description: "Hasta las 12hs.",
    },
    {
      icon: DollarSign,
      title: "Reserva",
      description: "Con el valor de 1 noche (no reembolsable) y saldo al ingresar.",
    },
    {
      icon: DollarSign,
      title: "Depósito en garantía",
      description: "$150.000 (reembolsable si se entrega la vivienda en mismas condiciones que fue alquilada).",
    },
    {
      icon: FileText,
      title: "Al ingresar",
      description: "Se toman los datos de los pasajeros y se explican las normas de convivencia, y se entrega un comprobante del pago del alquiler y del depósito en garantía.",
    },
    {
      icon: AlertTriangle,
      title: "GRUPOS DE JÓVENES",
      description: "Reserva el valor de 1 noche (no reembolsable) y saldo al ingresar. Depósito en garantía de $200.000 (reembolsable si se entrega la vivienda en mismas condiciones que fue alquilada).",
      highlight: true,
    },
    {
      icon: Key,
      title: "Extravío de llaves",
      description: "El extravío de llaves de la casa tiene costo extra, se abonará $30.000 c/u.",
    },
    {
      icon: Ban,
      title: "Prohibido",
      description: "Prohibido el ingreso a toda persona que no está declarada en la reserva. Se cobrará extra por noche de alojamiento.",
    },
    {
      icon: Home,
      title: "Condiciones de entrega",
      description: "La casa se entregará limpia, ordenada y en las mismas condiciones que fue alquilada. Cualquier rotura en sus instalaciones, mobiliario y/o equipamiento representará el no reembolso del depósito en garantía.",
    },
  ];

  return (
    <section id="condiciones" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Condiciones de <span className="text-primary">Alquiler</span>
          </h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con mucho esfuerzo hemos acondicionado nuestra casa para que Uds disfruten de unas confortables vacaciones, esperamos sepan entender algunos de los requisitos o condiciones.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Gracias por consultarnos y agradecemos su comentario para mejorar nuestros servicios.
            </p>
            <p className="text-lg font-semibold text-foreground mt-4">
              Atte. LEMAR
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {conditions.map((condition, index) => {
            const Icon = condition.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  condition.highlight
                    ? "bg-primary/5 border-primary shadow-md"
                    : "bg-card border-border"
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg ${
                    condition.highlight ? "bg-primary/20" : "bg-primary/10"
                  }`}>
                    <Icon className={`h-6 w-6 ${
                      condition.highlight ? "text-primary" : "text-primary"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      condition.highlight ? "text-primary" : "text-foreground"
                    }`}>
                      {condition.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RentalConditions;
