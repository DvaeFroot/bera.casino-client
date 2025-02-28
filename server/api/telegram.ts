import { getPuppeteerBrowser } from '../puppeteer';
import { withTimeout } from '../utils'

export default defineEventHandler(async (event) => {
  // Retrieve the username from the query params
  const { username } = getQuery(event);

  const url = `https://t.me/${username}`;

  try {
    // Launch a headless browser using Puppeteer
    const browser = await getPuppeteerBrowser("telegram");
    const page = await browser.newPage();

    let publicName;
    let username;
    const timeout = 30000;

    try {
      await withTimeout<{ publicName: any, username: any }>((async (): Promise<{ publicName: any, username: any }> => {
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('.tgme_page_action')

        publicName = await page.$eval('.tgme_page_title span', span => span.innerText)
        username = await page.$eval('.tgme_page_extra', span => span.innerText)
        return { publicName, username }
      })(), timeout)
    } catch (error) { }

    await page.close()
    console.log("Quitting telegram page")

    return { publicName, username: `${username}` }
  } catch (error) {
    return { error: 'An error occurred' };
  }
});
