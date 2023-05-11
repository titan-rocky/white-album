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

export function Imagecomp(props: { src: any; index: number; onCheck: any }) {
  const [checked, setCheck] = useState(props.src.isToggle);
  if (props.src.isMatched == false) {
    return <></>;
  }
  return (
    <div
      className={`bg-${
        checked ? "white" : "lgray"
      } border-2 border-black drop-shadow-sm rounded-md m-1 p-4 px-5 relative`}
    >
      <Link
        className="flex flex-col items-center"
        href={{ pathname: "/View", query: props.src }}
      >
        <div className="m-1 overflow-hidden border-black border-2 rounded-lg w-[12em] h-[6.75em]">
          <Image
            src={props.src.url}
            alt={`Image ${props.src.filename}`}
            width={400}
            height={225}
            quality="60"
            className="bg-white w-[12em] h-[6.75em] object-cover
                            transition-all delay-0
                            hover:scale-150 over:transition-all hover:ease-in-out hover:duration-[1000ms]"
            loading="eager"
          />
        </div>
        <div className="truncate text-black ml-2 my-1 overflow-x-hidden w-52">
          <span className="text-xs">
            {" "}
            {props.src.filename + "." + props.src.format}
          </span>
        </div>
      </Link>
      <input
        id={"select" + props.index.toString()}
        type="checkbox"
        className="absolute left-1 top-1 w-lg enabled:bg-dbl z-10"
        name="select"
        defaultChecked={checked}
        onChange={(e) => {
          props.onCheck(props.index, !checked);
          props.src.isToggle = props.src.isToggle ? false : true;
          setCheck(checked ? false : true);
        }}
      />
    </div>
  );
}

export function Imagelist(props: { images: any }) {
  const [sortby, SetSort] = useState("1");
  // 1-date , 2-name , 3-type
  const [imgcomponents, Setimages] = useState(props.images.resources);
  const [searchbut, Setsearch] = useState(0);

  function setToggle(id: number, toggle: boolean) {
    Setimages((s: Array<cloudimage>) => {
      s[id].isToggle = toggle;
      return s;
    });
  }
  return (
    <div className="flex flex-col items-stretch">
      <div className="border-4 border-black bg-white rounded-xl flex flex-col lg:flex-row items-center justify-around m-5 px-10 py-2">
        <div className="flex flex-col items-center sm:flex-row">
          <span>Sort By</span>
          <select
            className="m-4 text-sm text-white bg-bl font-start2p bd-gray py-2 px-3 shadow-md shadow-black border-2 border-black"
            onChange={(event) => {
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
        <div className="flex flex-col items-center sm:flex-row">
          <input
            type="text"
            className="border-4 bg-lbl mx-4 px-5"
            onChange={(e) => {
              e.preventDefault();
              Setimages((s: any) => {
                s.map((i: cloudimage) => {
                  if (i.filename.match("^" + e.target.value + ".") != null) {
                    i.isMatched = true;
                  } else {
                    i.isMatched = false;
                  }
                });
                return s;
              });
            }}
          />
          <input
            type="button"
            value="search"
            className="m-4 text-sm text-white bg-bl font-start2p bd-gray py-2 px-3 shadow-md shadow-black border-2 border-black hover:bg-black hover:text-white"
            onClick={() => {
              Setsearch((s: any) => (s ? 0 : 1));
            }}
          />
        </div>
      </div>

      <div className="border-4 border-black rounded-xl m-5 my-2 bg-white bg-opacity-60 p-10">
        <div className="flex justify-between items-center w-full">
          <span className="text-black p-3 text-xl">{`Select Files`}</span>
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
                  let count = 0;
                  s.map((i: cloudimage) => {
                    if (i.isMatched) {
                      i.isToggle = true;
                      count++;
                    }
                  });
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
                  let count = 0;
                  s.map((i: cloudimage) => {
                    i.isToggle = false;
                  });
                  return s;
                })
              }
            />
          </div>
        </div>
        <div className="grid p-3 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
          {imgcomponents.map((src: any, index: number) => {
            return (
              <Imagecomp
                src={src}
                key={index}
                index={index}
                onCheck={setToggle}
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
