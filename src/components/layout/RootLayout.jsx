import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
