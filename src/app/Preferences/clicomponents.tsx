"use client";
import { useState, useEffect } from "react";
import "../globals.css";

export function Needbox() {
  const [checked, setCheck] = useState(0);
  const [showH, setH] = useState(false);
  return (
    <div className="p-5">
      <div className="">
        <input
          id="che"
          type="text"
          placeholder="Click Me"
          className="border-7 border-black shadow-xl rounded-xl text-lg text-red font-bold m-3 px-3 py-1"
          onChange={() => {
            setH(showH ? false : true);

            setCheck(checked ? 0 : 1);
          }}
        />
      </div>
      {showH && (
        <span className="text-4xl animate-pulse text-white">
          Sorry for the Inconvenience !
        </span>
      )}
    </div>
  );
}
