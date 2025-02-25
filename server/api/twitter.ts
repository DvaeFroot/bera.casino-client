import { getPuppeteerBrowser } from '../puppeteer';
import { withTimeout } from '../utils'

export default defineEventHandler(async (event) => {
  // Retrieve the username from the query params
  const { username } = getQuery(event);

  const url = `https://x.com/${username}`;

  try {
    // Launch a headless browser using Puppeteer
    const browser = await getPuppeteerBrowser("twitter");
    const page = await browser.newPage();

    let publicName;
    const timeout = 5000;
    try {
      await withTimeout((async () => {
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        await page.waitForSelector('div[data-testid="UserName"]')

        const spanTexts = await page.$$eval('div[data-testid="UserName"] span', (spans) => {
          return spans.map(span => span.innerText)
        })
        publicName = spanTexts[0];

      })(), timeout)
    } catch (error) { }

    await page.close();
    console.log("Quitting twitter page")

    return { publicName, username: `${username}` }
  } catch (error) {
    return { error: 'An error occurred' };
  }
});
