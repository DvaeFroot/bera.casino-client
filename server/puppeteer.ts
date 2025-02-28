import puppeteer from 'puppeteer'
import { Browser } from 'puppeteer'

const puppeteerBrowser: { twitter: Browser | null, telegram: Browser | null } = {
  twitter: null,
  telegram: null,
}

export async function getPuppeteerBrowser(type: 'twitter' | 'telegram'): Promise<Browser> {
  if (puppeteerBrowser[type] === null) {
    puppeteerBrowser[type] = await puppeteer.launch({
      headless: true, args: ['--no-sandbox']
    })
  }

  return puppeteerBrowser[type]
}

export async function closeAllPages(browser: Browser): Promise<void> {
  const pages = await browser.pages();
  for (const page of pages) {
    await page.close()
  }
}

export async function closePuppeteerBrowsers() {
  for (const key of Object.keys(puppeteerBrowser) as (keyof typeof puppeteerBrowser)[]) {
    const browser = puppeteerBrowser[key]
    if (browser != null) {
      await closeAllPages(browser)
      await browser.close()
      puppeteerBrowser[key] = null
    }
  }
}
