import { Carousel } from "antd";

const MainBanner = () => {
  return (
    <div className="overflow-hidden">
      <Carousel
        autoplay="true"
        dotPosition="right"
        effect="fade"
        className=" text-black"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        }}
      >
        <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center bg-[url('/banner1.jpg')]"></div>
        <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center bg-[url('/banner2.jpg')]"></div>
        <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center bg-[url('/banner3.jpg')]"></div>
        <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center bg-[url('/banner4.jpg')]"></div>
        <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center bg-[url('/banner5.jpg')]"></div>
      </Carousel>
      <div className="flex flex-col md:flex-row justify-between bg-[#2F3137] text-white main-container md:w-2/3 px-10 py-12 rounded-xl -top-24 relative">
        <div className="w-full md:w-1/2 lg:w-2/3 flex">
          <h1>Experience the Difference with Our Professional Photographer.</h1>
          <div className="w-[2px] h-full bg-white hidden md:block"></div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 text-center">
          <h1 className="text-5xl">6+</h1>
          <span className="font-semibold font-dancing">
            Years of experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
