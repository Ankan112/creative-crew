import { Col, Row } from "antd";
import { GrUserExpert } from "react-icons/gr";
import { BiCustomize, BiSupport, BiLogoReact } from "react-icons/bi";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="main-container my-20">
      <Row>
        <Col xs={24} sm={24} md={24} lg={8} span={8}>
          <div className="h-auto w-full hidden lg:block">
            <Image
              src="/about2.jpg"
              alt="about"
              height={550}
              width={425}
              responsive="true"
            ></Image>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} span={16}>
          <div className="md:px-0 lg:px-10">
            <div className="">
              <h1 className="">Why Choose Us</h1>
              <h1 className="text-4xl my-4 ">
                It is our job to capture the moments that matter.
              </h1>
            </div>
            <p className="text-base font-medium">
              We are the storytellers behind the lens, crafting memories that
              echo laughter and love. With passion as our guide and creativity
              as our canvas, we freeze time in a frame, narrating tales of
              shared journeys and endless devotion.
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center mt-5">
              <div className="w-full md:w-1/2">
                <div className="h-[50px] w-[50px] border-2 border-solid border-black flex justify-center items-center">
                  <GrUserExpert size={36} className="p-1" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl mb-2">Experience and Expertise</h3>
                  <p className="font-medium">
                    Our aim is capturing the essence of love, joy, and the
                    unique beauty of your journey, frame by frame.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-[50px] w-[50px] border-2 border-solid border-black flex justify-center items-center">
                  <BiLogoReact size={36} className="p-1" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl mb-2">Creative Approach</h3>
                  <p className="font-medium">
                    Our aim is capturing the essence of love, joy, and the
                    unique beauty of your journey, frame by frame.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 items-center mt-5">
              <div className="w-full md:w-1/2">
                <div className="h-[50px] w-[50px] border-2 border-solid border-black flex justify-center items-center">
                  <BiCustomize size={36} className="p-1" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl mb-2">Flexibility & Customization</h3>
                  <p className="font-medium">
                    Our aim is capturing the essence of love, joy, and the
                    unique beauty of your journey, frame by frame.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="h-[50px] w-[50px] border-2 border-solid border-black flex justify-center items-center">
                  <BiSupport size={36} className="p-1" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl mb-2">24/7 Premium Support</h3>
                  <p className="font-medium">
                    Our aim is capturing the essence of love, joy, and the
                    unique beauty of your journey, frame by frame.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChooseUs;
