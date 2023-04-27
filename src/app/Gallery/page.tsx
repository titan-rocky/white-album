import { WhHeader, Navspan } from "../Components/comps";
import Image from "next/image";
import "../globals.css";
import { ReadPath } from "./functions";
import { Imagecomp, Imagelist } from "./clicomponents";
import "process";
import { v2 as Cloudinary } from "cloudinary";

// Configuration
Cloudinary.config({
  cloud_name: "dhwwvwpxq",
  api_key: "392948923474237",
  api_secret: "47fnHkc6Vknr_I-jI0Oi1miMnxM",
  secure: true,
});

function Butt(props: { name: string }) {
  return (
    <input
      type="button"
      value={props.name}
      className={`text-sm text-white bg-bl font-start2p bd-gray py-2 px-3 shadow-md shadow-black m-5 border-2 border-black
                            hover:bg-black`}
    />
  );
}

function Pathtextbox() {
  return (
    <input
      type="text"
      placeholder={""}
      className="m-3 px-3 py-2 text-md bg-white text-bl truncate active:decoration-none active:border-0 focus:border-0 placeholder:text-lred rounded-lg "
    />
  );
}

/*
function Perdaylist(props: { date: string }) {
  const images = ReadPath("C:/Users/rocka/Pictures/wallpapers");
  return (
    <div className="p-10 flex flex-col">
      <span className="text-green m-2 text-l">{props.date}</span>
      <div className="grid p-3 grid-cols-6 ms-center">
        {images.map((src: any, index: number) => {
          const regex = new RegExp("([^/]+)$");
          const m: RegExpExecArray = regex.exec(src.default.src)!;
          return (
            <Imagecomp src={src} date={props.date} index={index} path={m} />
          );
        })}
      </div>
    </div>
  );
}
*/

async function Gallery(props) {
  console.log(props);
  return (
    <body className="bg-gray wafall">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly">
        <Navspan link="#" value="Gallery" home={true} />
        <Navspan link="../" value="Home" />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Preferences/" value="Preferences" />
      </nav>
      <main className="flex flex-col">
        <Imagelist images={images.resources} />
      </main>
    </body>
  );
}

export default Gallery;
