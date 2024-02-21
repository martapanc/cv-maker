// eslint-disable-next-line @typescript-eslint/no-var-requires
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3004/puppeteer', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({
    path: 'output/resume.pdf',
    pageRanges: '1-2',
    format: 'A4',
    printBackground: true,
  });

  await browser.close();
})();
