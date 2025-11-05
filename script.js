// Typing animation
(function(){
  const phrases = [
    "MCA Student",
    "Aspiring Software Developer",
    "AI & Data Enthusiast",
    "Problem Solver"
  ];
  const el = document.getElementById("typed");
  const cursor = document.querySelector(".cursor");
  let p = 0, c = 0, forward = true;

  function type() {
    const current = phrases[p];
    if(forward){
      c++;
      if(c > current.length){ forward = false; setTimeout(type, 900); return; }
    } else {
      c--;
      if(c < 0){ forward = true; p = (p+1)%phrases.length; }
    }
    el.textContent = current.slice(0, c);
    cursor.style.opacity = (Math.floor(Date.now()/400)%2) ? "1":"0";
    setTimeout(type, forward?60:30);
  }
  if(el) type();
})();

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});

