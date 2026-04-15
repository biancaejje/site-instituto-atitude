const slides = Array.from(document.querySelectorAll(".slide"));
const dotsContainer = document.getElementById("carouselDots");
const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");
const backToTopButton = document.getElementById("backToTop");
const menuOpenButton = document.getElementById("menuOpen");
const menuCloseButton = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

if (menuOpenButton && menuCloseButton && mobileMenu && menuOverlay) {
  const closeMenu = () => document.body.classList.remove("menu-open");

  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("menu-open");
  });

  menuCloseButton.addEventListener("click", closeMenu);
  menuOverlay.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1136) closeMenu();
  });
}

let currentSlide = 0;
let autoPlayTimer;

function renderDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Ir para o slide ${index + 1}`);
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetAutoPlay();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentSlide);
  });

  const dots = dotsContainer.querySelectorAll("button");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  updateCarousel();
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

function startAutoPlay() {
  autoPlayTimer = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(autoPlayTimer);
  startAutoPlay();
}

if (slides.length && dotsContainer && nextButton && prevButton) {
  nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  renderDots();
  updateCarousel();
  startAutoPlay();
}

const professionalsTrack = document.getElementById("professionalsTrack");
const professionalsPrev = document.getElementById("professionalsPrev");
const professionalsNext = document.getElementById("professionalsNext");

if (professionalsTrack && professionalsPrev && professionalsNext) {
  const professionalCards = Array.from(
    professionalsTrack.querySelectorAll(".professional-card")
  );

  let professionalIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth <= 820) return 1;
    return 2;
  }

  function getStepSize() {
    const style = window.getComputedStyle(professionalsTrack);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    const cardWidth = professionalCards[0]?.getBoundingClientRect().width || 0;
    return cardWidth + gap;
  }

  function getMaxIndex() {
    return Math.max(0, professionalCards.length - getVisibleCards());
  }

  function updateProfessionalsTrack() {
    const maxIndex = getMaxIndex();
    professionalIndex = Math.min(Math.max(professionalIndex, 0), maxIndex);

    professionalsTrack.style.transform = `translateX(-${
      professionalIndex * getStepSize()
    }px)`;
  }

  professionalsNext.addEventListener("click", () => {
    const maxIndex = getMaxIndex();
    professionalIndex = professionalIndex >= maxIndex ? 0 : professionalIndex + 1;
    updateProfessionalsTrack();
  });

  professionalsPrev.addEventListener("click", () => {
    const maxIndex = getMaxIndex();
    professionalIndex = professionalIndex <= 0 ? maxIndex : professionalIndex - 1;
    updateProfessionalsTrack();
  });

  window.addEventListener("resize", updateProfessionalsTrack);
  updateProfessionalsTrack();
}

const revealTargets = document.querySelectorAll(
  "main .section, .welcome-card, .about-box, .card, .professional-card, .event-card"
);

if (revealTargets.length) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    revealTargets.forEach((target) => target.classList.add("reveal-visible"));
  } else {
    revealTargets.forEach((target) => target.classList.add("reveal-item"));

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
  }
}

if (backToTopButton) {
  const toggleBackToTop = () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 220);
  };

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
}
