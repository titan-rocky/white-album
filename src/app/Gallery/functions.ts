import Path from "path";
import Fs from "fs";

const importAll = (r: any) => {
  const images: Array<any> = [];
  r.keys().forEach((image: any) => {
    images.push(r(image));
  });
  return images;
};
export function ReadPath(imagesDirectory: string) {
  return importAll(
    require.context(
      "C:/Users/rocka/pictures/screenshots",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
}

export function FetchImage(path: string) {
  const dirPath: string = path || "/";

  const images = importAll(
    require.context(dirPath, false, /\.(png|jpe?g|svg)$/)
  );
  images.sort((a, b) => (a.default.src > b.default.src ? 1 : -1));
  return images;
}

function fi(dpath: string) {
  //joining path of directory
  const l: Array<any> = [];
  const directoryPath = Path.join(dpath);
  //passsing directoryPath and callback function
  Fs.readdir(directoryPath, function (err: any, files: any) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file: any) {
      // Do whatever you want to do with the file
      l.push(file);
    });
  });
  return l;
}
