import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className=" h-[63px] w-full"></div>
      <Header />
      {children}
      <Footer />
    </>
  );
}
