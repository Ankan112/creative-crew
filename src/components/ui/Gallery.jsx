import { Col, Row } from "antd";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className="main-container">
      <div className="text-center">
        <h1>Our photo gallery</h1>
      </div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={6} span={6}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={300}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={10} span={10}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} span={8}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} span={8}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} span={6}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={10} span={10}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={10} span={10}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} span={8}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} span={6}>
          <Image
            className="h-full w-full"
            src="/wedding1.jpg"
            alt="wedding-image"
            height={400}
            width={400}
            responsive="true"
          ></Image>
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
