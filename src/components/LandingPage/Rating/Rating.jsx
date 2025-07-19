import Image from "next/image";
import React from "react";

export default function Rating() {
  const reviews = [
    {
      name: "Umesh Bandgar",
      date: "July 19, 2025",
      description:
        "It's working fast. I withdrawal 2500 rs in 10 minut",
      rating: 5,
      likes: 223,
    },
    {
      name: "দুষ্টু ছেলে মঙ্গলদীপ",
      date: "July 19, 2025",
      description:
        "Cannot believe it make me rich. Playing Aviator is very easy",
      rating: 5,
      likes: 198,
    },
    {
      name: "Maghraj Arya",
      date: "July 18, 2025",
      description:
        "Maine sirf 400 lga kar 6000 nikal liya",
      rating: 3,
      likes: 150,
    },
    {
      name: "Hamman Sekh",
      date: "July 18, 2025",
      description:
        "I’m not normally one for reviews, but Aviator has earned this one. It’s exhilarating, and the winnings are fantastic. This app is a must!",
      rating: 5,
      likes: 237,
    },
     {
      name: "Sra Pathan",
      date: "July 17, 2025",
      description:
        "I got hooked on this game from the very first moment of playing. I was pleasantly surprised",
      rating: 5,
      likes: 127,
    },
    {
      name: "Vanshubh Raja",
      date: "July 17, 2025",
      description:
        "From the sign-up bonus to the big wins, Aviator exceeded all my expectations. This is how a casino game should be!",
      rating: 4,
      likes: 107,
    },
  ];

  const getStars = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push("★");
    }
    return arr;
  };

  return (
    <div
      className={" my-10 grid gap-6 text-xs md:text-sm text-gray-600 w-full md:w-[70%]"}
    >
      <div className={" flex items-center justify-between"}>
        <h1 className={" text-xl font-semibold text-black "}>
          Rating and reviews
        </h1>
        <p>Rating and reviews are verified</p>
      </div>

      <div className={"flex items-center gap-4"}>
        <button
          className={
            " py-2 px-4 rounded-3xl text-primary hover:text-primary bg-green-100"
          }
        >
          Phone
        </button>
        <button
          className={" py-2 px-4 rounded-3xl bg-green-100"}
        >
          Tablet
        </button>
      </div>

      <div className={"flex items-center gap-4"}>
        <div className={"w-3/12"}>
          <h1 className={"text-4xl text-black "}>4.9</h1>
          <p className={"flex items-center gap-2 text-lg text-primary"}>★★★★★</p>
          <p>19k reviews</p>
        </div>
        <div className={"w-9/12"}>
          <div className={"flex items-center gap-4"}>
            <p>5</p>
            <div
              className={
                "bg-gray-300 rounded-xl overflow-hidden h-[10px] w-full relative"
              }
            >
              <div className={"bg-primary h-full rounded-xl w-[96%]"}></div>
            </div>
          </div>
          <div className={"flex items-center gap-4"}>
            <p>4</p>
            <div
              className={
                "bg-gray-300 rounded-xl overflow-hidden h-[10px] w-full relative"
              }
            >
              <div className={"bg-primary h-full rounded-xl w-[35%]"}></div>
            </div>
          </div>
          <div className={"flex items-center gap-4"}>
            <p>3</p>
            <div
              className={
                "bg-gray-300 rounded-xl overflow-hidden h-[10px] w-full relative"
              }
            >
              <div className={"bg-primary h-full rounded-xl w-[10%]"}></div>
            </div>
          </div>
          <div className={"flex items-center gap-4"}>
            <p>2</p>
            <div
              className={
                "bg-gray-300 rounded-xl overflow-hidden h-[10px] w-full relative"
              }
            >
              {/* <div className={"bg-primary h-full rounded-xl w-[5%]"}></div> */}
            </div>
          </div>
          <div className={"flex items-center gap-4"}>
            <p>1</p>
            <div
              className={
                "bg-gray-300 rounded-xl overflow-hidden h-[10px] w-full relative"
              }
            >
              {/* <div className={"bg-primary h-full rounded-xl w-[30%]"}></div> */}
            </div>
          </div>
        </div>
      </div>

      {/* csutomer reviews  */}
      <div className={" grid gap-8 my-8"}>
        {reviews.map((item, index) => {
          return (
            <div key={index} className={"grid gap-4"}>
              <div className={"flex items-center gap-4"}>
                <Image
                  width={50}
                  height={50}
                  src="/logo_avatar.webp"
                  alt="avatar"
                  className="h-8 w-8"
                />
                <h1 className={" text-black text-base"}>{item?.name}</h1>
              </div>
              <div className={"flex items-center gap-4 "}>
                <div
                  className={"flex items-center gap-2 text-base text-primary"}
                >
                  {getStars(item.rating)}
                </div>
                <p>{item.date}</p>
              </div>
              <p>{item.description}</p>
              <p>{item.likes} people found this review helpful</p>
              <div className={" flex items-center gap-6"}>
                <p>Did you find this helpful?</p>
                <div className={" flex items-center gap-3"}>
                  <button
                    className={
                      " bg-white border border-200 rounded-3xl py-2 px-4 hover:bg-gray-200"
                    }
                  >
                    Yes
                  </button>
                  <button
                    className={
                      " bg-white border border-200 rounded-3xl py-2 px-4 hover:bg-gray-200"
                    }
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className={"text-primary font-semibold cursor-pointer "}>See all reviews</div>
      </div>
    </div>
  );
}
