import sharp from "sharp";
import fs from "fs/promises";

export async function resizeImage(inputPath: string, outputPath: string, width: number, height: number
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

  export async function deleteImages(paths: string[]) {
    if (paths.length > 0) {
        for (const image of paths) {
            try {
                await fs.access(image);
                await fs.unlink(image);
                console.log(`File ${image} deleted.`);
            } catch (err: any) {
                if (err.code === 'ENOENT') {
                    console.error(`File ${image} not exist!.`);
                } else {
                    throw err;
                }
            }
        }
    }
}
       
   