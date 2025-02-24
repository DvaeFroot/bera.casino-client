import { closePuppeteerBrowsers } from "~/server/puppeteer";

export default defineEventHandler((event) => {
  const cleanup = async () => {
    console.log("Shutting down the app. Closing Puppeteer browsers")
    await closePuppeteerBrowsers()
    console.log("Puppeteer browsers closed successfully")
  }

  process.on('SIGINT', cleanup)
  process.on('SIGTERM', cleanup)
}
)
