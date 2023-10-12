import Contact from "@/components/ui/Contact";
import FAQ from "@/components/ui/FAQ";
import Footer from "@/components/ui/Footer";
import Gallery from "@/components/ui/Gallery";
import Header from "@/components/ui/Header";
import MainBanner from "@/components/ui/MainBanner";
import Service from "@/components/ui/Service";
import Testimonial from "@/components/ui/Testimonial";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Service />
      <WhyChooseUs />
      <Testimonial />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
