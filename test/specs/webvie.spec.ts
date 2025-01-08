import webviePage from "../pageobjects/webvie.page";
import systemMsg from "../../fixtures/textSymbols/systemMsg.json";

describe('Webvie tab test', () => {
    it('TC-01 - Verify elements visibility in webdriverview tab.', async () => {
        await webviePage.webvieBtn.click();

        for (const item of systemMsg.scrollItems) {
            webviePage.scrollToText(item);
        }
    });

    it('TC-09 - Verify functionality of the helper modal in Webview tab.', async () => {
        await webviePage.webvieBtn.click();

        await webviePage.scrollToText(systemMsg.copyrightText);

        await expect(webviePage.cornerRobotIcon).toBeEnabled();
    });
});