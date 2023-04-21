import Image from "next/image";
import wa from "../resources/wa.png";

function Logo() {
  return (
    //<Image src={wa} className="px-3" width="60" height="60" alt="snowflake" />
    <span className="text-5xl text-pur ml-2 mt-3">*</span>
  );
}

export function WhHeader() {
  return (
    <header className="bg-white stretch flex flex-row p-7 items-center">
      <h1 className="text-3xl mt-1 text-black font-start2p">White Album</h1>
      <Logo />
    </header>
  );
}

export function Navspan(props: { link: string; value: string; home: boolean }) {
  return (
    <a
      href={props.link}
      className={`text-${(props.home && "red") || "white"} 
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
