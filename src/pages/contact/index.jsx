import RootLayout from "@/components/layout/RootLayout";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact us page</h1>
    </div>
  );
};

export default ContactUs;

ContactUs.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
