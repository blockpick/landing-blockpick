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
          <p className="ava">광고와 재미의 만남</p>
          <p className="pos">글로벌 소프트웨어 플랫폼</p>
          <nav>
            <p>
              <a href="#project"><span>솔루션,</span></a>
              <a href="#about"><span>회사소개,</span></a>
              <a href="#contact"><span>문의하기</span></a>
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
              <a className="link-s" href="#project"><span>솔루션,</span></a>
              <a className="link-s" href="#about"><span>회사소개,</span></a>
              <a className="link-s" href="#contact"><span>문의하기</span></a>
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
            <span className="letter">광</span>
            <span className="letter">고</span>
            <span className="letter">와</span>
            <span className="letter"> </span>
            <span className="letter">놀</span>
            <span className="letter">이</span>
            <span className="letter">의</span>
            <span className="letter"> </span>
            <span className="letter">만</span>
            <span className="letter">남</span>
          </h2>
          <h5 id="intro" className="animate-text">
            <span className="letter">광고를</span>{' '}
            <span className="letter underlined easterEgg pm easter-pointer" emoji="🎮">게임처럼,</span>{' '}
            <span className="letter">마케팅을</span>{' '}
            <span className="letter underlined easterEgg inno easter-pointer" emoji="✨">즐거움으로</span>{' '}
            <span className="letter">변화시키는</span>{' '}
            <span className="letter underlined easterEgg tech easter-pointer" emoji="🚀">혁신적인</span>{' '}
            <span className="letter">소프트웨어</span>{' '}
            <span className="letter underlined easterEgg design easter-pointer" emoji="💡">플랫폼</span>
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
            <span className="animated-word">광고는</span> <span className="animated-word">더</span> <span className="animated-word">이상</span> <span className="animated-word">방해가</span> <span className="animated-word">아닙니다.</span>
          </p>
          <p className="animate-text-hc">
            <span className="animated-word">&quot;Nori(놀이)&quot;는</span> <span className="animated-word">한국어로</span> <span className="animated-word">&apos;재미있는</span> <span className="animated-word">활동&apos;을</span> <span className="animated-word">의미합니다.</span> <span className="animated-word">우리는</span> <span className="animated-word">광고(Ad)와</span> <span className="animated-word">놀이(Nori)를</span> <span className="animated-word">결합하여,</span> <span className="animated-word">사용자들이</span> <span className="animated-word">광고를</span> <span className="animated-word">즐기고</span> <span className="animated-word">참여하는</span> <span className="animated-word">새로운</span> <span className="animated-word">경험을</span> <span className="animated-word">만듭니다.</span>
          </p>
          <p className="animate-text-hc">
            <span className="animated-word">지루한</span> <span className="animated-word">광고는</span> <span className="animated-word">이제</span> <span className="animated-word">그만.</span> <span className="animated-word">Adnori와</span> <span className="animated-word">함께</span> <span className="animated-word">광고를</span> <span className="animated-word">놀이로</span> <span className="animated-word">바꾸세요.</span>
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
              <span className="animated-word">#1</span> <span className="animated-word">인터랙티브</span> <span className="animated-word">광고</span> <span className="animated-word">플랫폼</span>
            </span>
          </h3>
          <p className="animate-text-hc">
            <span className="animated-word">클릭률을</span> <span className="animated-word">10배</span> <span className="animated-word">높이는</span> <span className="animated-word">게임화된</span> <span className="animated-word">광고</span> <span className="animated-word">솔루션</span>
          </p>
          <p className="animate-text-hc platform-description">
            <span className="animated-word">사용자가</span> <span className="animated-word">직접</span> <span className="animated-word">참여하는</span> <span className="animated-word">미니게임</span> <span className="animated-word">형태의</span> <span className="animated-word">광고를</span> <span className="animated-word">통해</span> <span className="animated-word">브랜드</span> <span className="animated-word">인게이지먼트를</span> <span className="animated-word">극대화합니다.</span> <span className="animated-word">단순한</span> <span className="animated-word">배너가</span> <span className="animated-word">아닌,</span> <span className="animated-word">몰입형</span> <span className="animated-word">경험을</span> <span className="animated-word">제공하여</span> <span className="animated-word">광고</span> <span className="animated-word">피로도를</span> <span className="animated-word">줄이고</span> <span className="animated-word">전환율을</span> <span className="animated-word">향상시킵니다.</span>
          </p>
          <ul>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">미니게임</span> <span className="animated-word">기반</span> <span className="animated-word">광고:</span> <span className="animated-word">퍼즐,</span> <span className="animated-word">퀴즈,</span> <span className="animated-word">룰렛</span> <span className="animated-word">등</span> <span className="animated-word">다양한</span> <span className="animated-word">게임</span> <span className="animated-word">템플릿</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">실시간</span> <span className="animated-word">참여</span> <span className="animated-word">분석:</span> <span className="animated-word">클릭률,</span> <span className="animated-word">참여</span> <span className="animated-word">시간,</span> <span className="animated-word">전환율</span> <span className="animated-word">데이터</span> <span className="animated-word">실시간</span> <span className="animated-word">추적</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">A/B</span> <span className="animated-word">테스트</span> <span className="animated-word">자동화:</span> <span className="animated-word">다양한</span> <span className="animated-word">게임</span> <span className="animated-word">형식을</span> <span className="animated-word">자동으로</span> <span className="animated-word">테스트하고</span> <span className="animated-word">최적화</span>
            </span></li>
            <li><span className="animate-text-hc">
              <span className="animated-word">-</span> <span className="animated-word">ROI</span> <span className="animated-word">대시보드:</span> <span className="animated-word">캠페인</span> <span className="animated-word">성과를</span> <span className="animated-word">한눈에</span> <span className="animated-word">확인하는</span> <span className="animated-word">직관적인</span> <span className="animated-word">인터페이스</span>
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
