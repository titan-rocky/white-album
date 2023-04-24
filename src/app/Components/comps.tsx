import Image from "next/image";
import wa from "../resources/wa.png";
import usans from "../resources/whichbook.gif";

export function Butt(props: { name: string }) {
  return (
    <input
      type="button"
      value={props.name}
      className={`text-l text-white bg-bl font-start2p bd-gray py-3 px-4 shadow-md shadow-black m-5 border-2 border-black
                            hover:bg-black`}
    />
  );
}

export function WhHeader() {
  return (
    <header className="bg-white stretch flex flex-row p-4 items-center relative">
      <h1 className="text-3xl mt-1 p-3 text-dbl">White Album</h1>
      <Image
        src={usans}
        alt="sans"
        className="w-20 h-20 absolute transform-center right-1"
      />
    </header>
  );
}

export function Navspan(props: { link: string; value: string; home: boolean }) {
  return (
    <a
      href={props.link}
      className={`text-${(props.home && "bl") || "white"} 
        or text-l hover:text-bl
        `}
    >
      <span className="">{props.value}</span>
    </a>
  );
}

Navspan.defaultProps = {
  home: false,
};