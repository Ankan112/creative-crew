import React from "react";
import { SiInstagram } from "react-icons/si";
import { TfiTwitter } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="secondary-bg mt-10">
      <footer className="main-container relative pt-8 pb-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12">
              <h4 className="text-3xl font-semibold text-gray-900">
                Creative Crew
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-800">
                Bus Authority has the right to cancel any bus schedule at any
                time.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                <button
                  className="border-none bg-white text-black text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <SiInstagram className="w-full h-full p-2" />
                </button>
                <button
                  className="border-none bg-white text-black text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <TfiTwitter className="w-full h-full p-2" />
                </button>
                <button
                  className="border-none bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebookF className="w-full h-full p-2" />
                </button>
                <button
                  className="border-none bg-white text-black text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <BiLogoLinkedin className="w-full h-full p-[6px]" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-800 text-sm font-bold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="/about-us"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="/blog"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="/bus"
                      >
                        Bus
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="/reserve-bus"
                      >
                        Reserve Bus
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-800 text-sm font-bold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        Our License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-700 font-semibold py-1">
                <span id="get-current-year">
                  All Rights Reserved &copy; {year} Creative Crew Online
                  Service.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
