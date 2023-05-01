import { v2 as Cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Configuration
Cloudinary.config({
  cloud_name: process.env.cloudapiname,
  api_key: process.env.cloudapikey,
  api_secret: process.env.cloudsecret,
  secure: true,
});

export async function POST(request, response) {
  let images = { resources: Array<any> };
  return NextResponse.json(request);
}
