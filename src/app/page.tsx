'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Declare global window types
declare global {
  interface Window {
    Lenis: any;
    gsap: any;
    THREE: any;
  }
}

export default function Home() {
  useEffect(() => {
    // Load scripts after external libraries are ready
    const loadScripts = () => {
      if (typeof window === 'undefined') return;

      // Wait for Lenis, GSAP, THREE to be available
      const checkInterval = setInterval(() => {
        if (window.Lenis && window.gsap && window.THREE) {
          clearInterval(checkInterval);

          // Load script.min.js (it's now fixed to execute immediately)
          const script = document.createElement('script');
          script.src = '/js/script.min.js';
          script.async = true;
          document.body.appendChild(script);

          // Load other scripts
          ['easter.min.js', 'favicon.min.js', 'color.min.js', 'adnori-animations.js', 'adnori-loader.js'].forEach(file => {
            const s = document.createElement('script');
            s.src = `/js/${file}`;
            s.async = true;
            document.body.appendChild(s);
          });
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => clearInterval(checkInterval), 10000);
    };

    loadScripts();
  }, []);

  const handleSnsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    alert('Coming soon');
  };

  return (
    <>
      {/* scroll progress bar */}
      <div id="scroll-progress"></div>

      {/* noise effect */}
      <div id="noise"></div>

      {/* background of the site */}
      <div className="container">
        <div className="grid-container" id="bck">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="grid-item"></div>
          ))}
        </div>
      </div>

      {/* page loader */}
      <div id="loader">
        <div id="grid-loader" className="grid-container"></div>
      </div>

      {/* page */}
      <div id="nav">
        <div className="grid-container">
          <p className="version easter-pointer" id="colors">2025</p>
          <p className="ava">Where Ads Meet Play</p>
          <p className="pos">Global Software Platform</p>
          <nav>
            <p>
              <a href="#project"><span>Solutions,</span></a>
              <a href="#about"><span>About,</span></a>
              <a href="#contact"><span>Contact</span></a>
            </p>
          </nav>
        </div>
      </div>

      <div id="nav-s">
        <div className="nav-grid">
          <h6 id="cross">close</h6>
          <p id="version-s"><span>2025</span></p>
          <nav>
            <h2>
              <a className="link-s" href="#project"><span>Solutions,</span></a>
              <a className="link-s" href="#about"><span>About,</span></a>
              <a className="link-s" href="#contact"><span>Contact</span></a>
            </h2>
          </nav>
        </div>
      </div>

      <div id="hero">
        <div className="shadowNav">
          <div className="grid-container">
            <h6 id="menu" className="only-s">menu</h6>
          </div>
        </div>
        <div className="grid-container" id="title">
          <h2 id="name" className="alan urbanist animate-text">
            <span className="letter">A</span>
            <span className="letter">d</span>
            <span className="letter">n</span>
            <span className="letter">o</span>
            <span className="letter">r</span>
            <span className="letter">i</span>
          </h2>
          <h2 id="lastname" className="bouteiller urbanist">
            <span className="letter">W</span>
            <span className="letter">h</span>
            <span className="letter">e</span>
            <span className="letter">r</span>
            <span className="letter">e</span>
            <span className="letter"> </span>
            <span className="letter">A</span>
            <span className="letter">d</span>
            <span className="letter">s</span>
            <span className="letter"> </span>
            <span className="letter">M</span>
            <span className="letter">e</span>
            <span className="letter">e</span>
            <span className="letter">t</span>
            <span className="letter"> </span>
            <span className="letter">P</span>
            <span className="letter">l</span>
            <span className="letter">a</span>
            <span className="letter">y</span>
          </h2>
          <h5 id="intro" className="animate-text">
            <span className="letter">Transform</span>{' '}
            <span className="letter">advertising</span>{' '}
            <span className="letter">into</span>{' '}
            <span className="letter underlined easterEgg pm easter-pointer" data-emoji="🎮">gameplay,</span>{' '}
            <span className="letter">marketing</span>{' '}
            <span className="letter">into</span>{' '}
            <span className="letter underlined easterEgg inno easter-pointer" data-emoji="✨">joy</span>{' '}
            <span className="letter">with</span>{' '}
            <span className="letter">our</span>{' '}
            <span className="letter underlined easterEgg tech easter-pointer" data-emoji="🚀">innovative</span>{' '}
            <span className="letter">software</span>{' '}
            <span className="letter underlined easterEgg design easter-pointer" data-emoji="💡">platform</span>
          </h5>
        </div>

        <div className="grid-container" id="bottom">
          <p className="indic">scroll down</p>
          <p className="social">
            <span>
              < a href="#" onClick={handleSnsClick}><span>Linkedin,</span></a>
              <a href="#" onClick={handleSnsClick}><span>Twitter,</span></a>
              <a href="#" onClick={handleSnsClick}><span>Github</span></a>
            </span>
          </p>
        </div>
      </div>

      <div id="project">
        <div className="grid-container title">
          <p><span className="animate-text-hc"><span className="animated-word">//</span> <span className="animated-word">01</span></span></p>
          <h2><span className="animate-title-hc fix-s">
            <span className="animated-letter">W</span>
            <span className="animated-letter">h</span>
            <span className="animated-letter">y</span> <span className="animated-letter">A</span>
            <span className="animated-letter">d</span>
            <span className="animated-letter">n</span>
            <span className="animated-letter">o</span>
            <span className="animated-letter">r</span>
            <span className="animated-letter">i</span>
            <span className="animated-letter">?</span>
          </span></h2>
        </div>
        <div className="grid-container work">
          <p className="animate-text-hc">
            <span className="animated-word">Ads</span> <span className="animated-word">are</span> <span className="animated-word">no</span> <span className="animated-word">longer</span> <span className="animated-word">interruptions.</span>
          </p>
          <p className="animate-text-hc">
            <span className="animated-word">&quot;Nori&quot;</span> <span className="animated-word">means</span> <span className="animated-word">&apos;playful</span> <span className="animated-word">activity&apos;</span> <span className="animated-word">in</span> <span className="animated-word">Korean.</span> <span className="animated-word">We</span> <span className="animated-word">combine</span> <span className="animated-word">Ad</span> <span className="animated-word">and</span> <span className="animated-word">Nori</span> <span className="animated-word">to</span> <span className="animated-word">create</span> <span className="animated-word">a</span> <span className="animated-word">new</span> <span className="animated-word">experience</span> <span className="animated-word">where</span> <span className="animated-word">users</span> <span className="animated-word">enjoy</span> <span className="animated-word">and</span> <span className="animated-word">engage</span> <span className="animated-word">with</span> <span className="animated-word">advertising.</span>
          </p>
          <p className="animate-text-hc">
            <span className="animated-word">No</span> <span className="animated-word">more</span> <span className="animated-word">boring</span> <span className="animated-word">ads.</span> <span className="animated-word">Transform</span> <span className="animated-word">advertising</span> <span className="animated-word">into</span> <span className="animated-word">play</span> <span className="animated-word">with</span> <span className="animated-word">Adnori.</span>
          </p>
        </div>
      </div>

      <div id="about">
        <div className="grid-container title">
          <p><span className="animate-text-hc"><span className="animated-word">//</span> <span className="animated-word">02</span></span></p>
          <h2><span className="animate-title-hc">
            <span className="animated-letter">O</span>
            <span className="animated-letter">u</span>
            <span className="animated-letter">r</span> <span className="animated-letter">P</span>
            <span className="animated-letter">l</span>
            <span className="animated-letter">a</span>
            <span className="animated-letter">t</span>
            <span className="animated-letter">f</span>
            <span className="animated-letter">o</span>
            <span className="animated-letter">r</span>
            <span className="animated-letter">m</span>
          </span></h2>
        </div>
        <div className="grid-container work">
          <h3>
            #1 Interactive Advertising Platform
          </h3>
          <p className="animate-text-hc">
            <span className="animated-word">Gamified</span> <span className="animated-word">ad</span> <span className="animated-word">solution</span> <span className="animated-word">that</span> <span className="animated-word">boosts</span> <span className="animated-word">click-through</span> <span className="animated-word">rates</span> <span className="animated-word">by</span> <span className="animated-word">10x</span>
          </p>
          <p className="animate-text-hc platform-description">
            <span className="animated-word">Maximize</span> <span className="animated-word">brand</span> <span className="animated-word">engagement</span> <span className="animated-word">through</span> <span className="animated-word">mini-game</span> <span className="animated-word">based</span> <span className="animated-word">ads</span> <span className="animated-word">that</span> <span className="animated-word">users</span> <span className="animated-word">actively</span> <span className="animated-word">participate</span> <span className="animated-word">in.</span> <span className="animated-word">Provide</span> <span className="animated-word">immersive</span> <span className="animated-word">experiences</span> <span className="animated-word">instead</span> <span className="animated-word">of</span> <span className="animated-word">simple</span> <span className="animated-word">banners,</span> <span className="animated-word">reducing</span> <span className="animated-word">ad</span> <span className="animated-word">fatigue</span> <span className="animated-word">and</span> <span className="animated-word">improving</span> <span className="animated-word">conversion</span> <span className="animated-word">rates.</span>
          </p>
          <ul>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Mini-game</span> <span className="animated-word">based</span> <span className="animated-word">ads:</span> <span className="animated-word">Various</span> <span className="animated-word">game</span> <span className="animated-word">templates</span> <span className="animated-word">including</span> <span className="animated-word">puzzles,</span> <span className="animated-word">quizzes,</span> <span className="animated-word">and</span> <span className="animated-word">roulettes</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Real-time</span> <span className="animated-word">engagement</span> <span className="animated-word">analytics:</span> <span className="animated-word">Track</span> <span className="animated-word">CTR,</span> <span className="animated-word">engagement</span> <span className="animated-word">time,</span> <span className="animated-word">and</span> <span className="animated-word">conversion</span> <span className="animated-word">data</span> <span className="animated-word">in</span> <span className="animated-word">real-time</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Automated</span> <span className="animated-word">A/B</span> <span className="animated-word">testing:</span> <span className="animated-word">Automatically</span> <span className="animated-word">test</span> <span className="animated-word">and</span> <span className="animated-word">optimize</span> <span className="animated-word">various</span> <span className="animated-word">game</span> <span className="animated-word">formats</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">ROI</span> <span className="animated-word">dashboard:</span> <span className="animated-word">Intuitive</span> <span className="animated-word">interface</span> <span className="animated-word">to</span> <span className="animated-word">view</span> <span className="animated-word">campaign</span> <span className="animated-word">performance</span> <span className="animated-word">at</span> <span className="animated-word">a</span> <span className="animated-word">glance</span>
            </span></li>
          </ul>
        </div>
        <div className="grid-container work">
          <h3>
            #2 User Engagement Platform
          </h3>
          <p className="animate-text-hc">
            <span className="animated-word">Enjoyable</span> <span className="animated-word">experience</span> <span className="animated-word">where</span> <span className="animated-word">users</span> <span className="animated-word">watch</span> <span className="animated-word">ads</span> <span className="animated-word">and</span> <span className="animated-word">earn</span> <span className="animated-word">rewards</span>
          </p>
          <p className="animate-text-hc platform-description">
            <span className="animated-word">Drive</span> <span className="animated-word">user</span> <span className="animated-word">acquisition</span> <span className="animated-word">and</span> <span className="animated-word">retention</span> <span className="animated-word">by</span> <span className="animated-word">providing</span> <span className="animated-word">instant</span> <span className="animated-word">rewards</span> <span className="animated-word">for</span> <span className="animated-word">ad</span> <span className="animated-word">engagement.</span> <span className="animated-word">Transform</span> <span className="animated-word">advertising</span> <span className="animated-word">into</span> <span className="animated-word">an</span> <span className="animated-word">active</span> <span className="animated-word">activity</span> <span className="animated-word">through</span> <span className="animated-word">gamification</span> <span className="animated-word">elements</span> <span className="animated-word">and</span> <span className="animated-word">build</span> <span className="animated-word">user</span> <span className="animated-word">loyalty.</span>
          </p>
          <ul>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Points</span> <span className="animated-word">reward</span> <span className="animated-word">system:</span> <span className="animated-word">Earn</span> <span className="animated-word">points</span> <span className="animated-word">for</span> <span className="animated-word">ad</span> <span className="animated-word">participation,</span> <span className="animated-word">redeemable</span> <span className="animated-word">for</span> <span className="animated-word">coupons</span> <span className="animated-word">and</span> <span className="animated-word">products</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Gamified</span> <span className="animated-word">missions:</span> <span className="animated-word">Various</span> <span className="animated-word">engagement</span> <span className="animated-word">missions</span> <span className="animated-word">including</span> <span className="animated-word">daily</span> <span className="animated-word">challenges</span> <span className="animated-word">and</span> <span className="animated-word">weekly</span> <span className="animated-word">quests</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Social</span> <span className="animated-word">sharing:</span> <span className="animated-word">Viral</span> <span className="animated-word">effects</span> <span className="animated-word">through</span> <span className="animated-word">friend</span> <span className="animated-word">invitations</span> <span className="animated-word">and</span> <span className="animated-word">leaderboard</span> <span className="animated-word">competitions</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Personalized</span> <span className="animated-word">recommendations:</span> <span className="animated-word">AI-powered</span> <span className="animated-word">user</span> <span className="animated-word">interest</span> <span className="animated-word">analysis</span> <span className="animated-word">for</span> <span className="animated-word">tailored</span> <span className="animated-word">ads</span>
            </span></li>
          </ul>
        </div>
        <div className="grid-container work">
          <h3>
            #3 Creator Tools
          </h3>
          <p className="animate-text-hc">
            <span className="animated-word">Create</span> <span className="animated-word">interactive</span> <span className="animated-word">ads</span> <span className="animated-word">easily,</span> <span className="animated-word">for</span> <span className="animated-word">everyone</span>
          </p>
          <p className="animate-text-hc platform-description">
            <span className="animated-word">Provide</span> <span className="animated-word">tools</span> <span className="animated-word">that</span> <span className="animated-word">enable</span> <span className="animated-word">anyone</span> <span className="animated-word">to</span> <span className="animated-word">create</span> <span className="animated-word">professional-level</span> <span className="animated-word">interactive</span> <span className="animated-word">ads</span> <span className="animated-word">without</span> <span className="animated-word">development</span> <span className="animated-word">knowledge.</span> <span className="animated-word">Creators</span> <span className="animated-word">and</span> <span className="animated-word">marketers</span> <span className="animated-word">can</span> <span className="animated-word">quickly</span> <span className="animated-word">execute</span> <span className="animated-word">ideas</span> <span className="animated-word">and</span> <span className="animated-word">optimize</span> <span className="animated-word">based</span> <span className="animated-word">on</span> <span className="animated-word">data.</span>
          </p>
          <ul>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">No-code</span> <span className="animated-word">ad</span> <span className="animated-word">builder:</span> <span className="animated-word">Create</span> <span className="animated-word">ads</span> <span className="animated-word">in</span> <span className="animated-word">5</span> <span className="animated-word">minutes</span> <span className="animated-word">with</span> <span className="animated-word">drag</span> <span className="animated-word">&amp;</span> <span className="animated-word">drop</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Template</span> <span className="animated-word">library:</span> <span className="animated-word">100+</span> <span className="animated-word">proven</span> <span className="animated-word">game</span> <span className="animated-word">templates</span> <span className="animated-word">and</span> <span className="animated-word">design</span> <span className="animated-word">assets</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Performance</span> <span className="animated-word">analytics:</span> <span className="animated-word">Real-time</span> <span className="animated-word">performance</span> <span className="animated-word">tracking</span> <span className="animated-word">and</span> <span className="animated-word">automated</span> <span className="animated-word">insight</span> <span className="animated-word">reports</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">Monetization</span> <span className="animated-word">tools:</span> <span className="animated-word">Ad</span> <span className="animated-word">revenue</span> <span className="animated-word">sharing</span> <span className="animated-word">system</span> <span className="animated-word">and</span> <span className="animated-word">creator</span> <span className="animated-word">marketplace</span>
            </span></li>
          </ul>
        </div>
      </div>

      <div id="sideProject">
        <div className="grid-container title">
          <p><span className="animate-text-hc"><span className="animated-word">//</span> <span className="animated-word">03</span></span></p>
          <h2><span className="animate-title-hc fix-s">
            <span className="animated-letter">S</span>
            <span className="animated-letter">u</span>
            <span className="animated-letter">c</span>
            <span className="animated-letter">c</span>
            <span className="animated-letter">e</span>
            <span className="animated-letter">s</span>
            <span className="animated-letter">s</span> <span className="animated-letter">S</span>
            <span className="animated-letter">t</span>
            <span className="animated-letter">o</span>
            <span className="animated-letter">r</span>
            <span className="animated-letter">i</span>
            <span className="animated-letter">e</span>
            <span className="animated-letter">s</span>
          </span></h2>
        </div>

        <div className="grid-container">
          <div className="spa sp">
            <h5>
              <span className="animate-text-hc">
                <span className="animated-word">#1</span> <span className="animated-word">Global</span> <span className="animated-word">Game</span> <span className="animated-word">Publisher</span>
              </span>
              <span className="secondary animate-text-hc">
                <span className="animated-word">[Game,</span> <span className="animated-word">Entertainment]</span>
              </span>
            </h5>
            <p className="animate-text-hc">
              <span className="animated-word">Declining</span> <span className="animated-word">marketing</span> <span className="animated-word">ROI</span> <span className="animated-word">due</span> <span className="animated-word">to</span> <span className="animated-word">low</span> <span className="animated-word">banner</span> <span className="animated-word">ad</span> <span className="animated-word">CTR</span> <span className="animated-word">(0.5%)</span>
            </p>
            <ul>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">15x</span> <span className="animated-word">CTR</span> <span className="animated-word">increase</span> <span className="animated-word">(0.5%</span> <span className="animated-word">→</span> <span className="animated-word">7.5%)</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">40%</span> <span className="animated-word">CPI</span> <span className="animated-word">reduction</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">2x</span> <span className="animated-word">retention</span> <span className="animated-word">rate</span> <span className="animated-word">improvement</span>
              </span></li>
            </ul>
            <ul>
              <li><span className="animate-text-hc"><span className="animated-word">Duration:</span> <span className="animated-word">3</span> <span className="animated-word">months</span></span></li>
              <li><span className="animate-text-hc"><span className="animated-word">Scale:</span> <span className="animated-word">Global</span> <span className="animated-word">campaign,</span> <span className="animated-word">50</span> <span className="animated-word">countries</span></span></li>
            </ul>
          </div>

          <div className="spb sp">
            <h5>
              <span className="animate-text-hc">
                <span className="animated-word">#2</span> <span className="animated-word">E-commerce</span> <span className="animated-word">Platform</span>
              </span>
              <span className="secondary animate-text-hc">
                <span className="animated-word">[E-commerce,</span> <span className="animated-word">Retail]</span>
              </span>
            </h5>
            <p className="animate-text-hc">
              <span className="animated-word">Low</span> <span className="animated-word">purchase</span> <span className="animated-word">conversion</span> <span className="animated-word">rate</span> <span className="animated-word">in</span> <span className="animated-word">mobile</span> <span className="animated-word">shopping</span> <span className="animated-word">app</span>
            </p>
            <ul>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">3x</span> <span className="animated-word">purchase</span> <span className="animated-word">conversion</span> <span className="animated-word">rate</span> <span className="animated-word">increase</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">25%</span> <span className="animated-word">average</span> <span className="animated-word">order</span> <span className="animated-word">value</span> <span className="animated-word">increase</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">60%</span> <span className="animated-word">return</span> <span className="animated-word">rate</span> <span className="animated-word">improvement</span>
              </span></li>
            </ul>
            <ul>
              <li><span className="animate-text-hc"><span className="animated-word">Duration:</span> <span className="animated-word">6</span> <span className="animated-word">months</span></span></li>
              <li><span className="animate-text-hc"><span className="animated-word">Region:</span> <span className="animated-word">Southeast</span> <span className="animated-word">Asia</span></span></li>
            </ul>
          </div>

          <div className="spc sp">
            <h5>
              <span className="animate-text-hc">
                <span className="animated-word">#3</span> <span className="animated-word">Fintech</span> <span className="animated-word">Startup</span>
              </span>
              <span className="secondary animate-text-hc">
                <span className="animated-word">[Fintech,</span> <span className="animated-word">Startup]</span>
              </span>
            </h5>
            <p className="animate-text-hc">
              <span className="animated-word">Lack</span> <span className="animated-word">of</span> <span className="animated-word">new</span> <span className="animated-word">service</span> <span className="animated-word">awareness</span> <span className="animated-word">and</span> <span className="animated-word">difficulty</span> <span className="animated-word">acquiring</span> <span className="animated-word">users</span>
            </p>
            <ul>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">100K</span> <span className="animated-word">users</span> <span className="animated-word">acquired</span> <span className="animated-word">in</span> <span className="animated-word">3</span> <span className="animated-word">weeks</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">Viral</span> <span className="animated-word">coefficient</span> <span className="animated-word">of</span> <span className="animated-word">2.3</span> <span className="animated-word">achieved</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">70%</span> <span className="animated-word">CAC</span> <span className="animated-word">reduction</span>
              </span></li>
            </ul>
            <ul>
              <li><span className="animate-text-hc"><span className="animated-word">Duration:</span> <span className="animated-word">1</span> <span className="animated-word">month</span></span></li>
              <li><span className="animate-text-hc"><span className="animated-word">Investment:</span> <span className="animated-word">Series</span> <span className="animated-word">A,</span> <span className="animated-word">$5M</span></span></li>
            </ul>
          </div>
        </div>
      </div>

      <div id="contact">
        <div className="grid-container title">
          <p><span className="animate-text-hc"><span className="animated-word">//</span> <span className="animated-word">04</span></span></p>
          <h2><span className="animate-title-hc fix-s">
            <span className="animated-letter">L</span>
            <span className="animated-letter">e</span>
            <span className="animated-letter">t</span>
            <span className="animated-letter">&apos;</span>
            <span className="animated-letter">s</span> <span className="animated-letter">t</span>
            <span className="animated-letter">a</span>
            <span className="animated-letter">l</span>
            <span className="animated-letter">k</span>
          </span></h2>
        </div>
        <div className="grid-container">
          <div id="email-container">
            <p id="email-action-mobile" className="only-s">Long press to copy!</p>
            <h3 id="email" data-tocopy="hello@adnori.com">
              <span className="animate-text-hc"><span className="animated-word">hello</span></span>
              <br />
              <span className="animate-text-hc"><span className="animated-word">@adnori.com</span></span>
            </h3>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="grid-container">
          <div id="grid-footer">
            <div>
              <p className="text-footer">
                +82-2-599-1408
              </p>
            </div>
            <div><p className="text-footer">© 2025 Adnori. All rights reserved.</p></div>
            <div><p className="text-footer">Made with ❤️ and 🎮 in Seoul</p></div>
          </div>
        </div>
      </div>

      <div id="cursor-circle"></div>
      <div id="tooltip"><p>click to copy</p></div>

      {/* Scripts */}
      <Script src="https://unpkg.com/lenis@1.1.3/dist/lenis.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/three@0.139.0/build/three.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/Draggable.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/TextPlugin.min.js" strategy="afterInteractive" />
      {/* Scripts are loaded dynamically in useEffect above */}

      {/* Shaders */}
      <script id="vertexShader" type="x-shader/x-vertex" dangerouslySetInnerHTML={{ __html: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform vec2 pixels;
        float PI = 3.141592653589793238;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `}} />
      <script id="fragmentShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{ __html: `
        uniform float time;
        uniform float progress;
        uniform sampler2D uDataTexture;
        uniform sampler2D uTexture;
        uniform vec4 resolution;
        varying vec2 vUv;
        varying vec3 vPosition;
        float PI = 3.141592653589793238;
        void main() {
          vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
          vec4 color = texture2D(uTexture,newUV);
          vec4 offset = texture2D(uDataTexture,vUv);
          gl_FragColor = vec4(vUv,0.0,1.);
          gl_FragColor = vec4(offset.r,0.,0.,1.);
          gl_FragColor = color;
          gl_FragColor = texture2D(uTexture,newUV - 0.02*offset.rg);
        }
      `}} />
    </>
  );
}
