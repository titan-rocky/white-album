import { v2 as Cloudinary } from "cloudinary";
import { warn } from "console";
import { NextResponse } from "next/server";

// Configuration
Cloudinary.config({
  cloud_name: process.env.cloudapiname,
  api_key: process.env.cloudapikey,
  api_secret: process.env.cloudsecret,
  secure: true,
});

export async function GET(request: any, response: any) {
  let images = { resources: Array<any> };
  await Cloudinary.search
    .expression("resource_type:image")
    .execute()
    .then((result) => {
      images = result;
    });
  return NextResponse.json(images);
}
