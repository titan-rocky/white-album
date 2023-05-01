import Image from "next/image";
import { useState, useEffect } from "react";
import { v2 as Cloudinary } from "cloudinary";
import { Suspense } from "react";
import { Uploadsection } from "./clicomponents";

export default function Upload() {
  return <Uploadsection />;
}
