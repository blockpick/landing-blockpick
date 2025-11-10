// Adnori Custom Loader Animation
(function() {
  function initLoader() {
    const loader = document.getElementById('loader');
    const gridLoader = document.getElementById('grid-loader');

    if (!loader || !gridLoader) return;

    // Clear existing content
    gridLoader.innerHTML = '';

    // Create loading container
    const loadingContainer = document.createElement('div');
    loadingContainer.className = 'adnori-loading-container';
    loadingContainer.innerHTML = `
      <div class="loading-content">
        <div class="falling-icons"></div>
        <div class="typing-text">
          <span class="loading-text"></span>
          <span class="cursor">|</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
      </div>
    `;

    gridLoader.appendChild(loadingContainer);

    // Game icons that will fall
    const gameIcons = ['🎮', '🎯', '🎲', '🎪', '🎨', '✨', '🚀', '💡'];
    const fallingIconsContainer = loadingContainer.querySelector('.falling-icons');

    // Create falling icons
    function createFallingIcon() {
      const icon = document.createElement('div');
      icon.className = 'falling-icon';
      icon.textContent = gameIcons[Math.floor(Math.random() * gameIcons.length)];
      icon.style.left = Math.random() * 100 + '%';
      icon.style.animationDuration = (2 + Math.random() * 3) + 's';
      icon.style.fontSize = (20 + Math.random() * 20) + 'px';
      icon.style.animationDelay = Math.random() * 2 + 's';

      fallingIconsContainer.appendChild(icon);

      // Remove icon after animation
      setTimeout(() => {
        icon.remove();
      }, 5000);
    }

    // Create multiple falling icons
    const iconInterval = setInterval(createFallingIcon, 300);

    // Initial batch of icons
    for (let i = 0; i < 10; i++) {
      setTimeout(createFallingIcon, i * 100);
    }

    // Typing effect
    const loadingTextElement = loadingContainer.querySelector('.loading-text');
    const texts = ['Loading Adnori', 'Preparing Experience', 'Almost Ready'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        loadingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        loadingTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      let typingSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }

      setTimeout(typeText, typingSpeed);
    }

    typeText();

    // Progress bar animation
    const progressFill = loadingContainer.querySelector('.progress-fill');
    let progress = 0;

    const progressInterval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        clearInterval(iconInterval);
      }
      progressFill.style.width = progress + '%';
    }, 200);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .adnori-loading-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #0A0A0A;
        overflow: hidden;
      }

      .loading-content {
        text-align: center;
        position: relative;
        z-index: 10;
      }

      .falling-icons {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
      }

      .falling-icon {
        position: absolute;
        top: -50px;
        animation: fall linear forwards;
        opacity: 0.7;
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
      }

      @keyframes fall {
        0% {
          transform: translateY(-50px) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.7;
        }
        90% {
          opacity: 0.7;
        }
        100% {
          transform: translateY(100vh) rotate(360deg);
          opacity: 0;
        }
      }

      .typing-text {
        font-size: 2rem;
        color: #F5F5F5;
        margin-bottom: 2rem;
        font-family: "JetBrains Mono", monospace;
        min-height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .loading-text {
        margin-right: 0.2rem;
      }

      .cursor {
        animation: blink 1s infinite;
        color: #F5F5F5;
      }

      @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }

      .progress-bar {
        width: 300px;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        overflow: hidden;
        margin: 0 auto;
      }

      .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #F5F5F5 0%, #9CA3AF 50%, #6B7280 100%);
        width: 0%;
        transition: width 0.3s ease;
        box-shadow: 0 0 10px rgba(245, 245, 245, 0.5);
      }

      @media screen and (max-width: 768px) {
        .typing-text {
          font-size: 1.5rem;
        }

        .progress-bar {
          width: 80%;
        }

        .falling-icon {
          font-size: 16px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLoader);
  } else {
    initLoader();
  }
})();
