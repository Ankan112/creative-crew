import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";
import ScrollToTopButton from "../shared/ScrollToTopButton";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="bg-secondary bg-opacity-60">
        <footer className="main-container relative text-primary pt-8 pb-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap text-left gap-y-5 lg:text-left">
              <div className="w-full md:w-6/12 lg:w-3/12">
                <h4 className="text-3xl font-semibold text-primary">
                  Creative Crew
                </h4>
                <h5 className="text-lg my-2 text-primary">
                  Capturing Moments, Creating Memories.
                </h5>
                <div className="mt-6 flex">
                  <button
                    className="border-none bg-white text-black text-lightBlue-400 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <BsYoutube className="w-full h-full p-2" />
                  </button>
                  <button
                    className="border-none bg-white text-black text-lightBlue-600 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <BsTwitter className="w-full h-full p-2" />
                  </button>
                  <button
                    className="border-none bg-white text-black shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <BsFacebook className="w-full h-full p-2" />
                  </button>
                  <button
                    className="border-none bg-white text-black text-blueGray-800 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <BiLogoLinkedin className="w-full h-full p-[6px]" />
                  </button>
                  <button
                    className="border-none bg-white text-black text-blueGray-800 shadow-lg font-normal h-9 w-9 items-center justify-center align-center rounded-md outline-none focus:outline-none mr-4"
                    type="button"
                  >
                    <IoLogoWhatsapp className="w-full h-full p-[6px]" />
                  </button>
                </div>
              </div>
              <div className="w-full flex lg:justify-center md:w-6/12 lg:w-3/12">
                <div className="flex flex-wrap ">
                  <div className="w-full">
                    <span className="block uppercase text-primary text-base font-bold mb-2">
                      Necessary Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link
                          className="text-primary font-semibold block pb-2 text-sm"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-primary font-semibold block pb-2 text-sm"
                          href="/about"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-primary font-semibold block pb-2 text-sm"
                          href="/contact"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-primary font-semibold block pb-2 text-sm"
                          href="/login"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 flex  lg:justify-center">
                <div className="">
                  <span className="block uppercase text-primary text-base font-bold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-primary font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        target="_blank"
                      >
                        Our License
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-primary font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                        target="_blank"
                      >
                        Terms &amp; Conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-primary font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-primary font-semibold block pb-2 text-sm"
                        href="/certificate"
                      >
                        Certificate
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 flex justify-start lg:justify-center">
                <div>
                  <span className="block uppercase text-primary text-base font-bold mb-2">
                    We Accept
                  </span>
                  <div className="w-full">
                    <Image
                      src={"/payment.png"}
                      height={150}
                      width={320}
                      alt="paymentImage"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-3 border-solid border-gray-500" />
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
              <div className="w-full text-center">
                <div className="text-sm text-primary font-semibold py-1">
                  All Rights Reserved &copy; {year} Creative Crew Online
                  Service.
                </div>
              </div>
            </div>
          </div>
          <ScrollToTopButton />
        </footer>
      </div>
    </>
  );
};

export default Footer;
