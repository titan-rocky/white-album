"use client";
import Image from "next/image";
import { useState } from "react";

export function Imagecomp(props: {
  src: any;
  date: string;
  index: number;
  path: RegExpExecArray;
}) {
  const [checked, setCheck] = useState(0);
  return (
    <div
      key={props.index}
      className="flex flex-col items-center bg-lgray border-2 border-black drop-shadow-sm rounded-md m-1 p-3 relative"
      onChange={() => {
        console.log("Hello");
      }}
    >
      <Image
        src={props.src.default}
        alt={`Image ${props.index + 1}`}
        key={props.index}
        className="m-1 w-[6.4em] h-[3.6em] border-black border-2 bg-white rounded-lg object-cover 
                            transition-all delay-0 peer-checked/select:w-[4.8em] peer-checked/select:h-[2.7em] 
                            hover:w-[16em] hover:h-[9em] hover:transition-all hover:ease-in-out hover:delay-[600ms] hover:duration-[400ms]"
        loading="lazy"
        quality="20"
      />
      <div className="truncate text-black ml-2 w-[80%] text-xs">
        {props.path[0]}
      </div>
      <input
        id="select"
        type="checkbox"
        className="absolute left-1 top-1 w-lg enabled:bg-dbl"
        name="select"
      />
    </div>
  );
}
