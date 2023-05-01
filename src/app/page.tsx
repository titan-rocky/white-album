import Image from "next/image";
import "./globals.css";
import { WhHeader, Navspan } from "./Components/comps";
import fu from "./resources/portrait.gif";

function Hellobut() {
  return (
    <div>
      <input
        type="button"
        value="Hello"
        className={`text-l text-white bg-bl font-start2p bd-gray py-3 px-4 shadow-md shadow-black m-5 border-2 border-black
                            hover:bg-black`}
      />
      <input
        type="button"
        value="World"
        className={`text-l text-white bg-lred font-start2p bd-gray py-3 px-4 shadow-md shadow-black m-5 border-2 border-black
                            hover:bg-black`}
      />
    </div>
  );
}

export default function Home() {
  return (
    <body className="h-screen">
      <WhHeader />

      <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
        <Navspan link="#" value="Home" home={true} />
        <Navspan link="Gallery/" value="Gallery" />
        <Navspan link="Slideshow/" value="Slideshow" disabled={true} />
        <Navspan link="Upload/" value="Upload" />
        <Navspan link="Preferences/" value="Preferences" />
      </nav>

      <main className="bg-gray p-10 pt-6 flex flex-col items-center justify-between ">
        <p className="bg-white border-black border-4 p-10 rounded text-center w-full">
          This process is to create a display gallery for your{" "}
          <span className="text-red text-[1.1em]">stored images</span>
          &nbsp;in backup drives and cloud storages <br /> to access modify and
          view files from the same.
        </p>
        <div className="flex flex-col items-center justify-center md:flex md:flex-row md:mt-4 w-full lg:items-stretch">
          <div className="bg-white border-4 rounded-lg p-6 flex justify-center items-center basis-1/3 m-5 md:m-0 md:mr-2">
            <Image src={fu} alt="pixel-portrait" />
          </div>
          <div className="bg-white p-6 bd-black border-4 ml-4 rounded-lg basis-2/3 m-5 md:m-0 md:ml-2 ">
            <p className="text-gray drop-shadow-2xl">
              A gallery is a mom&apos;s curiosity, which collects memories of
              the past and present , with our loved ones
            </p>
            <article className="text-center text-l text-red p-10">
              <i>
                The image gallery was a symphony of visual delights,
                <br />
                A kaleidoscope of art, a feast for the sights.
                <br />
                Each frame captured a moment, a story to tell,
                <br />
                Of life&apos;s many wonders, of heaven and hell.
                <br />
                The walls were adorned with masterpieces,
                <br />
                A canvas of emotions, a treasure of pieces.
                <br />
                Each photograph a poem, a verse to read,
                <br />
                Of love and hope, of desire and need.
                <br />
              </i>
            </article>
            <p className="text-dbl p-6 pt-2 text-right">- ChatGPT</p>
            <br />
            <span className="text-bl">
              Maintaining the gallery with upmost cautiousness and care is one
              of the most important work. This app makes sure that the
              requirements for a safe and a easy-to-use utility will be provided
            </span>
          </div>
        </div>
      </main>
    </body>
  );
}
