import { Col, Row } from "antd";
import Image from "next/image";
import MainButton from "../shared/MainButton";
import Link from "next/link";

const Service = () => {
  return (
    <div className="main-container">
      <div className="text-center mt-20">
        <h1>What we offer</h1>
        <h1>Create the stories you want people to remember.</h1>
      </div>
      <Row
        style={{ boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.1)" }}
        className="mt-10"
      >
        <Col className="" xs={24} sm={24} md={24} lg={12} span={12}>
          <Row className="-mb-2">
            <Col
              className="text-center overflow-hidden h-[296px] w-[320px]"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <Link href="/category/wedding-photography">
                <Image
                  className="hover:scale-110 transition duration-700 cursor-pointer object-cover"
                  src={"/download.jpeg"}
                  alt="wedding-image"
                  height={300}
                  width={320}
                  responsive
                ></Image>
              </Link>
            </Col>
            <Col
              className=" flex justify-center items-center"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <div className="p-7">
                <h1 className="text-2xl font-semibold">Wedding Photography</h1>
                <p className="text-lg my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, ducimus!
                </p>
                <MainButton
                  name="Discover More"
                  link="/category/wedding-photography"
                  style="py-1 px-2 text-lg border-black text-black"
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="" xs={24} sm={24} md={24} lg={12} span={12}>
          <Row>
            <Col
              className="text-center overflow-hidden h-[300px] w-[320px]"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <Link href="/category/outdoor-photography">
                <Image
                  className="hover:scale-110 transition duration-700 cursor-pointer object-cover"
                  src={"/download.jpeg"}
                  alt="wedding-image"
                  height={296}
                  width={320}
                  responsive
                ></Image>
              </Link>
            </Col>
            <Col
              className=" flex justify-center items-center"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <div className="p-7">
                <h1 className="text-2xl font-semibold">Wedding Photography</h1>
                <p className="text-lg my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, ducimus!
                </p>
                <MainButton
                  name="Discover More"
                  link="/category/outdoor-photography"
                  style="py-1 px-2 text-lg border-black text-black"
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="" xs={24} sm={24} md={24} lg={12} span={12}>
          <Row className="-mt-1">
            <Col
              className=" flex justify-center items-center"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <div className="p-7">
                <h1 className="text-2xl font-semibold">Wedding Photography</h1>
                <p className="text-lg my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, ducimus!
                </p>
                <MainButton
                  name="Discover More"
                  link="/category/birthday-photography"
                  style="py-1 px-2 text-lg border-black text-black"
                />
              </div>
            </Col>
            <Col
              className="text-center overflow-hidden h-[296px] w-[320px]"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <Link href="/category/birthday-photography">
                <Image
                  className="hover:scale-110 transition duration-700 cursor-pointer object-cover"
                  src={"/download.jpeg"}
                  alt="wedding-image"
                  height={296}
                  width={320}
                  responsive
                ></Image>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col className="" xs={24} sm={24} md={24} lg={12} span={12}>
          <Row className="-mt-1">
            <Col
              className=" flex justify-center items-center"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <div className="p-7">
                <h1 className="text-2xl font-semibold">Wedding Photography</h1>
                <p className="text-lg my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, ducimus!
                </p>
                <MainButton
                  name="Discover More"
                  link="/category/medendi-photography"
                  style="py-1 px-2 text-lg border-black text-black"
                />
              </div>
            </Col>
            <Col
              className="text-center overflow-hidden h-[296px] w-[320px]"
              xs={24}
              sm={24}
              md={12}
              span={12}
            >
              <Link href="/category/mehendi-photography">
                <Image
                  className="hover:scale-110 transition duration-700 cursor-pointer object-cover"
                  src={"/download.jpeg"}
                  alt="wedding-image"
                  height={296}
                  width={320}
                  responsive
                ></Image>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Service;
