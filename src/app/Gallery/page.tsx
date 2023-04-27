import { WhHeader, Navspan } from "../Components/comps";
import Image from "next/image";
import "../globals.css";
import { Imagelist } from "./clicomponents";
import "process";

import { v2 as Cloudinary } from "cloudinary";

// Configuration
Cloudinary.config({
  cloud_name: "dhwwvwpxq",
  api_key: "392948923474237",
  api_secret: "47fnHkc6Vknr_I-jI0Oi1miMnxM",
  secure: true,
});

async function fetchThumbUrl(name: string) {
  const url = Cloudinary.url(name, {
    width: 160,
    height: 90,
    Crop: "fill",
  });
  return url;
}

async function fetch() {
  let images = { resources: Array<any> };
  await Cloudinary.search
    .expression("resource_type:image")
    .execute()
    .then((result) => {
      images = result;
    });
  return images;
}

export default async function Gallery() {
  const img = await fetch();
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
        <Imagelist images={img} />
      </main>
    </body>
  );
}
