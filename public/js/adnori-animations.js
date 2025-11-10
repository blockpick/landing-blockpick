// Adnori GSAP 애니메이션 - 강화 버전

// GSAP와 ScrollTrigger가 로드될 때까지 대기
function initAdnoriAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.log('Waiting for GSAP...');
    setTimeout(initAdnoriAnimations, 100);
    return;
  }

  console.log('Initializing Adnori animations...');
  gsap.registerPlugin(ScrollTrigger);

  // 플로팅 파티클 생성
  createFloatingParticles();

  // 그리드 라인 애니메이션
  animateGridLines();

  // Hero 섹션 타이틀 애니메이션
  gsap.from("#name .letter", {
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.05,
    ease: "back.out(1.7)",
    delay: 0.5
  });

  gsap.from("#lastname .letter", {
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: 0.05,
    ease: "back.out(1.7)",
    delay: 0.8
  });

  // Intro 텍스트 애니메이션
  gsap.from("#intro .letter", {
    duration: 0.8,
    opacity: 0,
    y: 50,
    stagger: 0.02,
    ease: "power2.out",
    delay: 1.3
  });

  // 섹션 타이틀 애니메이션 (스크롤 트리거)
  gsap.utils.toArray(".title h2").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      },
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power3.out"
    });
  });

  // Our Platform 섹션 - work 아이템 애니메이션
  gsap.utils.toArray("#about .work").forEach((work, index) => {
    // h3 타이틀 애니메이션
    gsap.from(work.querySelector("h3"), {
      scrollTrigger: {
        trigger: work,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      duration: 0.8,
      x: -80,
      opacity: 0,
      ease: "power2.out"
    });

    // 설명 텍스트 애니메이션
    gsap.from(work.querySelector("p"), {
      scrollTrigger: {
        trigger: work,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      duration: 0.8,
      x: -60,
      opacity: 0,
      delay: 0.2,
      ease: "power2.out"
    });

    // 리스트 아이템 애니메이션
    gsap.from(work.querySelectorAll("li"), {
      scrollTrigger: {
        trigger: work,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      duration: 0.6,
      x: -40,
      opacity: 0,
      stagger: 0.1,
      delay: 0.4,
      ease: "power2.out"
    });
  });

  // Success Stories 카드 애니메이션
  gsap.utils.toArray("#sideProject .sp").forEach((card, index) => {
    // 카드 전체 페이드인 + 스케일
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 1,
      scale: 0.9,
      opacity: 0,
      y: 50,
      ease: "back.out(1.2)",
      delay: index * 0.2
    });

    // 카드 호버 애니메이션 강화
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1.02,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
    });
  });

  // 이메일 섹션 애니메이션
  gsap.from("#email", {
    scrollTrigger: {
      trigger: "#email",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "elastic.out(1, 0.5)"
  });

  // 이메일 호버 펄스 효과
  const email = document.querySelector("#email");
  if (email) {
    email.addEventListener('mouseenter', () => {
      gsap.to(email, {
        duration: 0.3,
        scale: 1.05,
        ease: "power2.out"
      });
    });

    email.addEventListener('mouseleave', () => {
      gsap.to(email, {
        duration: 0.3,
        scale: 1,
        ease: "power2.out"
      });
    });
  }

  // 네비게이션 링크 호버 애니메이션
  gsap.utils.toArray("nav a").forEach((link) => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        duration: 0.3,
        x: 5,
        ease: "power2.out"
      });
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        duration: 0.3,
        x: 0,
        ease: "power2.out"
      });
    });
  });

  // 푸터 페이드인
  gsap.from("#footer", {
    scrollTrigger: {
      trigger: "#footer",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "power2.out"
  });

  // 패럴랙스 효과 - 타이틀
  gsap.to("#title", {
    scrollTrigger: {
      trigger: "#title",
      start: "top top",
      end: "bottom top",
      scrub: 1
    },
    y: 200,
    opacity: 0.3,
    ease: "none"
  });

  // 마우스 커서 따라다니는 그라디언트 효과
  const body = document.body;
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(body, {
      duration: 0.3,
      '--mouse-x': `${mouseX}px`,
      '--mouse-y': `${mouseY}px`,
      ease: "power2.out"
    });
  });

  // 스크롤 진행률에 따른 밝기 변화 (그레이 톤)
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const progress = self.progress;
      const lightness = 60 + (progress * 40); // 60% -> 100% (어두운 회색 -> 밝은 회색)
      document.documentElement.style.setProperty('--scroll-hue', lightness);
    }
  });

  // 스크롤 프로그레스 바
  const progressBar = document.querySelector('#scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  console.log('Adnori animations initialized!');
}

// 플로팅 파티클 생성 함수
function createFloatingParticles() {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'floating-particles';
  document.body.appendChild(particleContainer);

  // 50개의 파티클 생성
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    // 랜덤 위치
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';

    particleContainer.appendChild(particle);

    // GSAP 애니메이션
    gsap.to(particle, {
      x: () => (Math.random() - 0.5) * 300,
      y: () => (Math.random() - 0.5) * 300,
      opacity: () => Math.random() * 0.8 + 0.2,
      scale: () => Math.random() * 2 + 0.5,
      duration: () => Math.random() * 3 + 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: () => Math.random() * 2
    });
  }
}

// 그리드 라인 애니메이션
function animateGridLines() {
  const gridItems = document.querySelectorAll('#bck .grid-item');

  gridItems.forEach((item, index) => {
    gsap.to(item, {
      borderColor: () => {
        const colors = [
          'rgba(245, 245, 245, 0.1)',
          'rgba(156, 163, 175, 0.15)',
          'rgba(107, 114, 128, 0.1)',
          'rgba(75, 85, 99, 0.1)'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      },
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.1
    });
  });
}

// 타이틀에 3D 효과 추가
gsap.utils.toArray("#name .letter, #lastname .letter").forEach((letter) => {
  letter.addEventListener('mouseenter', () => {
    gsap.to(letter, {
      duration: 0.3,
      scale: 1.3,
      rotationY: 15,
      z: 50,
      ease: "back.out(2)"
    });
  });

  letter.addEventListener('mouseleave', () => {
    gsap.to(letter, {
      duration: 0.3,
      scale: 1,
      rotationY: 0,
      z: 0,
      ease: "power2.out"
    });
  });
});

// 섹션 타이틀에 파도 효과
function waveAnimation(selector) {
  const letters = document.querySelectorAll(`${selector} .animated-letter`);

  gsap.to(letters, {
    y: -10,
    stagger: {
      each: 0.05,
      repeat: -1,
      yoyo: true
    },
    duration: 0.5,
    ease: "sine.inOut"
  });
}

// 스크롤 시 배경 패럴랙스 강화
gsap.to("body::before", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  },
  rotate: 180,
  scale: 1.2,
  ease: "none"
});

// Success Stories 간단한 애니메이션만
gsap.utils.toArray("#sideProject .sp").forEach((card) => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      duration: 0.3,
      x: 10,
      ease: "power2.out"
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      duration: 0.3,
      x: 0,
      ease: "power2.out"
    });
  });
});

// 클릭 시 파티클 폭발 효과
document.addEventListener('click', (e) => {
  createClickExplosion(e.clientX, e.clientY);
});

function createClickExplosion(x, y) {
  const particleCount = 12;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.borderRadius = '50%';
    particle.style.background = `hsl(0, 0%, ${Math.random() * 40 + 60}%)`;
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = 100 + Math.random() * 100;

    gsap.to(particle, {
      x: Math.cos(angle) * velocity,
      y: Math.sin(angle) * velocity,
      opacity: 0,
      scale: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => particle.remove()
    });
  }
}

// 텍스트에 글리치 효과
function glitchEffect(element) {
  const original = element.textContent;
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  let iterations = 0;

  const interval = setInterval(() => {
    element.textContent = original
      .split('')
      .map((char, index) => {
        if (index < iterations) {
          return original[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');

    if (iterations >= original.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 30);
}

// h3 요소에 호버 시 글리치 효과
gsap.utils.toArray("#about .work h3").forEach((h3) => {
  h3.addEventListener('mouseenter', () => {
    glitchEffect(h3);
  });
});

// 페이지 로드 후 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdnoriAnimations);
} else {
  initAdnoriAnimations();
}
