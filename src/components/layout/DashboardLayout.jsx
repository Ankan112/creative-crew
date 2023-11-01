import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Navbar from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { getUser } from "@/constant";
const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }) => {
  const [activeButton, setActiveButton] = useState(0);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = getUser();
  const buttonStyle = "bg-orange-400";
  const handleButtonClicked = (number) => {
    if (activeButton !== number) {
      setActiveButton(number);
    }
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Link href="/dashboard">
            <p
              onClick={() => handleButtonClicked(0)}
              className={`text-white text-center ${
                activeButton === 0 && buttonStyle
              } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
            >
              Dashboard Home
            </p>
          </Link>
          {data?.email === "admin@admin.com" ? (
            <>
              <Link href="/dashboard/all-user">
                <p
                  onClick={() => handleButtonClicked(1)}
                  className={`text-white text-center ${
                    activeButton === 1 && buttonStyle
                  } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  All User
                </p>
              </Link>
              <Link href="/dashboard/services">
                <p
                  onClick={() => handleButtonClicked(2)}
                  className={`text-white text-center ${
                    activeButton === 2 && buttonStyle
                  } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  Services
                </p>
              </Link>
              <Link href="/dashboard/booking-information">
                <p
                  onClick={() => handleButtonClicked(3)}
                  className={`text-white text-center ${
                    activeButton === 3 && buttonStyle
                  } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  Booking Information
                </p>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard/user-profile">
                <p
                  onClick={() => handleButtonClicked(4)}
                  className={`text-white text-center ${
                    activeButton === 4 && buttonStyle
                  } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  User Profile
                </p>
              </Link>
              <Link href="/dashboard/booking-history">
                <p
                  onClick={() => handleButtonClicked(5)}
                  className={`text-white text-center ${
                    activeButton === 5 && buttonStyle
                  } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  Booking History
                </p>
              </Link>
              <Link href="/dashboard/payment">
                <p
                  onClick={() => handleButtonClicked(6)}
                  className={`text-white text-center ${
                    activeButton === 6 && buttonStyle
                  } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
                >
                  Payment
                </p>
              </Link>
            </>
          )}
          <Link href="/dashboard/notifications">
            <p
              onClick={() => handleButtonClicked(7)}
              className={`text-white text-center ${
                activeButton === 7 && buttonStyle
              } text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
            >
              Notifications
            </p>
          </Link>

          <p
            className={`text-white text-center text-base py-1 hover:bg-orange-400 duration-200 cursor-pointer mt-5 w-[90%] mx-auto rounded-md`}
          >
            Logout
          </p>
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
