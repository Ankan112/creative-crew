import RootLayout from "@/components/layout/RootLayout";
import PaymentPageForm from "@/components/shared/PaymentPageForm";
import TitleBorder from "@/components/shared/TitleBorder";

const Payment = () => {
  return (
    <div className="h-screen main-container">
      <div className="my-10">
        <h1 className="font-main">Continue To Pay</h1>
        <TitleBorder/>
        </div>
        <PaymentPageForm/>
    </div>
  );
};

export default Payment;

Payment.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
