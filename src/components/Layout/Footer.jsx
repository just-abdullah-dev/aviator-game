import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const footer_links = [
    {
      name: "Terms of Service",
      path: "#",
    },
    {
      name: "Privacy",
      path: "#",
    },
    {
      name: "About Google Play",
      path: "#",
    },
    {
      name: "Developers",
      path: "#",
    },
    {
      name: "Google Store",
      path: "#",
    },
    {
      name: "All prices include GST.",
      path: "#",
    },
  ];

  const googlePlayLinks = [
    "Play Pass",
    "Play Points",
    "Gift cards",
    "Rdeem",
    "Refund Policy",
  ];

  const kidsLinks = ["Parent Guide", "Family sharing"];

  return (
    <div className=" px-8 md:px-10 lg:px-24 text-[14px] md:text-sm bg-white py-5 border-t border-gray-300 mb-20 md:m-0">
      <div className={"flex flex-col md:flex-row mb-12 "}>
        <div className={" w-1/2 md:w-1/3 mb-12 md:m-0"}>
          <h2 className={"text-black my-2"}>Google Play</h2>
          <div className=" flex flex-col gap-3">
            {googlePlayLinks.map((item, index) => {
              return (
                <p key={index} className={" text-gray-600 "}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className={" w-1/2 md:w-1/3"}>
          <h2 className={"text-black my-2"}>Kids and family</h2>
          <div className=" flex flex-col gap-3">
            {kidsLinks.map((item, index) => {
              return (
                <p key={index} className={" text-gray-600 "}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between ">
        <div className=" flex items-center gap-6 md:gap-3 md:justify-between flex-wrap w-full h-full md:w-2/4">
          {footer_links.map((item, index) => {
            return (
              <Link key={index} href={item.path} className={" text-gray-600 "}>
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className=" w-1/4 hidden md:block"></div>
        <div className=" w-full md:w-1/4 flex items-center md:justify-end justify-start gap-4 mt-6 md:m-0">
          <Image
            src="/india.webp"
            width={30}
            height={30}
            className=""
            alt="india country flag"
          />
          <p>India&nbsp;(English&nbsp;(United&nbsp;States))</p>
        </div>
      </div>
    </div>
  );
}
