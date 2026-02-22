document.addEventListener("DOMContentLoaded", function () {
  // Функция плавного скролла (только для якорей на текущей странице)
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // --- СЛАЙДЕР В HERO (только на главной) ---
  const heroSlider = document.querySelector(".hero__slider");
  if (heroSlider) {
    const heroImages = [
      "images/hero/1.jpg",
      "images/hero/2.jpg",
      "images/hero/3.jpg",
      "images/hero/4.jpg",
    ];
    heroImages.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Слайд ${index + 1}`;
      img.className = "hero__slide";
      if (index === 0) img.classList.add("active");
      heroSlider.appendChild(img);
    });

    const heroSlides = document.querySelectorAll(".hero__slide");
    if (heroSlides.length > 0) {
      let currentIndex = 0;
      setInterval(() => {
        heroSlides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % heroSlides.length;
        heroSlides[currentIndex].classList.add("active");
      }, 3000);
    }
  }

  // --- ПОРТФОЛИО (на странице port.html) ---
  const portfolioGrid = document.querySelector(".portfolio__grid");
  if (portfolioGrid) {
    // Массив с именами файлов для портфолио (папка images/portfolio/)
    const portfolioImages = [
      "images/portfolio/1.jpg",
      "images/portfolio/2.jpg",
      "images/portfolio/3.jpg",
      "images/portfolio/4.jpg",
      "images/portfolio/5.jpg",
      "images/portfolio/6.jpg",
      // Добавляйте новые фото сюда
    ];

    portfolioImages.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Фотография портфолио";
      img.className = "portfolio__item";
      img.loading = "lazy";
      portfolioGrid.appendChild(img);
    });
  }

  // --- СЛАЙДЕР В СЕКЦИИ "ОБО МНЕ" (только на странице about) ---
  const aboutSlider = document.querySelector(".about__slider");
  if (aboutSlider) {
    const aboutImages = ["images/about/1.jpg", "images/about/2.jpg"];

    aboutImages.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Фото ${index + 1}`;
      img.className = "about__slide";
      if (index === 0) img.classList.add("active");
      aboutSlider.appendChild(img);
    });

    const aboutSlides = document.querySelectorAll(".about__slide");
    if (aboutSlides.length > 0) {
      let currentAboutIndex = 0;
      setInterval(() => {
        aboutSlides[currentAboutIndex].classList.remove("active");
        currentAboutIndex = (currentAboutIndex + 1) % aboutSlides.length;
        aboutSlides[currentAboutIndex].classList.add("active");
      }, 3000);
    }
  }
});
