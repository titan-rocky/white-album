import { v2 as Cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

// Configuration
Cloudinary.config({
  cloud_name: process.env.cloudapiname,
  api_key: process.env.cloudapikey,
  api_secret: process.env.cloudsecret,
  secure: true,
});

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json();
  console.log(data);
  data.data.forEach((i: any) => {
    console.log(i);
    try {
      const res = Cloudinary.uploader.upload(i.toString(), {
        public_id: "image",
      });

      res
        .then((dat: any) => {
          console.log(dat);
          console.log(dat.secure_url);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  });
  return NextResponse.json(data);
}
