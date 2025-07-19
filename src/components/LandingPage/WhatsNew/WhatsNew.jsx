import React from "react";

export default function WhatsNew() {
  return (
    <div
      className={" my-10 grid gap-6 text-xs md:text-sm text-gray-600 w-full md:w-[70%]"}
    >
      <h1 className={" text-xl font-semibold text-black "}>What&apos;s New</h1>
      <div>New game, enjoy downloading and playing together.</div>

      <h1 className={"text-black text-lg font-semibold md:hidden block"}>App Support</h1>
      <p className={"text-black text-base"}>Flag as inappropriate</p>
    </div>
  );
}
