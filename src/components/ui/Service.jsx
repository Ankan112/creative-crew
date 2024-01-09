import { Col, Row } from "antd";
import Image from "next/image";
import MainButton from "../shared/MainButton";
import Link from "next/link";

const Service = () => {
  const services = [
    {
      image: "/service1.jpg",
      title: "Wedding Photography",
      description:
        "Every click a timeless memory, every shot a love story unfolded.",
      path: "wedding-photography",
    },
    {
      image: "/service2.jpg",
      title: "Outdoor Photography",
      description:
        "In the heart of every photograph lies the love that binds two souls.",
      path: "outdoor-photography",
    },
    {
      image: "/service3.jpg",
      title: "Birthday Photography",
      description:
        "With each click, we etch the timeless tale of love and joy.",
      path: "birthday-photography",
      style: "flex flex-col md:flex-row-reverse ",
    },
    {
      image: "/service4.jpg",
      title: "Mehendi Photography",
      description:
        "Each click, a chapter of love written in light and emotion.",
      path: "mehendi-photography",
      style: "flex flex-col md:flex-row-reverse ",
    },
  ];
  return (
    <div className="main-container -mt-10">
      <div className="text-center">
        <h1 className="font-dancing">What we offer</h1>
        <h1 className="text-4xl w-full md:w-2/3 mx-auto mt-4">
          Create the stories you want people to remember.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
        {services?.map((service, index) => {
          const { title, description, path } = service;
          return (
            <div
              key={index}
              className="w-full flex justify-center border border-solid border-gray-300 shadow-xl rounded-md p-8 hover:scale-105 transition duration-300"
            >
              <div className="text-center">
                <div className="h-16 w-16 rounded-full accent-color text-white flex justify-center items-center mx-auto">
                  <h1 className="text-4xl">0{index + 1}</h1>
                </div>
                <h2 className="mt-6 mb-3">{title}</h2>
                <p className="mb-4">{description}</p>
                <MainButton
                  name="Check Details"
                  link={`/category/${path}`}
                  style="py-[2px] px-2 text-base border-gray-500 text-black"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
