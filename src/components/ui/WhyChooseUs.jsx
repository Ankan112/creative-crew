import { Col, Row } from "antd";

const WhyChooseUs = () => {
  return (
    <div className="main-container my-10">
      <Row>
        <Col xs={24} sm={24} md={12} lg={8} span={8}>
          <h1>Image</h1>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16} span={16}>
          <div className="md:px-0 lg:px-10">
            <h1>Why Choose Us</h1>
            <p className="text-3xl my-2">
              It is our job to capture the moments that matter.
            </p>
            <p className="text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore itaque sunt reiciendis ad quae facere explicabo
              quibusdam, pariatur repellendus minus?
            </p>
            <div className="flex justify-between items-center mt-5">
              <div>
                <div>icon</div>
                <div>
                  <h3>Experience and Expertise</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, tempora?
                  </p>
                </div>
              </div>
              <div>
                <div>icon</div>
                <div>
                  <h3>Experience and Expertise</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, tempora?
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <div>icon</div>
                <div>
                  <h3>Experience and Expertise</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, tempora?
                  </p>
                </div>
              </div>
              <div>
                <div>icon</div>
                <div>
                  <h3>Experience and Expertise</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit, tempora?
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
