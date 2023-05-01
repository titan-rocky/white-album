/*
 *
              <Imagecomp
                src={src}
                key={index}
                index={index}
                isMatched={src.isMatched}
                isToggle={src.isToggle}
                setToggle={Setimages}
                onCheck={(e: boolean) => {
                  e == true ? Setcount((n) => n - 1) : Setcount((n) => n + 1);
                }}
              />
*/

/*
function Imagecomp(props: {
  src: any;
  index: number;
  onCheck: any;
  isMatched: boolean;
  isToggle: boolean;
  setToggle: Function;
}) {
  const [checked, setCheck] = useState(props.isToggle);
  if (props.isMatched == false) {
    return <></>;
  }
  return (
    <div
      key={props.index}
      className={`flex flex-col items-center bg-${
        checked ? "white" : "lgray"
      } border-2 border-black drop-shadow-sm rounded-md m-1 p-3 relative`}
      onChange={props.onCheck}
    >
      <div className="m-1 overflow-hidden border-black border-2  rounded-lg">
        <Image
          src={props.src.url}
          alt={`Image ${props.src.filename}`}
          key={props.index}
          width={400}
          height={225}
          quality="60"
          className="w-[12em] h-[6.75em] bg-white object-cover
                            transition-all delay-0
                            hover:scale-150 over:transition-all hover:ease-in-out hover:duration-[1000ms]"
          loading="eager"
        />
      </div>
      <div className="truncate text-black ml-2 w-[80%]" key={props.index}>
        <Link
          className="text-xs"
          href={{ pathname: "/Slideshow", query: props.src }}
        >
          {props.src.filename + "." + props.src.format}
        </Link>
      </div>
      <input
        id={"select" + props.index.toString()}
        type="checkbox"
        key={props.index}
        className="absolute left-1 top-1 w-lg enabled:bg-dbl"
        name="select"
        defaultChecked={props.src.isToggle}
        onChange={() => {
          props.setToggle((s: any) => {
            s.forEach((i: any) => {
              if (i.filename == props.src.filename) {
                i.isToggle ? false : true;
              }
            });
            return s;
          });
        }}
      />
    </div>
  );
}
*/

/*
        <div className="flex items-center">
          <span className="text-lg text-black">Images per page: </span>
          <select className="m-4 text-sm text-white bg-bl font-start2p bd-gray py-2 px-3 shadow-md shadow-black border-2 border-black">
            <option className="m-3 mt-5 bg-lgray p-3 text-dgray">inf</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">25</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">50</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">75</option>
            <option className="m-3 mt-5 bg-white p-3 text-black">100</option>
          </select>
        </div>

*/
