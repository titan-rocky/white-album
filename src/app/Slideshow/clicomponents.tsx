"use client";
import { useState } from "react";
import Image from "next/image";
import { Suspense } from "react";

export function Imagelist(props: { images: any }) {
  const [id, setId] = useState(0);
  const [imgcomponents, Setimages] = useState(props.images.resources);
  return (
    <div className="flex flex-col m-10">
      <div className="flex  justify-around items-center mb-10">
        <input
          type="button"
          value={id <= 0 ? " Start " : "Previous"}
          disabled={id <= 0}
          className="border-4 border-black bg-bl disabled:bg-black disabled:border-white shadow-xl disabled:text-white px-5 py-2"
          onClick={(e: any) => {
            e.preventDefault();
            setId((s) => (s - 1) % imgcomponents.length);
            console.log(id);
          }}
        />
        <div className="flex flex-col items-center">
          <div className=" p-5 border-4 border-black bg-white bg-opacity-70 m-3">
            <Image
              src={imgcomponents[id].url}
              alt={imgcomponents[id].filename}
              width={imgcomponents[id].width}
              height={imgcomponents[id].height}
              className="w-[800px] h-[450px] object-cover"
            />
          </div>
        </div>
        <input
          type="button"
          value={id >= imgcomponents.length - 1 ? " End" : "Next"}
          disabled={id >= imgcomponents.length - 1}
          onClick={() => setId((s: number) => (s + 1) % imgcomponents.length)}
          className="border-4 border-black bg-bl disabled:bg-black disabled:border-white shadow-xl disabled:text-white px-5 py-2"
        />
      </div>
      <div className=" text-center p-5 border-4 border-black bg-white bg-opacity-70">
        <span className="mb-10 mt-2px text-lg text-center max-w-lg">
          {imgcomponents[id].filename + "." + imgcomponents[id].format}
        </span>
      </div>
    </div>
  );
}
