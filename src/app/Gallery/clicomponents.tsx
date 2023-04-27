"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";

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
};

export function Imagecomp(props: { src: any; index: number; onCheck: any }) {
  const [checked, setCheck] = useState(0);
  return (
    <div
      key={props.index}
      className={`flex flex-col items-center bg-${
        checked ? "white" : "lgray"
      } border-2 border-black drop-shadow-sm rounded-md m-1 p-3 relative`}
      onChange={() => {
        console.log("Hello");
      }}
    >
      <Image
        src={props.src.url}
        alt={`Image ${props.src.filename}`}
        key={props.index}
        width="160"
        height="90"
        quality="30"
        className="m-1 w-[6.4em] h-[3.6em] border-black border-2 bg-white rounded-lg object-cover 
                            transition-all delay-0 peer-checked/select:w-[4.8em] peer-checked/select:h-[2.7em] 
                            hover:w-[16em] hover:h-[9em] hover:transition-all hover:ease-in-out hover:delay-[600ms] hover:duration-[400ms]"
        loading="eager"
      />
      <div
        className="truncate text-black ml-2 w-[80%] flex justify-center"
        key={props.index}
      >
        <a
          className="text-xs"
          href={props.src.url}
          download={props.src.url}
          target="_blank"
        >
          {props.src.filename + "." + props.src.format}
        </a>
      </div>
      <input
        id={"select" + props.index.toString()}
        type="checkbox"
        key={props.index}
        className="absolute left-1 top-1 w-lg enabled:bg-dbl"
        name="select"
        onChange={() => {
          setCheck(checked ? 0 : 1);
          props.onCheck(checked);
          console.log(checked);
        }}
      />
    </div>
  );
}

function Filters() {
  return (
    <div>
      <div>
        <span>Sort By</span>
        <select>
          <option>Date</option>
          <option>Name</option>
          <option>Type</option>
        </select>
      </div>
      <div>
        <span>Search</span>
        <input type="text" />
      </div>
    </div>
  );
}

/*
 Image : {
         src : string,
         isSelected : bool,
         isMatched : bool, //grep
     }
*/

function SelectButtons(props: { onSelect: any; onDeselect: any }) {
  return (
    <div className="p-3  flex justify-center">
      <input
        type="button"
        className="px-3 py-1 text-md bg-green hover:bg-black border-4 border-black shadow-black shadow-md mx-2 text-white"
        value="Select All"
        onClick={props.onSelect}
      />
      <input
        type="button"
        value="Deselect All"
        className="px-3 py-1 text-md bg-red hover:bg-black border-4 border-black shadow-black shadow-md mx-2 text-white"
        onClick={props.onDeselect}
      />
    </div>
  );
}

export function Imagelist(props: { images: any }) {
  const [sortby, SetSort] = useState("1");
  // 1-date , 2-name , 3-type
  const [scount, Setcount] = useState(0);
  const [imgcomponents, Setimages] = useState(props.images.resources);
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

      <div className="border-4 border-black rounded-xl m-5 my-2 bg-white flex flex-col flex-wrap items-center bg-opacity-80 p-10 overflow-y-scroll">
        <div className="flex justify-between items-center w-full">
          <span>{`${scount} files selected`}</span>
          <SelectButtons
            onSelect={() => alert("FUck")}
            onDeselect={() => alert("Suck")}
          />
        </div>
        <div className="grid p-3 grid-cols-6 ms-center">
          {imgcomponents.map((src: any, index: number) => {
            //const regex = new RegExp("([^/]+)$");
            //const m: RegExpExecArray = regex.exec(src.default.src)!;
            return (
              <Imagecomp
                src={src}
                key={index}
                index={index}
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
