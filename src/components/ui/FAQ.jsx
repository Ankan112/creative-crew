import { Col, Row } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse, theme } from "antd";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "This is panel header 1",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "This is panel header 4",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
];
const getItems2 = (panelStyle) => [
  {
    key: "1",
    label: "This is panel header ",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "This is panel header ",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "This is panel header 34",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "This is panel header 43",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque
        delectus officiis similique sunt est in distinctio voluptas pariatur
        numquam?
      </p>
    ),
    style: panelStyle,
  },
];
const FAQ = () => {
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  return (
    <div className="main-container">
      <div className="text-center my-10">
        <h1>frequently asked questions</h1>
      </div>
      <Row gutter={{ lg: 20 }}>
        <Col xs={24} sm={24} md={24} lg={12} span={12}>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} span={12}>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined rotate={isActive ? 90 : 0} />
            )}
            style={{
              background: token.colorBgContainer,
            }}
            items={getItems2(panelStyle)}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FAQ;
