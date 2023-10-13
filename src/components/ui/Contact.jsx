import { Button } from "antd";
import Link from "next/link";
import MainButton from "../shared/MainButton";

const Contact = () => {
  return (
    <div className="main-container my-14">
      <div
        className="text-center bg-no-repeat bg-cover bg-center rounded-tr-[78px] rounded-bl-[78px] text-white py-20"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/contact.jpg')",
        }}
      >
        <h1 className="text-4xl">Still, have a question?</h1>
        <p className="my-8 w-3/4 md:w-2/4 mx-auto">
          If your query isn&#39;t addressed here, feel free to reach out to us
          directly for personalized assistance. Your satisfaction is our
          priority, and we&#39;re eager to assist you on your photography
          journey.
        </p>
        <MainButton
          name="Contact Us"
          link="/contact"
          style="py-2 px-8 text-lg border-white text-white"
        ></MainButton>
      </div>
    </div>
  );
};

export default Contact;
