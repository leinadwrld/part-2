import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import Academy from "@/components/Academy";
import Collaboration from "@/components/Collaboration";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Treatments />
      <Academy />
      <Collaboration />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
