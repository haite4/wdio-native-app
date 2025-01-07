import sharp from "sharp";
import fs from "fs";

export async function resizeImage(
    inputPath: string,
    outputPath: string,
    width: number,
    height: number
  ) {
    try {
      await sharp(inputPath)
        .resize(width, height, {
          fit: "cover",
        })
        .toFile(outputPath);
      console.log(`Image was saved ${outputPath}`);
    } catch (err) {
      console.error("Error when resizing an image:", err);
    }
  }


  export async function deleteImages(paths: string[]){
    paths.forEach((image) => {
        fs.unlink(image, (err) => {
            if(err) throw err;
          })
    })
  }