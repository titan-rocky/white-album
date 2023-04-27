import { WhHeader, Navspan, Butt } from "../Components/comps";
import Image from "next/image";
import abc from "/images/ghi.png";
import "../globals.css";

function Slideshow(path: any) {
  //const abc = require(data.path);
  const regex = new RegExp("([^/]+)$");
  const m: RegExpExecArray = regex.exec(abc.src)!;
  return (
    <body className="darksoul">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly">
        <Navspan link="#" value="Slideshow" home={true} />
        <Navspan link="/" value="Home" />
        <Navspan link="Gallery/" value="Gallery" />
        <Navspan link="/Preferences" value="Preferences" />
      </nav>
      <main className="m-5 flex items-center">
        <div className="p-10 border-4 basis-2/3 border-black w-[60vw] bg-white bg-opacity-75">
          <Image src={abc} alt="adcf" />
        </div>
        <div className="flex flex-col basis-1/3 bg-white p-10 m-4 border-black border-4 text-md">
          <div className="flex justify-between">
            <span>File Name</span>
            <span>{m[0]}</span>
          </div>
          <div>
            <div>
              <span>Path : </span>
              <span>{abc.src}</span>
            </div>
            <span>extension</span>
          </div>
          <div>
            <Butt name="Download" />
          </div>
        </div>
      </main>
    </body>
  );
}
/*
export async function getServerSideProps() {
  return {
    props: {
      path: "/images/abc.png",
    },
  };
}
*/
export default Slideshow;
