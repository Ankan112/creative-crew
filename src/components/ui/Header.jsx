import { getUser } from "@/constant";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Header = () => {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const data = getUser();
  console.log(data?.email);

  return (
    <div
      className={`z-50 z-999 w-full top-0 sticky shadow-sm border-b-0 duration-700 ease-in-out  backdrop-blur-xl opacity-70"
      }`}
    >
      <div className="main-container">
        <div
          className={`navbar-wrapper__body flex flex-row items-center justify-between text-white h-full  py-2 md:py-3`}
        >
          <div className="inherit md:hidden">
            <Link
              href="/"
              className="no-underline font-bold text-black text-lg"
            >
              <p>Creative Crew</p>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:w-fit md:gap-3">
            <li className="flex">
              <Link
                href="/"
                className="no-underline font-bold text-black text-lg"
              >
                <p>Creative Crew</p>
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
                {!data?.email && (
                  <Link href="/login">
                    <Button type="primary">Login</Button>
                  </Link>
                )}
                {!!data?.email && (
                  <button
                    type="button"
                    className="border-gray-800 rounded-full flex items-center justify-center ml-5"
                    id="menu-button"
                    aria-expanded={isDropdownOpen}
                    aria-haspopup="true"
                    onClick={toggleDropdown}
                  >
                    <Image
                      alt="avatar"
                      className={`w-10 h-10 rounded-full p-[2px] bg-white cursor-pointer`}
                      src="https://i.ibb.co/nrtwzQd/avatar-boy.webp"
                      decoding="async"
                      loading="lazy"
                      width={300}
                      height={300}
                    />
                  </button>
                )}
              </div>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-green-500 ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <Link
                      href="/dashboard"
                      className="text-gray-600 hover:bg-[#f3f4f9] block px-4 py-2 text-base duration-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/user-information"
                      className="text-gray-600 hover:bg-[#f3f4f9] block px-4 py-2 text-base duration-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      User Information
                    </Link>
                    <Link
                      href="/booking-history"
                      className="text-gray-600 hover:bg-[#f3f4f9] block px-4 py-2 text-base duration-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Booking History
                    </Link>
                    <Link
                      href="/payment"
                      className="text-gray-600 hover:bg-[#f3f4f9] block px-4 py-2 text-base duration-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Payment
                    </Link>
                    <p
                      onClick={handleSignOut}
                      className="text-gray-600 hover:bg-[#f3f4f9] cursor-pointer block px-4 py-2 text-base duration-300"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      Log Out
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default Header;
export default dynamic(() => Promise.resolve(Header), { ssr: false });
