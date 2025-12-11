// Simple screenshot script using Puppeteer
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const baseURL = 'http://localhost:5173';
const screenshotsDir = path.join(__dirname, '..', 'public', 'screenshots');

// Ensure screenshots directory exists
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function takeScreenshot(name, url, waitTime = 2000) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set mobile viewport
  await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
  
  try {
    await page.goto(`${baseURL}${url}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(waitTime);
    
    const screenshotPath = path.join(screenshotsDir, `${name}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });
    
    console.log(`✓ Screenshot saved: ${name}.png`);
    await browser.close();
    return screenshotPath;
  } catch (error) {
    console.error(`✗ Error capturing ${name}:`, error.message);
    await browser.close();
    throw error;
  }
}

async function captureAll() {
  console.log('Starting screenshot capture...');
  
  try {
    // Home page
    await takeScreenshot('home-mobile', '/home', 2000);
    
    // Service Demo - Step 1 (form view)
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 375, height: 812, deviceScaleFactor: 2 });
    
    await page.goto(`${baseURL}/servicedemo`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    await page.click('button:has-text("إضافة طلب سفر جديد"), button:has-text("Add New Travel Request")');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(screenshotsDir, 'step1-mobile.png'), fullPage: true });
    console.log('✓ Screenshot saved: step1-mobile.png');
    
    // Step 2
    await page.click('button:has-text("إرسال للضامن"), button:has-text("Send to Guarantor")');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(screenshotsDir, 'step2-mobile.png'), fullPage: true });
    console.log('✓ Screenshot saved: step2-mobile.png');
    
    // Step 3
    await page.click('button:has-text("قبول"), button:has-text("Accept")');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(screenshotsDir, 'step3-mobile.png'), fullPage: true });
    console.log('✓ Screenshot saved: step3-mobile.png');
    
    // Step 4
    await page.click('button:has-text("موافقة"), button:has-text("Approve")');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(screenshotsDir, 'step4-mobile.png'), fullPage: true });
    console.log('✓ Screenshot saved: step4-mobile.png');
    
    // Step 5
    await page.click('button:has-text("تأكيد الدفع"), button:has-text("Confirm Payment")');
    await page.waitForTimeout(3000);
    await page.screenshot({ path: path.join(screenshotsDir, 'step5-mobile.png'), fullPage: true });
    console.log('✓ Screenshot saved: step5-mobile.png');
    
    await browser.close();
    
    // FAQ
    await takeScreenshot('faq-mobile', '/faq', 2000);
    
    // Settings
    await takeScreenshot('settings-mobile', '/settings', 2000);
    
    console.log('\n✅ All screenshots captured successfully!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

captureAll();

