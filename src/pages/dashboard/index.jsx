import React, { useState } from "react";
import RootLayout from "@/components/layout/RootLayout";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import Navbar from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [bgColor, setBgColor] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Navbar />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Link href="/dashboard/user-information">
            <p
              onClick={() => setBgColor(true)}
              className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
            >
              User Information
            </p>
          </Link>
          <Link href="/dashboard/user-information">
            <p
              onClick={() => setBgColor(true)}
              className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
            >
              Booking History
            </p>
          </Link>
          <Link href="/dashboard/user-information">
            <p
              onClick={() => setBgColor(true)}
              className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
            >
              Payment
            </p>
          </Link>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            // items={[
            //   UserOutlined,
            //   VideoCameraOutlined,
            //   UploadOutlined,
            //   UserOutlined,
            // ].map((icon, index) => ({
            //   key: String(index + 1),
            //   icon: React.createElement(icon),
            //   label: `nav ${index + 1}`,
            // }))}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          <Content
            style={{
              margin: "24px 16px 0",
            }}
          >
            <div
              style={{
                padding: 24,
                height: "100vh",
                background: colorBgContainer,
              }}
            >
              content
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
