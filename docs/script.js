// Fade-in sutil ao rolar — só estética, sem nada crítico depender disso.
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".feature-card, .step, .shot").forEach((el) => {
  el.classList.add("fade-init");
  observer.observe(el);
});
