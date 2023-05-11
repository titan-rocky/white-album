import Image from "next/image";
import wa from "../resources/wa.png";
import usans from "../resources/whichbook.gif";
import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="bg-black flex justify-center text-white p-10 py-5 mt-5">
      <span className="">&copy; Copyright titan_rocky@2023</span>
      <Link
        href="https://github.com/titan-rocky/white-album"
        className="text-ylw ml-[20em] text-lg"
        target="_blank"
      >
        Github repo
      </Link>
    </footer>
  );
}

export function WhHeader(props: { user: string }) {
  return (
    <header className="bg-white dark:bg-black stretch flex flex-row p-4 items-center justify-between">
      <h1 className="text-3xl mt-1 p-3 text-dbl dark:text-white">
        White Album
      </h1>
      <div className="flex items-center mx-10">
        <Image src={usans} alt="sans" width={60} height={60} />
        <span className="text-lg">
          Welcome <b className="text-dbl text-lg">{props.user}</b> !
        </span>
        <span className="text-lg text-red mx-10">Logout</span>
      </div>
    </header>
  );
}

export function WhFooter() {
  return (
    <footer className="bg-black flex justify-center text-white p-5 py-2">
      <span className="">&copy; Copyright titan_rocky@2023</span>
      <Link
        href="https://github.com/titan-rocky/white-album"
        className="text-ylw ml-[20em] text-lg"
        target="_blank"
      >
        Github repo
      </Link>
    </footer>
  );
}

export function Navspan(props: {
  link: string;
  value: string;
  home: boolean;
  disabled: boolean;
}) {
  if (props.home) {
    return (
      <span className="text-bl dark:text-dgray text-l">{props.value}</span>
    );
  } else if (props.disabled) {
    return (
      <span className="text-lred dark:text-lgray text-l">{props.value}</span>
    );
  }
  return (
    <Link
      href={props.link}
      className={`text-${(props.home && "bl") || "white"} 
         dark:text-lgray text-l hover:text-bl dark:hover:text-black
        `}
    >
      <span className="">{props.value}</span>
    </Link>
  );
}

Navspan.defaultProps = {
  home: false,
  disabled: false,
};
