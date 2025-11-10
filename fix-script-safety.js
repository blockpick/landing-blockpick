const fs = require('fs');

// Read the script
let code = fs.readFileSync('public/js/script.min.js.orig', 'utf8');

// Fix the getComputedStyle issue by adding null checks
// The problematic line is: $=window.getComputedStyle(l).getPropertyValue("grid-template-columns")
// We need to check if l exists first

// Find the pattern and add null check
code = code.replace(
  /let l=document\.getElementById\("grid-loader"\),[^;]*\$\=window\.getComputedStyle\(l\)\.getPropertyValue\("grid-template-columns"\)/,
  (match) => {
    // Add null check before getComputedStyle
    return match.replace(
      /\$=window\.getComputedStyle\(l\)\.getPropertyValue\("grid-template-columns"\)/,
      'l?($=window.getComputedStyle(l).getPropertyValue("grid-template-columns").split(" ").length):($=12)'
    );
  }
);

// Also fix the function p() to handle missing elements
code = code.replace(
  /function p\(\)\{a\.stop\(\);let n=document\.getElementById\("nav"\),o=document\.getElementById\("loader"\),r=document\.getElementById\("bottom"\),l=document\.getElementById\("grid-loader"\)/,
  'function p(){a.stop();let n=document.getElementById("nav"),o=document.getElementById("loader"),r=document.getElementById("bottom"),l=document.getElementById("grid-loader");if(!n||!r)return;'
);

// Wrap in IIFE that executes immediately
const startPattern = 'document.addEventListener("DOMContentLoaded",()=>{';
const endPattern = '});';

if (code.startsWith(startPattern)) {
  let innerCode = code.substring(startPattern.length);
  if (innerCode.endsWith(endPattern)) {
    innerCode = innerCode.substring(0, innerCode.length - endPattern.length);
  }

  const fixedCode = `(function(){
    const execute = function(){
      ${innerCode}
    };
    if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', execute);
    } else {
      // Wait a bit for React to render
      setTimeout(execute, 100);
    }
  })();`;

  fs.writeFileSync('public/js/script.min.js', fixedCode);
  console.log('✅ Fixed script.min.js with null checks and delay');
} else {
  console.log('❌ Unexpected format');
}

