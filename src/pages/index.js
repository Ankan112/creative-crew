import RootLayout from "@/components/layout/RootLayout";
import Contact from "@/components/ui/Contact";
import FAQ from "@/components/ui/FAQ";
import Gallery from "@/components/ui/Gallery";
import MainBanner from "@/components/ui/MainBanner";
import Quote from "@/components/ui/Quote";
import Service from "@/components/ui/Service";
import Testimonial from "@/components/ui/Testimonial";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Service />
      <WhyChooseUs />
      <Quote />
      <Testimonial />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
