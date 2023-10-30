import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import ScrollToTopButton from "../shared/ScrollToTopButton";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#2F3137]">
      <footer className="main-container relative pt-8 pb-6">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="text-center">
              <h4 className="text-3xl font-semibold text-white">
                Creative Crew
              </h4>
              <h5 className="text-lg mb-4 mt-2 text-white">
                Capturing Moments, Creating Memories.
              </h5>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="mt-2 lg:mb-0 mb-6 flex justify-center">
              <button
                className="border-none bg-white text-black text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                type="button"
              >
                <BsYoutube className="w-full h-full p-2" />
              </button>
              <button
                className="border-none bg-white text-black text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                type="button"
              >
                <BsTwitter className="w-full h-full p-2" />
              </button>
              <button
                className="border-none bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                type="button"
              >
                <BsFacebook className="w-full h-full p-2" />
              </button>
              <button
                className="border-none bg-white text-black text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                type="button"
              >
                <BiLogoLinkedin className="w-full h-full p-[6px]" />
              </button>
              <button
                className="border-none bg-white text-black text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-4"
                type="button"
              >
                <IoLogoWhatsapp className="w-full h-full p-[6px]" />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <Link
                href="/"
                className="hover:underline font-medium duration-200 mr-5 px-2 py-2 rounded text-white no-underline"
              >
                <p>Home</p>
              </Link>
              <Link
                href="/about"
                className="hover:underline font-medium duration-200 mr-5 px-2 py-2 rounded text-white no-underline"
              >
                <p>About Us</p>
              </Link>
              <Link
                href="/contact"
                className="hover:underline font-medium duration-200 mr-5 px-2 py-2 rounded text-white no-underline"
              >
                <p className="">Contact Us</p>
              </Link>
            </div>
          </div>
          <hr className="my-6 border border-solid border-gray-500" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                <span id="get-current-year">
                  All Rights Reserved &copy; {year} Creative Crew Online
                  Service.
                </span>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
      </footer>
    </div>
  );
};

export default Footer;
