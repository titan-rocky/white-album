import { v2 as Cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Configuration
Cloudinary.config({
  cloud_name: "dhwwvwpxq",
  api_key: "392948923474237",
  api_secret: "47fnHkc6Vknr_I-jI0Oi1miMnxM",
  secure: true,
});

export async function GET(request, response) {
  let images = { resources: Array<any> };
  await Cloudinary.search
    .expression("resource_type:image")
    .execute()
    .then((result) => {
      images = result;
    });
  return NextResponse.json(images);
}
