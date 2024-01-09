import { Col, Row } from "antd";
import g1 from "../../../public/gallery/g1.jpg";
import g2 from "../../../public/gallery/g2.jpg";
import g3 from "../../../public/gallery/g3.jpg";
import g4 from "../../../public/gallery/g4.jpg";
import g5 from "../../../public/gallery/g5.jpg";
import g6 from "../../../public/gallery/g6.jpg";
import g7 from "../../../public/gallery/g7.jpg";
import g8 from "../../../public/gallery/g8.jpg";
import g9 from "../../../public/gallery/g9.jpg";
import Image from "next/image";

const Gallery = () => {
  const elements = [
    {
      url: g1,
      col: 6,
    },
    {
      url: g2,
      col: 10,
    },
    {
      url: g3,
      col: 8,
    },
    {
      url: g4,
      col: 8,
    },
    {
      url: g5,
      col: 6,
    },
    {
      url: g6,
      col: 10,
    },
    {
      url: g7,
      col: 10,
    },
    {
      url: g8,
      col: 8,
    },
    {
      url: g9,
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
      <Row gutter={[12, 6]} className="mt-10">
        {elements?.map((data, index) => (
          <Col
            className=""
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={data.col}
            span={data.col}
          >
            <Image
              className=" w-full"
              src={data.url}
              alt="wedding-image"
              height={380}
              width={280}
              responsive="true"
            ></Image>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery;
