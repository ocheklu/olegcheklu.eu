// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, {passive:true});

// Fade in
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)} });
}, {threshold:.08, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.fade').forEach(el => io.observe(el));

// Sliders
document.querySelectorAll('.photo-slider').forEach(slider => {
  const track  = slider.querySelector('.slider-track');
  const slides = track.querySelectorAll('.slider-slide');
  const dotsEl = document.getElementById('dots-' + track.id);
  const dots   = dotsEl ? dotsEl.querySelectorAll('.slider-dot') : [];
  let cur = 0;
  function goTo(n){
    cur = Math.max(0, Math.min(n, slides.length - 1));
    track.scrollTo({left: cur * track.clientWidth, behavior:'smooth'});
    dots.forEach((d,i) => d.classList.toggle('active', i === cur));
  }
  slider.querySelector('.prev').addEventListener('click', () => goTo(cur - 1));
  slider.querySelector('.next').addEventListener('click', () => goTo(cur + 1));
  dots.forEach((d,i) => d.addEventListener('click', () => goTo(i)));
});

// Close modal on Escape
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') document.getElementById('links-modal').classList.remove('open');
});

// Burger menu
const burger  = document.getElementById('nav-burger');
const navList = document.getElementById('nav-list');
if(burger){
  burger.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    document.documentElement.classList.toggle('nav-open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });
  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navList.classList.remove('open');
      burger.classList.remove('open');
      document.documentElement.classList.remove('nav-open');
      document.body.classList.remove('nav-open');
    });
  });
}
