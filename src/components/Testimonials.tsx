import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Buenos Aires",
      rating: 5,
      text: "Excelente lugar para descansar. La casa es muy cómoda y está súper bien ubicada. El patio es perfecto para el mate de la mañana.",
      date: "Enero 2025"
    },
    {
      name: "Carlos Rodríguez",
      location: "Rosario",
      rating: 5,
      text: "Increíble experiencia. La zona es muy tranquila y los dueños muy atentos. La cocina está completamente equipada y todo impecable.",
      date: "Diciembre 2024"
    },
    {
      name: "Laura Fernández",
      location: "Córdoba",
      rating: 5,
      text: "Perfecto para unas vacaciones en familia. Los chicos disfrutaron mucho y nosotros también. Cerca de todo pero en una zona sin ruido.",
      date: "Verano 2024"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Lo que dicen <span className="text-primary">nuestros huéspedes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experiencias reales de quienes ya disfrutaron CASA LeMar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 bg-sand border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;