import { Carousel } from "antd";
import BannerTitle from "../shared/BannerTitle";

const MainBanner = () => {
  return (
    <Carousel autoplay="true" dotPosition="right" effect="fade">
      <div className="h-screen flex justify-center items-center bg-orange-200 text-center">
        <BannerTitle />
      </div>
      <div className="h-screen flex justify-center items-center bg-orange-200 text-center">
        <BannerTitle />
      </div>
      <div className="h-screen flex justify-center items-center bg-orange-200 text-center">
        <BannerTitle />
      </div>
      <div className="h-screen flex justify-center items-center bg-orange-200 text-center">
        <BannerTitle />
      </div>
    </Carousel>
  );
};

export default MainBanner;
