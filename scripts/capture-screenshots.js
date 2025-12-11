import { chromium } from 'playwright';
import { writeFileSync } from 'fs';
import { join } from 'path';

const baseURL = 'http://localhost:5173';
const screenshotsDir = join(process.cwd(), 'public', 'screenshots');

const pages = [
  { name: 'home', url: '/home', filename: 'home-mobile.png' },
  { name: 'servicedemo-step1', url: '/servicedemo', filename: 'step1-mobile.png', action: async (page) => {
    // Click "Add New Travel Request" button
    await page.click('button:has-text("إضافة طلب سفر جديد"), button:has-text("Add New Travel Request")');
    await page.waitForTimeout(1000);
  }},
  { name: 'servicedemo-step2', url: '/servicedemo', filename: 'step2-mobile.png', action: async (page) => {
    await page.click('button:has-text("إضافة طلب سفر جديد"), button:has-text("Add New Travel Request")');
    await page.waitForTimeout(1000);
    await page.click('button:has-text("إرسال للضامن"), button:has-text("Send to Guarantor")');
    await page.waitForTimeout(3000);
  }},
  { name: 'servicedemo-step3', url: '/servicedemo', filename: 'step3-mobile.png', action: async (page) => {
    await page.click('button:has-text("إضافة طلب سفر جديد"), button:has-text("Add New Travel Request")');
    await page.waitForTimeout(1000);
    await page.click('button:has-text("إرسال للضامن"), button:has-text("Send to Guarantor")');
    await page.waitForTimeout(3000);
    await page.click('button:has-text("قبول"), button:has-text("Accept")');
    await page.waitForTimeout(3000);
  }},
  { name: 'servicedemo-step4', url: '/servicedemo', filename: 'step4-mobile.png', action: async (page) => {
    await page.click('button:has-text("إضافة طلب سفر جديد"), button:has-text("Add New Travel Request")');
    await page.waitForTimeout(1000);
    await page.click('button:has-text("إرسال للضامن"), button:has-text("Send to Guarantor")');
    await page.waitForTimeout(3000);
    await page.click('button:has-text("قبول"), button:has-text("Accept")');
    await page.waitForTimeout(3000);
    await page.click('button:has-text("موافقة"), button:has-text("Approve")');
    await page.waitForTimeout(3000);
  }},
  { name: 'servicedemo-step5', url: '/servicedemo', filename: 'step5-mobile.png', action: async (page) => {
    await page.click('button:has-text("إضافة طلب سفر جديد"), button:has-text("Add New Travel Request")');
    await page.waitForTimeout(1000);
    await page.click('button:has-text("إرسال للضامن"), button:has-text("Send to Guarantor")');
    await page.waitForTimeout(3000);
    await page.click('button:has-text("قبول"), button:has-text("Accept")');
    await page.waitForTimeout(3000);
    await page.click('button:has-text("موافقة"), button:has-text("Approve")');
    await page.waitForTimeout(3000);
    await page.click('button:has-text("تأكيد الدفع"), button:has-text("Confirm Payment")');
    await page.waitForTimeout(3000);
  }},
  { name: 'faq', url: '/faq', filename: 'faq-mobile.png' },
  { name: 'settings', url: '/settings', filename: 'settings-mobile.png' },
];

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
  });

  for (const pageConfig of pages) {
    try {
      console.log(`Capturing ${pageConfig.name}...`);
      const page = await context.newPage();
      await page.goto(`${baseURL}${pageConfig.url}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000);
      
      if (pageConfig.action) {
        await pageConfig.action(page);
      }
      
      const screenshot = await page.screenshot({
        path: join(screenshotsDir, pageConfig.filename),
        fullPage: true,
      });
      
      await page.close();
      console.log(`✓ Saved ${pageConfig.filename}`);
    } catch (error) {
      console.error(`✗ Error capturing ${pageConfig.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('All screenshots captured!');
}

captureScreenshots().catch(console.error);

