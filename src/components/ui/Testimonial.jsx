import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rate } from "antd";
import { PiUserCircleThin } from "react-icons/pi";

const reviewData = [
  {
    review:
      "Exceeded expectations - photos were breathtakingly beautiful and truly captured our joy.",
    name: "Rana Hassan",
    designation: "Traveler",
    ratings: 5,
  },
  {
    review:
      "Thrilled with the exceptional quality of our photos, the attention to detail, and the ability to truly capture our special moments.",
    name: "Luci Jeny",
    designation: "Businessman",
    ratings: 3.5,
  },
  {
    review:
      "Exceptional service! Their attention to detail and ability to capture genuine emotions exceeded our expectations.",
    name: "Tina",
    designation: "Traveler",
    ratings: 4,
  },
  {
    review:
      "Exceptional photography that perfectly captured our moments. Highly professional and a joy to work with.",
    name: "Mick Lrsa",
    designation: "Singer",
    ratings: 4.5,
  },
  {
    review:
      "Their work exceeded our expectations, truly capturing the magic of our special day.",
    name: "Jack Moch",
    designation: "Designer",
    ratings: 5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="main-container mt-10">
      <div className="text-center">
        <h1 className="font-dancing">Testimonial</h1>
        <h1 className="text-4xl w-full md:w-2/3 mx-auto mt-4">
          What our clients say about us
        </h1>
      </div>
      <div className="px-2 md:px-0">
        <Slider {...settings}>
          {reviewData.map((data, index) => (
            <div key={index}>
              <div className="border border-solid border-gray-200 shadow-md my-10 md:mx-4 h-64 rounded-xl p-8">
                <div className="text-center">
                  <div>
                    <PiUserCircleThin size={48}></PiUserCircleThin>
                  </div>
                  <div className="">
                    <h3 className="font-medium secondary-text">{data?.name}</h3>
                    <h6 className="opacity-80 text-sm">{data?.designation}</h6>
                  </div>
                  <div className="my-2">
                    <Rate disabled allowHalf defaultValue={data?.ratings} />
                  </div>
                </div>
                <p className="h-24 text-center text-medium ">{data?.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
