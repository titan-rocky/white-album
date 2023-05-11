import { Navspan } from "@/app/Components/comps";

export default function Register() {
  return (
    <>
      <nav className="bg-black p-2 flex justify-evenly sm:flex-wrap">
        <Navspan link="Login/Register" value="Sign Up" home={true} />
      </nav>

      <div>fuck</div>
    </>
  );
}
