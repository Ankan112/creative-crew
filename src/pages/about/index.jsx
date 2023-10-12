import RootLayout from "@/components/layout/RootLayout";

const AboutUs = () => {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
