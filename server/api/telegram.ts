import { closeAllPages, getPuppeteerBrowser } from '../puppeteer';

export default defineEventHandler(async (event) => {
  // Retrieve the username from the query params
  const { username } = getQuery(event);

  const url = `https://t.me/${username}`;

  try {
    // Launch a headless browser using Puppeteer
    const browser = await getPuppeteerBrowser("telegram");
    await closeAllPages(browser)
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('.tgme_page_action')

    const publicName = await page.$eval('.tgme_page_title span', span => span.innerText)
    const username = await page.$eval('.tgme_page_extra', span => span.innerText)

    await closeAllPages(browser)

    return { publicName, username: `@${username}` }
  } catch (error) {
    return { error: 'An error occurred' };
  }
});
