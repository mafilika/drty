// Sticky CTA behavior
window.addEventListener("scroll", function() {
  let btn = document.getElementById("stickyCTA");
  if (window.scrollY > 300) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
});

// Simple reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));
