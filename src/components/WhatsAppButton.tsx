import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "5492233000000"; // Replace with actual number
  const whatsappMessage = "Hola! Me interesa CASA LeMar.";

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl hover:scale-110 transition-all duration-300 p-0"
      onClick={handleWhatsAppClick}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </Button>
  );
};

export default WhatsAppButton;
