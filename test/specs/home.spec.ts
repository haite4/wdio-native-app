import fs from "fs"
import path from "path";
import { resizeImage, deleteImages } from "../../helpers/imageHelper";
import homePage from "../pageobjects/home.page";
import generalMsg from "../../fixtures/textSymbols/generalMsg.json"

describe("Verify functionality of home page", () => {
    const TEST_IMAGE_1_PATH = path.resolve("fixtures" ,"images", "robot.png");
    const TEST_IMAGE_SAVED_PATH = path.resolve("fixtures", "images", "savedImage.png");
    const TEST_RESIZED_IMAGE = path.resolve( "fixtures", "images", "output.png")
    const TEST_RESIZED_IMAGE1 = path.resolve("fixtures", "images", "output1.png")
    it("TC 02. Verify elements visibility on the Home screen", async () => {
    
      await expect(homePage.robotImage).toBeDisplayed();
      await homePage.robotImage.saveScreenshot(TEST_IMAGE_SAVED_PATH);
      const { width, height } = await homePage.robotImage.getSize();
      await resizeImage(TEST_IMAGE_1_PATH, TEST_RESIZED_IMAGE, width, height);
      await resizeImage(TEST_IMAGE_SAVED_PATH, TEST_RESIZED_IMAGE1, width, height);
      const TEST_RESIZED_IMAGE_1_BS64  = fs.readFileSync(TEST_RESIZED_IMAGE).toString("base64");
      const TEST_RESIZED_IMAGE_2_BS64 = fs.readFileSync(TEST_RESIZED_IMAGE1).toString("base64");
   
      const comparison = await driver.compareImages(
        "getSimilarity",
        TEST_RESIZED_IMAGE_1_BS64,
        TEST_RESIZED_IMAGE_2_BS64,
        {}
      );
      await expect(comparison.score).toBeGreaterThanOrEqual(0.4);
      await expect(homePage.webdriverTitle).toBeDisplayed();
      await expect(homePage.ioTitle).toBeDisplayed();
      await expect(homePage.webdriverIoDescription).toHaveText(generalMsg.webdriverIoDesc)
      await expect(homePage.supportText).toBeDisplayed();
      await expect(homePage.supportText).toHaveText(generalMsg.support);
    });
  

    afterEach("Delete created images", async() => {
      const filesToDelete = [
        TEST_IMAGE_SAVED_PATH,
        TEST_RESIZED_IMAGE,
        TEST_RESIZED_IMAGE1
      ];
      
      await deleteImages(filesToDelete)
    })
});
