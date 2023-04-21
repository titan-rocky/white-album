import { WhHeader, Navspan } from "../Components/comps";

export default function Prefs() {
  return (
    <body className="bg-lgray">
      <WhHeader />
      <nav className="bg-black p-2 flex justify-evenly">
        <Navspan link="#" value="Preferences" home={true} />
        <Navspan link="/" value="Home" />
        <Navspan link="Gallery/" value="Gallery" />
        <Navspan link="Slideshow/" value="Slideshow" />
      </nav>
      <main></main>
    </body>
  );
}
