const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navbar");

menuBtn.addEventListener("change", function () {
  if (menuBtn.checked && window.innerWidth < 600) {
    document.documentElement.style.setProperty("overflow", "hidden");
  } else {
    document.documentElement.style.setProperty("overflow", "scroll");
  }
});

window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("nav-active", windowPosition);
});

const ro = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const cr = entry.contentRect;
    const { width } = cr;
    if (width > 600) {
      document.documentElement.style.removeProperty("overflow");
      menuBtn.checked = false;
    }
  }
});
ro.observe(document.querySelector("html"));
