import { WhHeader, Navspan } from "../Components/comps";
import Image from "next/image";
import "../globals.css";
import { Imagelist } from "./clicomponents";
import "process";
import { useRouter } from "next/router";
import { v2 as Cloudinary } from "cloudinary";

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

// Configuration
Cloudinary.config({
  cloud_name: process.env.cloudapiname,
  api_key: process.env.cloudapikey,
  api_secret: process.env.cloudsecret,
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

async function fetchImages() {
  let images = { resources: [] };
  await Cloudinary.search
    .expression("resource_type:image")
    .execute()
    .then((result) => {
      images = result;
    });
  return images;
}

export default async function Gallery() {
  const img: any = await fetchImages();
  img.resources = img.resources.map((i: any) => {
    return { ...i, isToggle: false, isMatched: true };
  });
  return (
    <section className="flex flex-col min-h-[80vh]">
      <Imagelist images={img} />
    </section>
  );
}
