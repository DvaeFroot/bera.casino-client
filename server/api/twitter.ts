import { closeAllPages, getPuppeteerBrowser } from '../puppeteer';

export default defineEventHandler(async (event) => {
  // Retrieve the username from the query params
  const { username } = getQuery(event);

  const url = `https://x.com/${username}`;

  try {
    // Launch a headless browser using Puppeteer
    const browser = await getPuppeteerBrowser("twitter");
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('div[data-testid="UserName"]')

    const spanTexts = await page.$$eval('div[data-testid="UserName"] span', (spans) => {
      return spans.map(span => span.innerText)
    })

    const publicName = spanTexts[0];
    await page.close();

    return { publicName, username: `@${username}` }
  } catch (error) {
    return { error: 'An error occurred' };
  }
});
