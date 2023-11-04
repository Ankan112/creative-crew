import { Col, Row } from "antd";
import Image from "next/image";

const Gallery = () => {
  const elements = [
    {
      url: "/gallery/g1.jpg",
      col: 6,
    },
    {
      url: "/gallery/g2.jpg",
      col: 10,
    },
    {
      url: "/gallery/g3.jpg",
      col: 8,
    },
    {
      url: "/gallery/g4.jpg",
      col: 8,
    },
    {
      url: "/gallery/g5.jpg",
      col: 6,
    },
    {
      url: "/gallery/g6.jpg",
      col: 10,
    },
    {
      url: "/gallery/g8.jpg",
      col: 10,
    },
    {
      url: "/gallery/g9.jpg",
      col: 8,
    },
    {
      url: "/gallery/g7.jpg",
      col: 6,
    },
  ];
  return (
    <div className="main-container mt-10">
      <div className="text-center">
        <h1 className="font-dancing">Gallery</h1>
        <h1 className="text-4xl w-full md:w-2/3 mx-auto mt-4">
          Our Photo Gallery
        </h1>
      </div>
      <Row gutter={[16, 16]} className="mt-10">
        {elements?.map((data, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={data.col}
            span={data.col}
          >
            <Image
              className="h-full w-full"
              src={data.url}
              alt="wedding-image"
              height={400}
              width={300}
              responsive="true"
            ></Image>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
