"use client";
import { useState, useEffect } from "react";
import { v2 as Cloudinary } from "cloudinary";
import { Suspense } from "react";
import Image from "next/image";

function ImageComponent(props: { images: Array<string> }) {
  if (props.images.length) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 items-center px-3 bg-gray border-4 border-black max-h-[50vh] overflow-y-scroll my-5">
        {Array.from(props.images).map((file, index) => {
          return (
            <Image
              src={file}
              alt="Image"
              key={index}
              className="m-3 bg-white border-4 border-black"
              width={240}
              height={135}
              quality={30}
              loading="lazy"
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="bg-gray m-10 p-5 rounded-lg border-4 border-black">
        No Files
      </div>
    );
  }
}

function Loading() {
  return <div>Loading...</div>;
}

export function Uploadsection() {
  const [upfiles, UploadFiles] = useState<Array<string>>([]);

  return (
    <section className="flex flex-col w-full items-center">
      <h1 className="text-3xl mb-10">Upload Files</h1>
      <Suspense fallback={<Loading />}>
        <form
          className="flex flex-col items-center"
          action="/api/upload"
          method="POST"
        >
          <div className="flex justify-center mx-2 w-full">
            <input
              type="File"
              className="bg-bl border-4 border-black rounded-sm p-2 text-white shadow-md shadow-black file:bg-white file:m-3 file:flex-col file:px-3 file:py-2 px-10"
              onChange={(e) => {
                // @ts-ignore: type error
                const a = [...e.target.files].map((i: File) =>
                  URL.createObjectURL(i)
                );
                UploadFiles(() => a);
                console.log("DOne");
              }}
              multiple
              required
            />
          </div>
          <div className="flex justify-center my-2">
            <ImageComponent images={upfiles} />
          </div>
          <input
            type="Submit"
            value="Upload"
            className="bg-dbl rounded-sm px-3 py-1 text-white border-4 border-black shadow-xl hover:bg-black hover:text-white"
          />
        </form>
      </Suspense>
    </section>
  );
}
