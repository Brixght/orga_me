// Intersection Observer for reveal animations
function observeElements(selector) {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  },{threshold:0.15});
  document.querySelectorAll(selector).forEach(el=>observer.observe(el));
}

// Carousel functionality
function initCarousel() {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dotsContainer = document.querySelector('.carousel-dots');
  
  if (!track || !slides.length) return;
  
  let currentIndex = 0;
  
  // Create dots
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  
  const dots = dotsContainer.querySelectorAll('span');
  
  function goToSlide(index) {
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }
  
  function nextSlide() {
    goToSlide((currentIndex + 1) % slides.length);
  }
  
  function prevSlide() {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }
  
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  // Auto-play every 5 seconds
  let autoPlay = setInterval(nextSlide, 5000);
  
  // Pause on hover
  const container = document.querySelector('.carousel-container');
  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(autoPlay));
    container.addEventListener('mouseleave', () => {
      autoPlay = setInterval(nextSlide, 5000);
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });
}

document.addEventListener('DOMContentLoaded', function(){
  observeElements('.card');
  observeElements('.product');
  observeElements('.reveal');
  initCarousel();
});
