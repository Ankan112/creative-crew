import { getUser } from "@/constant";
import { Badge, Button, Tooltip } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import MainButton from "../shared/MainButton";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineCamera } from "react-icons/md";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    router.push("/");
    localStorage.removeItem("user");
    // window.location.reload();
  };
  const data = getUser();

  return (
    <div
      className={`z-50 z-999 w-full top-0 sticky bg-secondary shadow-sm border-b-0 duration-700 ease-in-out  backdrop-blur-xl opacity-70"
    }`}
    >
      <div className="main-container">
        <div
          className={`navbar-wrapper__body flex flex-row items-center justify-between h-full  py-2 md:py-3`}
        >
          <div className="inherit md:hidden">
            <Link
              href="/"
              className="no-underline flex items-center font-bold text-black text-lg"
            >
              <MdOutlineCamera size={30} />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:w-fit md:gap-3">
            <li className="flex">
              <Link
                href="/"
                className="no-underline font-semibold text-black text-xl"
              >
                <div className="flex justify-center items-center">
                  <MdOutlineCamera size={30} />
                  <p className="ml-2">Creative Crew</p>
                </div>
              </Link>
            </li>
          </div>
          {/* Right side menu */}
          <div className="flex items-center gap-4">
            <div className="relative inline-block text-left">
              <div className="flex justify-center items-center">
                <Link
                  href="/"
                  className="hover:underline hidden md:block font-medium duration-200 mr-5 px-2 py-2 rounded text-black no-underline"
                >
                  <p>Home</p>
                </Link>
                <Link
                  href="/about"
                  className="hover:underline font-medium duration-200 mr-5 px-2 py-2 rounded text-black no-underline"
                >
                  <p>About Us</p>
                </Link>
                <Link
                  href="/contact"
                  className="hover:underline font-medium duration-200 mr-5 px-2 py-2 rounded text-black no-underline"
                >
                  <p className="">Contact Us</p>
                </Link>
                {!!data?.email === true &&
                  !(data?.email == "admin@admin.com") && (
                    <Link
                      href="/"
                      className="hover:underline font-medium duration-200 mr-5 px-2 py-2 rounded text-black no-underline"
                    >
                      <Badge count={0} showZero>
                        <p className="">Notification</p>
                      </Badge>
                    </Link>
                  )}
                {!data?.email && (
                  <MainButton
                    name="Login"
                    link="/login"
                    style="py-1 px-4 text-base"
                  />
                )}
                {!!data?.email && (
                  <>
                    <MainButton
                      name="Dashboard"
                      link={`${
                        data.email === "admin@admin.com"
                          ? "/dashboard"
                          : "/dashboard/user-profile"
                      }`}
                      style="py-1 px-4 text-base"
                    />
                    <Tooltip placement="bottomRight" title="Logout">
                      <button
                        onClick={handleSignOut}
                        className="ml-5 text-black border-none cursor-pointer bg-transparent"
                      >
                        <AiOutlineLogout size={24}></AiOutlineLogout>
                      </button>
                    </Tooltip>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Header;
export default dynamic(() => Promise.resolve(Header), { ssr: false });
