import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import Navbar from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { getUser } from "@/constant";
const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }) => {
  const [bgColor, setBgColor] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = getUser();

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

          {data?.email === "admin@admin.com" ? (
            <>
              <Link href="/dashboard/all-user">
                <p
                  onClick={() => setBgColor(true)}
                  className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  All User
                </p>
              </Link>
              <Link href="/dashboard/services">
                <p
                  onClick={() => setBgColor(true)}
                  className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  Services
                </p>
              </Link>
              <Link href="/dashboard/booking-information">
                <p
                  onClick={() => setBgColor(true)}
                  className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  Booking Information
                </p>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard/user-profile">
                <p
                  onClick={() => setBgColor(true)}
                  className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  User Profile Summary
                </p>
              </Link>
              <Link href="/dashboard/booking-history">
                <p
                  onClick={() => setBgColor(true)}
                  className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  Booking History
                </p>
              </Link>
            </>
          )}
          <Link href="/dashboard/notifications">
            <p
              onClick={() => setBgColor(true)}
              className={`text-white text-center text-base py-1 hover:bg-blue-400 duration-300 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
            >
              Notifications
            </p>
          </Link>
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
              {children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
