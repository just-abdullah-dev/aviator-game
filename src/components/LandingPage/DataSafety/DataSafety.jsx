import { CloudUploadIcon, LockKeyhole, Share2, Trash2 } from "lucide-react";
import React from "react";

export default function DataSafety() {

  return (
    <div
      className={" my-10 grid gap-6 text-xs md:text-sm text-gray-600 w-full md:w-[70%]"}
    >
      <h1 className={" text-xl font-semibold text-black "}>Data Safety</h1>
      <div>
       In this section, developers can specify how applications collect and use data.
      </div>
      <div className={" p-4 border border-gray-300 rounded-md grid gap-4"}>
        <div className={" flex items-center gap-4"}>
          <Share2 />
          <div>
            <p className={""}>
              No data shared with third parties
            </p>
            <p className={"text-[10px]"}><span className=" underline">Learn more</span> about how developers declare sharing</p>
          </div>
        </div>
        <div className={" flex items-center gap-4"}>
          <CloudUploadIcon />
          <div>
            <p className={""}>No data collected</p>
           <p className={"text-[10px]"}><span className=" underline">Learn more</span> about how developers declare collection</p>
          </div>
        </div>
        {/* <div className={" flex items-center gap-4"}>
          <LockKeyhole />
          <div>
            <p className={""}>Data isn’t encrypted</p>
          </div>
        </div>
        <div className={" flex items-center gap-4"}>
          <Trash2 />
          <div>
            <p className={""}>You can request that data be deleted</p>
          </div>
        </div> */}
        <div className={"text-primary font-semibold cursor-pointer "}>See details</div>
      </div>
    </div>
  );
}
