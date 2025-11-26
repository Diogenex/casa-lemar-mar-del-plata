import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import BookingCalendar from "@/components/BookingCalendar";
import RentalConditions from "@/components/RentalConditions";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Amenities />
      <BookingCalendar />
      <RentalConditions />
      <Location />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
