"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Suspense } from "react";

function Loadingimage() {
  return <div>Loading...</div>;
}

export function Imagelist(props: { images: any }) {
  const [id, setId] = useState(0);
  const [imgcomponents, Setimages] = useState(props.images.resources);
  const [delay, SetDelay] = useState(5);
  const [paused, SetPause] = useState(true);
  useEffect(() => {
    if (!paused) {
      const x = setInterval(() => {
        setId(id == imgcomponents.length - 1 ? 0 : id + 1);
      }, delay * 1000);
      return () => clearInterval(x);
    }
  });
  return (
    <div className="flex flex-col m-10">
      <div className="flex  justify-around items-center mb-10">
        <div className="flex flex-col items-center">
          <div className=" p-5 border-4 border-black bg-white bg-opacity-70 m-3">
            <Suspense fallback={<Loadingimage />}>
              <Image
                src={imgcomponents[id].url}
                alt={imgcomponents[id].filename}
                width={imgcomponents[id].width}
                height={imgcomponents[id].height}
                className="w-[900px] h-[506.25px] object-cover"
              />
            </Suspense>
          </div>
        </div>
      </div>
      <div className=" text-center p-5 border-4 border-black bg-white bg-opacity-70">
        <span className="mb-10 mt-2px text-lg text-center max-w-lg">
          {imgcomponents[id].filename + "." + imgcomponents[id].format}
        </span>
        <div className="flex items-center justify-center">
          <input
            type="button"
            value="<"
            className="text-black hover:text-bl text-4xl font-bold disabled:text-white px-5 py-2"
            onClick={() => {
              setId((s) => (s === 0 ? imgcomponents.length - 1 : s - 1));
            }}
          />

          <button className="m-5" disabled={paused}>
            <span
              className={`text-3xl text-${
                paused ? "bl" : "black"
              } hover:text-bl`}
              onClick={() => SetPause(true)}
            >
              ||
            </span>
          </button>
          <button disabled={!paused} className="m-5">
            <span
              className={`text-3xl text-${
                paused ? "black" : "bl"
              } hover:text-bl`}
              onClick={() => SetPause(false)}
            >
              ▶
            </span>
          </button>
          <input
            type="button"
            value=">"
            onClick={() =>
              setId((s: number) => (s === imgcomponents.length - 1 ? 0 : s + 1))
            }
            className="text-black hover:text-bl text-4xl  font-bold disabled:text-white px-5 py-2"
          />
        </div>
      </div>
    </div>
  );
}
