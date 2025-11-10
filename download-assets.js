const { chromium } = require('playwright');
const fs = require('fs');
const https = require('https');
const http = require('http');
const path = require('path');

async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAssets() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log('Loading website to extract assets...');
  await page.goto('https://alanbouteiller.pm/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // Get all CSS files
  const cssFiles = [
    'reset.css',
    'font.css',
    'style.css',
    'loader.css',
    'cursor.css',
    'lenis.css',
    'query.css'
  ];

  const baseUrl = 'https://alanbouteiller.pm/';

  // Create public/css directory
  if (!fs.existsSync('public/css')) {
    fs.mkdirSync('public/css', { recursive: true });
  }

  // Download CSS files
  for (const cssFile of cssFiles) {
    try {
      const url = baseUrl + cssFile;
      const filepath = path.join('public/css', cssFile);
      console.log(`Downloading ${cssFile}...`);
      await downloadFile(url, filepath);
      console.log(`✓ Downloaded ${cssFile}`);
    } catch (error) {
      console.error(`Failed to download ${cssFile}:`, error.message);
    }
  }

  // Download noise texture
  try {
    console.log('Downloading broken-noise.png...');
    await downloadFile(baseUrl + 'broken-noise.png', 'public/broken-noise.png');
    console.log('✓ Downloaded broken-noise.png');
  } catch (error) {
    console.error('Failed to download broken-noise.png:', error.message);
  }

  // Get JavaScript files
  const scripts = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[src]'));
    return scripts.map(s => s.src).filter(src => src.includes('alanbouteiller.pm'));
  });

  if (!fs.existsSync('public/js')) {
    fs.mkdirSync('public/js', { recursive: true });
  }

  for (const scriptUrl of scripts) {
    try {
      const filename = path.basename(scriptUrl.split('?')[0]);
      const filepath = path.join('public/js', filename);
      console.log(`Downloading ${filename}...`);
      await downloadFile(scriptUrl, filepath);
      console.log(`✓ Downloaded ${filename}`);
    } catch (error) {
      console.error(`Failed to download script:`, error.message);
    }
  }

  await browser.close();
  console.log('\n✓ All assets downloaded!');
}

downloadAssets().catch(console.error);
