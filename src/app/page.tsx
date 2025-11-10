'use client';

import Script from 'next/script';
import { useEffect } from 'react';

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
          ['easter.min.js', 'favicon.min.js', 'color.min.js', 'adnori-animations.js'].forEach(file => {
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
            <span className="letter underlined easterEgg pm easter-pointer" emoji="🎮">gameplay,</span>{' '}
            <span className="letter">marketing</span>{' '}
            <span className="letter">into</span>{' '}
            <span className="letter underlined easterEgg inno easter-pointer" emoji="✨">joy</span>{' '}
            <span className="letter">with</span>{' '}
            <span className="letter">our</span>{' '}
            <span className="letter underlined easterEgg tech easter-pointer" emoji="🚀">innovative</span>{' '}
            <span className="letter">software</span>{' '}
            <span className="letter underlined easterEgg design easter-pointer" emoji="💡">platform</span>
          </h5>
        </div>

        <div className="grid-container" id="bottom">
          <p className="indic">scr<br />olld<br />own</p>
          <p className="social">
            <span>
              <a href="https://www.linkedin.com/company/adnori" target="_blank" rel="noreferrer"><span>Linkedin,</span></a>
              <a href="https://twitter.com/adnori" target="_blank" rel="noreferrer"><span>Twitter,</span></a>
              <a href="https://github.com/adnori" target="_blank" rel="noreferrer"><span>Github</span></a>
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
            <span className="animate-text-hc">
              <span className="animated-word">#1</span> <span className="animated-word">Interactive</span> <span className="animated-word">Advertising</span> <span className="animated-word">Platform</span>
            </span>
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
            <span className="animate-text-hc">
              <span className="animated-word">#2</span> <span className="animated-word">사용자</span> <span className="animated-word">참여</span> <span className="animated-word">플랫폼</span>
            </span>
          </h3>
          <p className="animate-text-hc">
            <span className="animated-word">광고를</span> <span className="animated-word">보고</span> <span className="animated-word">리워드를</span> <span className="animated-word">받는,</span> <span className="animated-word">즐거운</span> <span className="animated-word">경험</span>
          </p>
          <p className="animate-text-hc platform-description">
            <span className="animated-word">광고</span> <span className="animated-word">참여에</span> <span className="animated-word">대한</span> <span className="animated-word">즉각적인</span> <span className="animated-word">보상을</span> <span className="animated-word">제공하여</span> <span className="animated-word">사용자</span> <span className="animated-word">유입과</span> <span className="animated-word">재방문을</span> <span className="animated-word">유도합니다.</span> <span className="animated-word">게이미피케이션</span> <span className="animated-word">요소를</span> <span className="animated-word">통해</span> <span className="animated-word">광고를</span> <span className="animated-word">능동적인</span> <span className="animated-word">활동으로</span> <span className="animated-word">전환하고,</span> <span className="animated-word">사용자</span> <span className="animated-word">로열티를</span> <span className="animated-word">구축합니다.</span>
          </p>
          <ul>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">포인트</span> <span className="animated-word">적립</span> <span className="animated-word">시스템:</span> <span className="animated-word">광고</span> <span className="animated-word">참여</span> <span className="animated-word">시</span> <span className="animated-word">포인트</span> <span className="animated-word">획득,</span> <span className="animated-word">쿠폰</span> <span className="animated-word">및</span> <span className="animated-word">상품으로</span> <span className="animated-word">교환</span> <span className="animated-word">가능</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">게임형</span> <span className="animated-word">미션:</span> <span className="animated-word">일일</span> <span className="animated-word">챌린지,</span> <span className="animated-word">주간</span> <span className="animated-word">퀘스트</span> <span className="animated-word">등</span> <span className="animated-word">다양한</span> <span className="animated-word">참여</span> <span className="animated-word">미션</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">소셜</span> <span className="animated-word">공유</span> <span className="animated-word">기능:</span> <span className="animated-word">친구</span> <span className="animated-word">초대</span> <span className="animated-word">및</span> <span className="animated-word">순위</span> <span className="animated-word">경쟁을</span> <span className="animated-word">통한</span> <span className="animated-word">바이럴</span> <span className="animated-word">효과</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">개인화된</span> <span className="animated-word">추천:</span> <span className="animated-word">AI</span> <span className="animated-word">기반</span> <span className="animated-word">사용자</span> <span className="animated-word">관심사</span> <span className="animated-word">분석으로</span> <span className="animated-word">맞춤형</span> <span className="animated-word">광고</span> <span className="animated-word">제공</span>
            </span></li>
          </ul>
        </div>
        <div className="grid-container work">
          <h3>
            <span className="animate-text-hc">
              <span className="animated-word">#3</span> <span className="animated-word">크리에이터</span> <span className="animated-word">도구</span>
            </span>
          </h3>
          <p className="animate-text-hc">
            <span className="animated-word">누구나</span> <span className="animated-word">쉽게</span> <span className="animated-word">만드는</span> <span className="animated-word">인터랙티브</span> <span className="animated-word">광고</span>
          </p>
          <p className="animate-text-hc platform-description">
            <span className="animated-word">개발</span> <span className="animated-word">지식</span> <span className="animated-word">없이도</span> <span className="animated-word">누구나</span> <span className="animated-word">전문가</span> <span className="animated-word">수준의</span> <span className="animated-word">인터랙티브</span> <span className="animated-word">광고를</span> <span className="animated-word">제작할</span> <span className="animated-word">수</span> <span className="animated-word">있는</span> <span className="animated-word">도구를</span> <span className="animated-word">제공합니다.</span> <span className="animated-word">크리에이터와</span> <span className="animated-word">마케터가</span> <span className="animated-word">아이디어를</span> <span className="animated-word">빠르게</span> <span className="animated-word">실행하고,</span> <span className="animated-word">데이터</span> <span className="animated-word">기반으로</span> <span className="animated-word">최적화할</span> <span className="animated-word">수</span> <span className="animated-word">있습니다.</span>
          </p>
          <ul>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">노코드</span> <span className="animated-word">광고</span> <span className="animated-word">빌더:</span> <span className="animated-word">드래그</span> <span className="animated-word">&amp;</span> <span className="animated-word">드롭으로</span> <span className="animated-word">5분</span> <span className="animated-word">만에</span> <span className="animated-word">광고</span> <span className="animated-word">제작</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">템플릿</span> <span className="animated-word">라이브러리:</span> <span className="animated-word">100+</span> <span className="animated-word">검증된</span> <span className="animated-word">게임</span> <span className="animated-word">템플릿과</span> <span className="animated-word">디자인</span> <span className="animated-word">에셋</span> <span className="animated-word">제공</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">퍼포먼스</span> <span className="animated-word">분석:</span> <span className="animated-word">실시간</span> <span className="animated-word">성과</span> <span className="animated-word">추적과</span> <span className="animated-word">인사이트</span> <span className="animated-word">리포트</span> <span className="animated-word">자동</span> <span className="animated-word">생성</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">수익화</span> <span className="animated-word">도구:</span> <span className="animated-word">광고</span> <span className="animated-word">수익</span> <span className="animated-word">배분</span> <span className="animated-word">시스템과</span> <span className="animated-word">크리에이터</span> <span className="animated-word">마켓플레이스</span>
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
                <span className="animated-word">#1</span> <span className="animated-word">글로벌</span> <span className="animated-word">게임</span> <span className="animated-word">퍼블리셔</span>
              </span>
              <span className="secondary animate-text-hc">
                <span className="animated-word">[Game,</span> <span className="animated-word">Entertainment]</span>
              </span>
            </h5>
            <p className="animate-text-hc">
              <span className="animated-word">기존</span> <span className="animated-word">배너</span> <span className="animated-word">광고의</span> <span className="animated-word">낮은</span> <span className="animated-word">클릭률</span> <span className="animated-word">(0.5%)로</span> <span className="animated-word">인한</span> <span className="animated-word">마케팅</span> <span className="animated-word">ROI</span> <span className="animated-word">저하</span>
            </p>
            <ul>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">클릭률</span> <span className="animated-word">15배</span> <span className="animated-word">증가</span> <span className="animated-word">(0.5%</span> <span className="animated-word">→</span> <span className="animated-word">7.5%)</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">CPI</span> <span className="animated-word">40%</span> <span className="animated-word">감소</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">리텐션율</span> <span className="animated-word">2배</span> <span className="animated-word">향상</span>
              </span></li>
            </ul>
            <ul>
              <li><span className="animate-text-hc"><span className="animated-word">기간:</span> <span className="animated-word">3개월</span></span></li>
              <li><span className="animate-text-hc"><span className="animated-word">규모:</span> <span className="animated-word">글로벌</span> <span className="animated-word">캠페인,</span> <span className="animated-word">50개국</span></span></li>
            </ul>
          </div>

          <div className="spb sp">
            <h5>
              <span className="animate-text-hc">
                <span className="animated-word">#2</span> <span className="animated-word">이커머스</span> <span className="animated-word">플랫폼</span>
              </span>
              <span className="secondary animate-text-hc">
                <span className="animated-word">[E-commerce,</span> <span className="animated-word">Retail]</span>
              </span>
            </h5>
            <p className="animate-text-hc">
              <span className="animated-word">모바일</span> <span className="animated-word">쇼핑</span> <span className="animated-word">앱의</span> <span className="animated-word">낮은</span> <span className="animated-word">구매</span> <span className="animated-word">전환율</span>
            </p>
            <ul>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">구매</span> <span className="animated-word">전환율</span> <span className="animated-word">3배</span> <span className="animated-word">증가</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">평균</span> <span className="animated-word">주문</span> <span className="animated-word">금액</span> <span className="animated-word">25%</span> <span className="animated-word">상승</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">재방문율</span> <span className="animated-word">60%</span> <span className="animated-word">향상</span>
              </span></li>
            </ul>
            <ul>
              <li><span className="animate-text-hc"><span className="animated-word">기간:</span> <span className="animated-word">6개월</span></span></li>
              <li><span className="animate-text-hc"><span className="animated-word">지역:</span> <span className="animated-word">동남아시아</span></span></li>
            </ul>
          </div>

          <div className="spc sp">
            <h5>
              <span className="animate-text-hc">
                <span className="animated-word">#3</span> <span className="animated-word">핀테크</span> <span className="animated-word">스타트업</span>
              </span>
              <span className="secondary animate-text-hc">
                <span className="animated-word">[Fintech,</span> <span className="animated-word">Startup]</span>
              </span>
            </h5>
            <p className="animate-text-hc">
              <span className="animated-word">신규</span> <span className="animated-word">서비스</span> <span className="animated-word">인지도</span> <span className="animated-word">부족</span> <span className="animated-word">및</span> <span className="animated-word">사용자</span> <span className="animated-word">확보</span> <span className="animated-word">어려움</span>
            </p>
            <ul>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">3주</span> <span className="animated-word">만에</span> <span className="animated-word">사용자</span> <span className="animated-word">10만</span> <span className="animated-word">명</span> <span className="animated-word">확보</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">바이럴</span> <span className="animated-word">계수</span> <span className="animated-word">2.3</span> <span className="animated-word">달성</span>
              </span></li>
              <li><span className="animate-text-hc">
                <span className="animated-word">-</span> <span className="animated-word">CAC</span> <span className="animated-word">70%</span> <span className="animated-word">절감</span>
              </span></li>
            </ul>
            <ul>
              <li><span className="animate-text-hc"><span className="animated-word">기간:</span> <span className="animated-word">1개월</span></span></li>
              <li><span className="animate-text-hc"><span className="animated-word">투자:</span> <span className="animated-word">시리즈</span> <span className="animated-word">A,</span> <span className="animated-word">$5M</span></span></li>
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
            <p id="email-action-mobile" className="only-s">길게 눌러서 복사하세요!</p>
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
                <a href="https://www.linkedin.com/company/adnori" target="_blank" rel="noreferrer"><span>Linkedin,</span></a>
                <a href="https://twitter.com/adnori" target="_blank" rel="noreferrer"><span>Twitter,</span></a>
                <a href="https://github.com/adnori" target="_blank" rel="noreferrer"><span>Github</span></a>
              </p>
            </div>
            <div><p className="text-footer">© 2024 Adnori. All rights reserved.</p></div>
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
