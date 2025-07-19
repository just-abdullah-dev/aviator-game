"use client";
import { Share2 } from "lucide-react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <></>;
  }
  let mb = false;

  if (window !== undefined) {
    mb = window.innerWidth < 700 ? true : false;
  }
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-[-15px] md:right-[-26px] rounded-full bg-white shadow-md p-1 md:p-4 transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-gray-800 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className=" absolute top-1/2 left-[-15px] md:left-[-26px] rounded-full bg-white shadow-md p-1 md:p-4  transform -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-gray-800 hover:text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: mb ? 1 : 1.5,
    slidesToScroll: 1,
    nextArrow: mb ? <></> : <NextArrow />,
    prevArrow: mb ? <></> : <PrevArrow />,
  };

  return (
    <div
      className={
        "h-fit md:min-h-[calc(100vh-64px)] w-full text-gray-600 relative"
      }
    >
      <div
        className={
          " h-fit md:h-[60%] flex items-center justify-between w-full overflow-hidden"
        }
      >
        <div className={" grid gap-10 w-full"}>
          {/* title, tagline, reveiws  */}
          <div className={" grid gap-6 w-full mt-12 md:m-0"}>
            <div className={" flex gap-6 items-start "}>
              <Image
                src={"/logo.webp"}
                width={75}
                height={75}
                alt={"app logo"}
                className={" aspect-auto md:hidden rounded-lg"}
              />
              <div>
                <div className={" flex items-center flex-wrap gap-3"}>
                  <h1
                    className={
                      "text-[22px] md:text-6xl font-medium md:font-bold text-black"
                    }
                  >
                    Aviator Game
                    {/* {mb && " - Casino, Slots, Crash, Aviator"} */}
                  </h1>
                  {/* {!mb && "-"}
                  <p className={" hidden md:block"}>
                    Casino, Slots, Crash, Aviator
                  </p> */}
                </div>
                <div className={"text-primary font-semibold text-sm md:hidden"}>
                  Casino co.
                  <p className=" text-gray-600 text-sm font-light">
                    Without ads · In-app purchases
                  </p>
                </div>
              </div>
            </div>
            <div className={"text-primary font-semibold hidden md:block"}>
              Casino co.
              <p className=" text-gray-600 text-sm font-light">
                Without ads · In-app purchases
              </p>
            </div>
            <div
              className={
                "flex items-center w-full md:gap-4 justify-between md:justify-start text-sm px-4"
              }
            >
              <div className={" grid place-items-center"}>
                <p className={" text-black font-medium"}>4.9 &#9733;</p>
                <p className={""}>19k reveiws</p>
              </div>
              <div className={" grid place-items-center"}>
                <p className={" text-black font-medium"}>500k +</p>
                <p className={""}>Downloads</p>
              </div>
              <div className={" grid place-items-center"}>
                <Image
                  src={"/rate.gif"}
                  height={15}
                  width={15}
                  className={"aspect-auto mb-1"}
                  alt={"rate logo"}
                />
                <p className={""}>Rated for 18+</p>
              </div>
            </div>
          </div>
          {/* install and share btns , etc  */}
          <div
            className={
              " flex flex-col md:flex-row items-center gap-4 text-[14px] font-semibold md:text-base md:font-normal"
            }
          >
            <button
              className={
                " bg-primary rounded-lg py-2 md:py-3 w-full md:w-fit md:px-20 text-white hover:bg-opacity-90 "
              }
              onClick={() => {
                window.open(
                  "https://dl.dropbox.com/scl/fi/x12wxm2z13o96tpri9tpl/Theaviator-game.apk?rlkey=yjtlgbau5tiv6jn94foe86eec&st=i1hez75j&dl=0"
                );
              }}
            >
              Install
            </button>
            <div className={" flex items-center gap-4 mb-4 md:m-0"}>
              <button
                className={
                  " bg-white rounded-lg py-3 px-6 text-primary hover:bg-opacity-90 flex items-center gap-4 "
                }
              >
                <Share2 size={24} fill="#00875f" strokeWidth="1.2px" />
                Share
              </button>
              <button
                className={
                  " rounded-lg py-3 w-full md:px-8 text-gray-400 flex items-center gap-2 opacity-70 "
                }
              >
                <span className="VfPpkd-kBDsod iCNeVd" aria-hidden="true">
                  <svg
                    className="aThNrd"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 3H17C18.1045 3 19 3.8955 19 5V21L12 18L5 21L5.01075 5C5.01075 3.8955 5.8965 3 7 3ZM12 15.824L17 18V5H7V18L12 15.824ZM13 7V9H15V11H13V13H11V11H9V9H11V7H13Z"
                      fill="rgb(156, 163, 175)"
                    />
                  </svg>
                </span>{" "}
                Add to wishlist
              </button>
            </div>
          </div>
        </div>
        <div className={" mr-6 hidden md:grid "}>
          <Image
            src={"/logo.webp"}
            width={250}
            height={250}
            alt={"app logo"}
            className={" aspect-auto rounded-[40px]"}
          />
        </div>
      </div>
      <div className="mt-12"></div>
      {/* Only show first 3 images, last image visible on scroll */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide" style={{scrollSnapType: 'x mandatory'}}>
        <div className="border-none outline-none w-[40%] md:w-[13%] flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
          <Image
            src="/1.webp"
            className="rounded-xl"
            alt="image 1"
            width={600}
            height={200}
          />
        </div>
        <div className="border-none outline-none w-[40%] md:w-[13%] flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
          <Image
            src="/2.webp"
            className="rounded-xl"
            alt="image 2"
            width={600}
            height={200}
          />
        </div>
        <div className="border-none outline-none w-[40%] md:w-[13%] flex-shrink-0" style={{scrollSnapAlign: 'start'}}>
          <Image
            src="/3.webp"
            className="rounded-xl"
            alt="image 3"
            width={600}
            height={200}
          />
        </div>
        <div className="border-none outline-none w-full flex-shrink-0" style={{scrollSnapAlign: 'end'}}>
          <Image
            src="/4.webp"
            className="rounded-xl"
            alt="image 4"
            width={600}
            height={200}
          />
        </div>
      </div>
      {/* <div
        className={
          " h-fit md:h-[40%] relative border-none outline-none flex flex-col md:flex-row items-center mt-12 md:m-0"
        }
      >
        <div className={" w-full md:w-[65%]"}>
          <Slider {...settings}>
            <div className={"border-none outline-none "}>
              <Image
                src="/1.webp"
                className={" w-[40%] rounded-xl "}
                alt={"image 3"}
                width={600}
                height={200}
              />
            </div>
            <div className={"border-none outline-none "}>
              <Image
                src="/2.webp"
                className={" w-[40%] rounded-xl "}
                alt={"image 4"}
                width={600}
                height={200}
              />
            </div>
            <div className={"border-none outline-none "}>
              <Image
                src="/3.webp"
                className={" w-[40%] rounded-xl "}
                alt={"image 5"}
                width={600}
                height={200}
              />
            </div>
            <div className={"border-none outline-none "}>
              <Image
                src="/4.webp"
                className={" aspect-vide rounded-xl "}
                alt={"image 6"}
                width={600}
                height={200}
              />
            </div>
          </Slider>
        </div>
        <div className={"w-[10%] hidden md:block "} />
        <div className={"w-full md:w-[25%] h-full"}>
          <h1 className={"text-black text-xl font-semibold hidden md:block"}>
            App Support
          </h1>
        </div>
      </div> */}
    </div>
  );
}
