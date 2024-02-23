// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer');

(async () => {
  const url = process.argv[2] || 'https://martacodes.it/cv'; // Get the URL from command-line argument

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });

  await page.goto(url, {
    waitUntil: 'networkidle2',
  });

  await page.pdf({
    path: `output/${new Date().toISOString()}_output.pdf`,
    pageRanges: '1-2',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();
