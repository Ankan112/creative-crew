import RootLayout from "@/components/layout/RootLayout";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

const AboutUs = () => {
  return (
    <div>
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
