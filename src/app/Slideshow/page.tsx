import { WhHeader, Navspan, Butt } from "../Components/comps";
import Image from "next/image";
import abc from "/images/abc.png";
import "../globals.css";

export default function Slideshow() {
  //const abc = require(props.src);
  const regex = new RegExp("([^/]+)$");
  const m: RegExpExecArray = regex.exec(abc.src)!;
  return (
    <body className="bg-lgray">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly">
        <Navspan link="#" value="Slideshow" home={true} />
        <Navspan link="/" value="Home" />
        <Navspan link="Gallery/" value="Gallery" />
        <Navspan link="/Preferences" value="Preferences" />
      </nav>
      <main className="bg-white flex flex-col items-center">
        <div className="p-10 m-5 border-4 border-black rounded-lg">
          <Image src={abc} alt="adcf" width="500" />
        </div>
        <div className="flex-col items-center">
          <div className="flex justify-evenly">
            <span>File Name</span>
            <span>{m[0]}</span>
          </div>
          <div>
            <div>
              <span>path</span>
              <span>{abc.src}</span>
            </div>
            <span>extension</span>
          </div>
        </div>
        <div>
          <Butt name="Download" />
        </div>
      </main>
    </body>
  );
}
