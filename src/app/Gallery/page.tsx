import { WhHeader, Navspan } from "../Components/comps";
import Image from "next/image";
import "../globals.css";
import { ReadPath } from "./functions";
//import { Imagecomp } from "./clicomponents";

function Imagecomp(props) {
  return (
    <div
      key={props.index}
      className="flex flex-col items-center bg-lgray border-2 border-black drop-shadow-sm rounded-md m-1 p-3 relative"
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

export default function Gallery() {
  return (
    <body className="bg-gray">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly">
        <Navspan link="#" value="Gallery" home={true} />
        <Navspan link="../" value="Home" />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Preferences/" value="Preferences" />
      </nav>
      <section className="border-4 border-black bg-white rounded-xl flex justify-between items-center text-xl m-5 px-10">
        <div className="flex flex-row items-center">
          <h1>Path : </h1>
          <Pathtextbox />
          <Butt name="submit" />
        </div>
        <div className="flex items-center">
          <span className="text-lg text-black">Images per page: </span>
          <select className="m-4 text-sm text-white bg-bl font-start2p bd-gray py-2 px-3 shadow-md shadow-black border-2 border-black">
            <option disabled className="m-3 mt-5 bg-white p-3 text-dgray">
              all
            </option>
            <option className="m-3 mt-5 bg-white p-3 text-black">25</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">50</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">75</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">100</option>
          </select>
        </div>
      </section>

      <main className="border-4 border-black rounded-xl m-5 bg-white flex flex-col flex-wrap items-center">
        <Perdaylist date="22-04-23" />
      </main>
    </body>
  );
}
