// Small enhancements: smooth scroll and reveal for product cards
// plus hero and section fade-ins
function observeElements(selector) {
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  },{threshold:0.15});
  document.querySelectorAll(selector).forEach(el=>observer.observe(el));
}

document.addEventListener('DOMContentLoaded', function(){
  observeElements('.card');
  observeElements('.product');
  observeElements('.hero-home');
  observeElements('.featured-products');
});
