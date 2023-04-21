import { WhHeader, Navspan } from "../Components/comps";

export default function Slideshow() {
  return (
    <body className="bg-lgray">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly">
        <Navspan link="#" value="Slideshow" home={true} />
        <Navspan link="/" value="Home" />
        <Navspan link="Gallery/" value="Gallery" />
        <Navspan link="#" value="Preferences" />
      </nav>
      <main></main>
    </body>
  );
}
