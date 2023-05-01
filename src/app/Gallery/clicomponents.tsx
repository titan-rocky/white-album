"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Router from "next/router";
import { Suspense } from "react";
import { v2 as Cloudinary } from "cloudinary";
import { State } from "zustand";

type cloudimage = {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: string;
  etag: string;
  created_by: any;
  uploaded_by: any;
  isToggle: boolean;
  isMatched: boolean;
};

function Loading() {
  return <div>Loading ...</div>;
}

export function Imagecomp(props: {
  src: any;
  index: number;
  onCheck: any;
  setToggle: Function;
}) {
  const [checked, setCheck] = useState(props.src.isToggle);
  useEffect(() => {
    setCheck(props.src.isToggle);
  });
  if (props.src.isMatched == false) {
    return <></>;
  }
  return (
    <div
      className={`flex flex-col items-center bg-${
        checked ? "white" : "lgray"
      } border-2 border-black drop-shadow-sm rounded-md m-1 p-3 relative`}
      onChange={() => {
        console.log("Hello");
      }}
    >
      <div className="m-1 overflow-hidden border-black border-2  rounded-lg">
        <Image
          src={props.src.url}
          alt={`Image ${props.src.filename}`}
          width={400}
          height={225}
          quality="60"
          className="w-[12em] h-[6.75em] bg-white object-cover
                            transition-all delay-0
                            hover:scale-150 over:transition-all hover:ease-in-out hover:duration-[1000ms]"
          loading="eager"
        />
      </div>
      <div className="truncate text-black ml-2 w-[80%]">
        <Link
          className="text-xs"
          href={{ pathname: "/Slideshow", query: props.src }}
        >
          {props.src.filename + "." + props.src.format}
        </Link>
      </div>
      <input
        id={"select" + props.index.toString()}
        type="checkbox"
        className="absolute left-1 top-1 w-lg enabled:bg-dbl"
        name="select"
        defaultChecked={checked}
        onChange={() => {
          props.setToggle((s: any) => {
            s.map((i: any) => {
              if (i.filename == props.src.filename) {
                i.isToggle ? false : true;
                checked ? false : true;
              }
            });
            return s;
          });
        }}
      />
    </div>
  );
}

export function Imagelist(props: { images: any }) {
  const [sortby, SetSort] = useState("1");
  // 1-date , 2-name , 3-type
  const [scount, Setcount] = useState(0);
  const [imgcomponents, Setimages] = useState(
    props.images.resources.map((i: any) => {
      return { ...i, isToggle: false, isMatched: true };
    })
  );
  useEffect(() => {
    console.log("Images:", imgcomponents);
  }, [props.images, imgcomponents]);

  return (
    <div className="flex flex-col items-stretch">
      <div className="border-4 border-black bg-white rounded-xl flex items-center justify-around text-xl m-5 px-10">
        <div className="">
          <span>Sort By</span>
          <select
            className="m-4 text-sm text-white bg-bl font-start2p bd-gray py-2 px-3 shadow-md shadow-black border-2 border-black"
            onChange={(event) => {
              console.log(event.target.value);
              if (event.target.value == "1") {
                Setimages((s: any) => {
                  s.sort((a: cloudimage, b: cloudimage) => {
                    return new Date(a.created_at).getTime() <
                      new Date(b.created_at).getTime()
                      ? 1
                      : -1;
                  });
                  return s;
                });
              } else if (event.target.value == "2") {
                Setimages((s: any) => {
                  s.sort((a: cloudimage, b: cloudimage) =>
                    a.filename > b.filename ? 1 : -1
                  );
                  return s;
                });
              } else if (event.target.value == "3") {
                Setimages((s: any) => {
                  s.sort((a: cloudimage, b: cloudimage) =>
                    a.format > b.format ? 1 : -1
                  );
                  return s;
                });
              }
              SetSort(event.target.value);
            }}
          >
            <option className="m-3 mt-5 bg-white p-3 text-black" value={1}>
              Date
            </option>
            <option className="m-3 mt-5 bg-white p-3 text-black" value={2}>
              Name
            </option>
            <option className="m-3 mt-5 bg-white p-3 text-black" value={3}>
              Type
            </option>
          </select>
        </div>
        <div>
          <span>Search</span>
          <input type="text" className="border-4 bg-lbl mx-4 px-5" />
        </div>
        <div className="flex items-center">
          <span className="text-lg text-black">Images per page: </span>
          <select className="m-4 text-sm text-white bg-bl font-start2p bd-gray py-2 px-3 shadow-md shadow-black border-2 border-black">
            <option className="m-3 mt-5 bg-lgray p-3 text-dgray">inf</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">25</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">50</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">75</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">100</option>
          </select>
        </div>
      </div>

      <div className="border-4 border-black rounded-xl m-5 my-2 bg-white flex flex-col flex-wrap items-center bg-opacity-60 p-10">
        <div className="flex justify-between items-center w-full">
          <span className="text-black p-3 text-xl">{`${scount} files selected`}</span>
          <div className="p-3  flex justify-center">
            <input
              type="button"
              value="&#128465;"
              className="px-3 py-1 text-xl bg-pur hover:bg-black border-4 border-black shadow-black shadow-md mx-2 text-white"
            />
            <input
              type="button"
              className="px-3 py-1 font-arcade text-md bg-ylw hover:bg-black border-4 border-black shadow-black shadow-md mx-2 text-white"
              value="&#129095;"
            />
            <input
              type="button"
              className="px-3 py-1 text-sm bg-green hover:bg-black border-4 border-black shadow-black shadow-md mx-2 text-white"
              value="Select All"
              onClick={() =>
                Setimages((s: any) => {
                  s.map((i: cloudimage) => {
                    i.isToggle = true;
                  });
                  Setcount(s.length);
                  return s;
                })
              }
            />
            <input
              type="button"
              value="Deselect All"
              className="px-3 py-1 text-sm bg-green hover:bg-black border-4 border-black shadow-black shadow-md mx-2 text-white"
              onClick={() =>
                Setimages((s: any) => {
                  s.map((i: cloudimage) => {
                    i.isToggle = false;
                  });
                  Setcount(0);
                  return s;
                })
              }
            />
          </div>
        </div>
        <div className="grid p-3 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
          {imgcomponents.map((src: any, index: number) => {
            return (
              <Imagecomp
                src={src}
                key={index}
                index={index}
                setToggle={Setimages}
                onCheck={(e: number) => {
                  e == 1 ? Setcount((n) => n - 1) : Setcount((n) => n + 1);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
/*
class ImageL extends React.Component {
  constructor(props : {imageAsset:Array<any>}) {
    super(props)
    this.state = {
            imageArray = [];
            selectCount = 0;
        }
    this.handleClick = this.handleClick.bind(this)
  }
  get()

  render() {
    return {};
  }
}
*/
