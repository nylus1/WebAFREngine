const elements = document.querySelectorAll('.fade-in');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, options);

elements.forEach(element => {
  element.style.opacity = 0;
  element.style.transform = 'translateY(50px)';
  element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
  observer.observe(element);
});