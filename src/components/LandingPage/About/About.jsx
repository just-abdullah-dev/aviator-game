import React from "react";

export default function About() {
  const tags = [
    "#4 Topfree casino apps",
    "Casino",
    "Apps",
    "Slot Machine",
    "Game",
    "Aviator",
  ];
  return (
    <div
      className={
        " my-10 grid gap-6 text-xs md:text-sm text-gray-600 w-full md:w-[70%]"
      }
    >
      <h1 className={" text-xl font-semibold text-black "}>About this App</h1>
      {/* <div className="  ">
        🎉 Welcome to aviator-game — Your Gaming Paradise! 🎉
        <br />
        aviator-game is a unique and exciting gaming app, allowing you to enjoy the
        fun of the casino without spending one cent.
        <br />
        <br />
        🌟 Game Features 🌟
        <br />
        🎰 Unlimited Roulette Fun: Experience the classic roulette game and
        enjoy winning points!
        <br />
        🏆 Competition and Challenges: Engage in diverse gaming challenges and
        compete with players worldwide!
        <br />
        <br />
        📜 Disclaimer &amp; Notices 📜
        <br />
        This app is for entertainment only and does not involve any actual
        transaction. Our games are only offered for adults over 21 years old.
        Please enjoy the game sensibly and avoid addiction.
        <br />
        <br />
        🌈 Explore &amp; Discover 🌈
        <br />
        In aviator-game, you will find endless excitement and fun. Without
        financial worries, you can freely explore various casino games,
        challenge yourself, and win generous rewards.
        <br />
        <br />
        🎉 Download aviator-game now, embark on your exciting journey, and uncover
        more fun and challenges!
      </div> */}
      <div>
        India's first leading real money making Aviator game where you can start
        earning instantly and withdraw profit directly to your Bank account
        using UPI. You can change your destiny using this app.<br/><br/> Supported payment
        Apps are PhonePe, Gpay, Paytm, all other UPI Apps etc.
      </div>
      <div>
        <p className={" text-black  font-semibold"}>Updated on</p>
        <p>July 18, 2025</p>
      </div>
      {/* <div className={"flex items-center gap-4 flex-wrap"}>
        {tags.map((item, index) => {
          return (
            <div
              key={index}
              className={
                " py-2 px-4 bg-gray-200 rounded-md border border-gray-300"
              }
            >
              {item}
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
