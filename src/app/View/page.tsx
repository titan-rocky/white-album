import { WhHeader, Navspan, Butt } from "../Components/comps";
import Image from "next/image";
import abc from "/images/ghi.png";
import "../globals.css";
import { v2 as Cloudinary } from "cloudinary";
import { useRouter } from "next/navigation";
//import { ImageComponent } from "./clicomponents";
import Link from "next/link";

Cloudinary.config({
  cloud_name: process.env.cloudapiname,
  api_key: process.env.cloudapikey,
  api_secret: process.env.cloudsecret,
  secure: true,
});

function View(props: { params: any; searchParams: any }) {
  const query = props.searchParams;
  return (
    <main className="m-5 flex flex-row justify-around items-center">
      <div className="p-10 border-4 border-black w-[60vw] bg-white bg-opacity-75">
        <Image
          src={query.url}
          width={query.width}
          height={query.height}
          alt="adcf"
        />
      </div>

      <div className="flex flex-col bg-white p-10 m-4 border-black border-4 text-md">
        <div className="flex justify-around my-2">
          <span className="basis-1/2">File Name : </span>
          <span className="basis-1/2 overflow-x-hidden">{query.filename}</span>
        </div>
        <div className="flex justify-around my-2">
          <span className="basis-1/2">File Type : </span>
          <span className="basis-1/2 overflow-x-hidden">{query.format}</span>
        </div>
        <div className="flex justify-around my-2">
          <span className="basis-1/2">Created At :</span>
          <span className="basis-1/2 overflow-x-hidden">
            {query.created_at}
          </span>
        </div>
        <div className="my-5">
          <a
            href={query.url}
            download={query.url}
            className="bg-bl border-4 border-black px-3 py-2 shadow-xl my-10 hover:bg-black hover:text-white"
          >
            Download
          </a>
        </div>
      </div>
    </main>
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
export default View;
