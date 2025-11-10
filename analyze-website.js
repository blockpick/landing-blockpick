const { chromium } = require('playwright');
const fs = require('fs');

async function analyzeWebsite() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log('Loading website...');
  await page.goto('https://alanbouteiller.pm/', { waitUntil: 'networkidle' });

  // Wait for animations to load
  await page.waitForTimeout(3000);

  // Get HTML content
  const html = await page.content();
  fs.writeFileSync('extracted.html', html);

  // Get all computed styles and CSS
  const styles = await page.evaluate(() => {
    const stylesheets = Array.from(document.styleSheets);
    let allCSS = '';

    stylesheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach((rule) => {
          allCSS += rule.cssText + '\n';
        });
      } catch (e) {
        // Cross-origin stylesheets
      }
    });

    // Also get inline styles
    const inlineStyles = Array.from(document.querySelectorAll('[style]'));
    inlineStyles.forEach((el) => {
      allCSS += `[data-inline="${el.tagName.toLowerCase()}"] { ${el.getAttribute('style')} }\n`;
    });

    return allCSS;
  });

  fs.writeFileSync('extracted.css', styles);

  // Get animation information
  const animations = await page.evaluate(() => {
    const styleSheets = Array.from(document.styleSheets);
    const animationInfo = {
      keyframes: [],
      animations: [],
      transitions: []
    };

    styleSheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach((rule) => {
          if (rule.type === CSSRule.KEYFRAMES_RULE || rule.type === CSSRule.WEBKIT_KEYFRAMES_RULE) {
            animationInfo.keyframes.push({
              name: rule.name,
              rules: Array.from(rule.cssRules).map(r => ({
                keyText: r.keyText,
                style: r.style.cssText
              }))
            });
          } else if (rule.style) {
            const animation = rule.style.animation || rule.style.webkitAnimation;
            const transition = rule.style.transition || rule.style.webkitTransition;
            if (animation) {
              animationInfo.animations.push({
                selector: rule.selectorText,
                animation: animation
              });
            }
            if (transition) {
              animationInfo.transitions.push({
                selector: rule.selectorText,
                transition: transition
              });
            }
          }
        });
      } catch (e) {
        // Cross-origin
      }
    });

    return animationInfo;
  });

  fs.writeFileSync('extracted-animations.json', JSON.stringify(animations, null, 2));

  // Get page structure
  const structure = await page.evaluate(() => {
    return {
      title: document.title,
      bodyHTML: document.body.innerHTML,
      bodyClasses: document.body.className,
      htmlClasses: document.documentElement.className
    };
  });

  fs.writeFileSync('extracted-structure.json', JSON.stringify(structure, null, 2));

  console.log('Analysis complete!');
  console.log('- HTML saved to extracted.html');
  console.log('- CSS saved to extracted.css');
  console.log('- Animations saved to extracted-animations.json');
  console.log('- Structure saved to extracted-structure.json');

  await browser.close();
}

analyzeWebsite().catch(console.error);
