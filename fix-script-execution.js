const fs = require('fs');

// Read the original script
let code = fs.readFileSync('public/js/script.min.js.orig', 'utf8');

// Remove DOMContentLoaded wrapper - find the pattern and replace it
// Pattern: document.addEventListener("DOMContentLoaded",()=>{ ... });
const startPattern = 'document.addEventListener("DOMContentLoaded",()=>{';
const endPattern = '});';

if (code.startsWith(startPattern)) {
  // Extract the inner code
  let innerCode = code.substring(startPattern.length);

  // Remove the closing }); at the very end
  if (innerCode.endsWith(endPattern)) {
    innerCode = innerCode.substring(0, innerCode.length - endPattern.length);
  }

  // Wrap in IIFE that executes immediately
  // Check if DOM is ready, if not wait, otherwise execute immediately
  const fixedCode = `(function(){
    const execute = function(){
      ${innerCode}
    };
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', execute);
    } else {
      execute();
    }
  })();`;

  fs.writeFileSync('public/js/script.min.js', fixedCode);
  console.log('✅ Fixed script.min.js to execute immediately');
  console.log('Length:', fixedCode.length);
  console.log('First 150 chars:', fixedCode.substring(0, 150));
  console.log('Last 100 chars:', fixedCode.substring(fixedCode.length - 100));
} else {
  console.log('❌ Unexpected format');
  console.log('First 200 chars:', code.substring(0, 200));
}

