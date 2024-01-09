import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Navbar from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { getUser } from "@/constant";
import { useRouter } from "next/router";
const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(0);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = getUser();
  const buttonStyle = "bg-[#835858]";
  const handleButtonClicked = (number) => {
    if (activeButton !== number) {
      setActiveButton(number);
    }
  };
  const handleSignOut = () => {
    router.push("/");
    localStorage.removeItem("user");
    // window.location.reload();
  };
  return (
    <>
      <Navbar />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className="bg-[#463333]"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />

          {data?.email === "admin@admin.com" ? (
            <>
              <Link href="/dashboard">
                <p
                  onClick={() => handleButtonClicked(0)}
                  className={`text-white text-center ${
                    activeButton === 0 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer w-[95%] rounded mt-5 mx-auto`}
                >
                  Dashboard Home
                </p>
              </Link>
              <Link href="/dashboard/all-user">
                <p
                  onClick={() => handleButtonClicked(1)}
                  className={`text-white text-center ${
                    activeButton === 1 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  All User
                </p>
              </Link>
              <Link href="/dashboard/services">
                <p
                  onClick={() => handleButtonClicked(2)}
                  className={`text-white text-center ${
                    activeButton === 2 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  Services
                </p>
              </Link>
              <Link href="/dashboard/create-service">
                <p
                  onClick={() => handleButtonClicked(3)}
                  className={`text-white text-center ${
                    activeButton === 3 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  Create Service
                </p>
              </Link>
              <Link href="/dashboard/booking-information">
                <p
                  onClick={() => handleButtonClicked(4)}
                  className={`text-white text-center ${
                    activeButton === 4 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  Booking Information
                </p>
              </Link>
              <Link href="/dashboard/notifications">
                <p
                  onClick={() => handleButtonClicked(8)}
                  className={`text-white text-center ${
                    activeButton === 8 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  Notifications
                </p>
              </Link>
            </>
          ) : (
            <>
              <Link href="/dashboard/user-profile">
                <p
                  onClick={() => handleButtonClicked(5)}
                  className={`text-white text-center ${
                    activeButton === 5 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  User Profile
                </p>
              </Link>
              <Link href="/dashboard/order">
                <p
                  onClick={() => handleButtonClicked(9)}
                  className={`text-white text-center ${
                    activeButton === 9 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  New Order
                </p>
              </Link>
              <Link href="/dashboard/booking-history">
                <p
                  onClick={() => handleButtonClicked(6)}
                  className={`text-white text-center ${
                    activeButton === 6 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  Booking History
                </p>
              </Link>
              <Link href="/dashboard/payment">
                <p
                  onClick={() => handleButtonClicked(7)}
                  className={`text-white text-center ${
                    activeButton === 7 && buttonStyle
                  } text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
                >
                  Payment
                </p>
              </Link>
            </>
          )}
          <p
            onClick={handleSignOut}
            className={`text-white text-center text-base py-1 hover:bg-[#835858] duration-200 cursor-pointer mt-5 w-[95%] mx-auto rounded`}
          >
            Logout
          </p>
        </Sider>
        <Layout>
          <Content>
            <div
              style={{
                padding: 24,
                // height: "100vh",
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
