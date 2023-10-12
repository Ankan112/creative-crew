import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rate } from "antd";
import { BiSolidUserCircle } from "react-icons/bi";

const reviewData = [
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, omnis quas. Id placeat eius rerum velit ad saep laboriosam sunt!",
    name: "Terry Hang",
    designation: "Traveler",
    ratings: 5,
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, omnis quas. Id placeat eius rerum velit ad saep laboriosam sunt!",
    name: "Luci Jeny",
    designation: "Businessman",
    ratings: 3.5,
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, omnis quas. Id placeat eius rerum velit ad saep laboriosam sunt!",
    name: "Samu Fika",
    designation: "Traveler",
    ratings: 4,
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, omnis quas. Id placeat eius rerum velit ad saep laboriosam sunt!",
    name: "Mick Lrsa",
    designation: "Singer",
    ratings: 4.5,
  },
  {
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, omnis quas. Id placeat eius rerum velit ad saep laboriosam sunt!",
    name: "Tom Herry",
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
    <div className="main-container">
      <div className="text-center">
        <h1>Testimonial</h1>
        <h1>Client Feedback</h1>
      </div>
      <div className="px-2 md:px-0">
        <Slider {...settings}>
          {reviewData.map((data, index) => (
            <div key={index}>
              <div className="shadow-xl my-10 md:mx-4 h-64 rounded-xl p-8">
                <p>{data?.review}</p>

                <Rate disabled allowHalf defaultValue={data?.ratings} />
                <div className="flex items-center mt-4">
                  <div>
                    <BiSolidUserCircle size={48}></BiSolidUserCircle>
                  </div>
                  <div className="ml-5">
                    <h3 className="font-medium secondary-text">{data?.name}</h3>
                    <h6 className="opacity-80 text-sm">{data?.designation}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
