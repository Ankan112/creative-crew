import { Carousel } from "antd";
import BannerTitle from "../shared/BannerTitle";
import Image from "next/image";
const MainBanner = () => {
  const carouselItems = ["/banner1.jpg", "/banner2.jpg"];
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
        <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center bg-[url('/banner2.jpg')]">
          <BannerTitle />
        </div>
        <div className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center bg-[url('/banner1.jpg')]">
          <BannerTitle />
        </div>
      </Carousel>
    </div>
  );
};

export default MainBanner;
{
  /* <div
className="h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center text-white text-center"
style={{
  backgroundImage:
    "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/banner2.jpg')",
}}
>
<BannerTitle />
</div> */
}
