import { Col, Row } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import React from "react";
import { Collapse, theme } from "antd";

const getItems = (panelStyle) => [
  {
    key: "1",
    label: "How can I contact you for inquiries or bookings?",
    children: (
      <p className="text-base font-medium">
        You can reach us through the Contact page on our website or by emailing
        us at creative@crew.com. Alternatively, you can give us a call at
        +983473322.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "What types of photography services do you offer?",
    children: (
      <p className="text-base font-medium">
        We specialize in various types of photography, including portrait,
        wedding, event, landscape, commercial, and product photography. Visit
        our Services section for more details.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "What areas do you serve?",
    children: (
      <p className="text-base font-medium">
        We are based in Dhaka and primarily serve clients all over the
        Bangladesh. However, we are open to traveling for projects outside our
        primary service area. Please contact us for more information.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Do you offer custom photography packages?",
    children: (
      <p className="text-base font-medium">
        Yes, we can tailor our services to meet your specific needs and
        preferences. Please reach out to discuss your requirements, and we will
        create a customized package just for you.
      </p>
    ),
    style: panelStyle,
  },
];
const getItems2 = (panelStyle) => [
  {
    key: "1",
    label: "What is your pricing structure?",
    children: (
      <p className="text-base font-medium">
        Our pricing varies based on the type of photography service, location,
        duration, and specific requirements. For detailed pricing information,
        please contact us directly, and we will provide you with a customized
        quote.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label: "Do you require a deposit for bookings?",
    children: (
      <p className="text-base font-medium">
        Yes, we typically require a deposit to secure your booking. The deposit
        amount and payment details will be provided during the booking process.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "How long does a typical photography session last?",
    children: (
      <p className="text-base font-medium">
        The duration of a photography session can vary based on the type of
        shoot and your specific requirements. Portrait sessions usually last
        around 1-2 hours, while events and weddings may take several hours or
        more.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "How long does it take to receive the final edited photos?",
    children: (
      <p className="text-base font-medium">
        The turnaround time for editing and delivering the final photos varies
        depending on the type of shoot. Typically, you can expect to receive
        your edited photos within 3 weeks after the photography session.
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
    fontSize: "18px",
    fontWeight: 600,
    fontFamily: "'Share', sans-serif",
  };
  return (
    <div className="main-container mt-20">
      <div className="text-center mb-10">
        <h1 className="font-dancing">FAQ</h1>
        <h1 className="text-4xl w-full md:w-2/3 mx-auto mt-4">
          Most Asked Questions
        </h1>
      </div>
      <Row gutter={{ lg: 20 }}>
        <Col xs={24} sm={24} md={24} lg={12} span={12}>
          <Collapse
            bordered={false}
            defaultActiveKey={["1"]}
            expandIcon={({ isActive }) => (
              <CaretRightOutlined
                className="text-lg mt-1"
                rotate={isActive ? 90 : 0}
              />
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
              <CaretRightOutlined
                className="text-lg mt-1"
                rotate={isActive ? 90 : 0}
              />
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
