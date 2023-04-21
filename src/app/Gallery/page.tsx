import { WhHeader, Navspan } from "../Components/comps";
import Image from "next/image";

import i1 from "/Images/abc.png";
import i2 from "/Images/def.png";
import i3 from "/Images/jkl.png";
import i4 from "/Images/mno.png";
import i5 from "/Images/pqr.png";
import i6 from "/Images/stu.png";

function Perdaylist(props: { imgs: Array; date: string }) {
  return (
    <div className="p-10 m-5">
      <span className="text-dbl m-2 text-l">{props.date}</span>
      <div className="flex items-center shrink p-3 flex-wrap">
        {props.imgs.map((src, index: number) => {
          return (
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="m-1 w-[15em] h-[10em] object-cover border-black rounded-xl border-4 transition-all delay-0
                hover:w-[21em] hover:h-[14em] hover:transition-all hover:ease-in-out hover:delay-[800ms]"
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <body className="bg-lgray">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly">
        <Navspan link="#" value="Gallery" home={true} />
        <Navspan link="../" value="Home" />
        <Navspan link="Slideshow/" value="Slideshow" />
        <Navspan link="Preferences/" value="Preferences" />
      </nav>
      <main className="border-4 border-black rounded-xl m-5 bg-white flex flex-col flex-wrap">
        <Perdaylist imgs={[i1, i2, i3]} date="22-04-23" />
        <Perdaylist imgs={[i4, i5, i6, ""]} date="16-04-23" />
      </main>
    </body>
  );
}
