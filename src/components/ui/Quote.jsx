import MainButton from "../shared/MainButton";
import { BsCamera } from "react-icons/bs";
const Quote = () => {
  return (
    <div
      className="text-center bg-no-repeat bg-cover bg-center bg-fixed text-white py-20"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/camera-girl.jpg')",
      }}
    >
      <div className="main-container">
        <div>
          <BsCamera size={56} />
        </div>
        <h1 className="w-full md:w-2/3 mx-auto my-8 ">
          It Captures special events and turns them into precious keepsakes.
        </h1>
        <MainButton
          name="Discover More"
          link="/"
          style="py-2 px-8 text-lg border-white text-white"
        ></MainButton>
      </div>
    </div>
  );
};

export default Quote;
