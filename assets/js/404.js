function toggleTheme() {
  const body = document.body;
  const themeBtn = document.querySelector(".theme-toggle");

  if (body.classList.contains("dark_theme")) {
    body.classList.remove("dark_theme");
    body.classList.add("light_theme");
    themeBtn.textContent = "🌙";
  } else {
    body.classList.remove("light_theme");
    body.classList.add("dark_theme");
    themeBtn.textContent = "🌓";
  }
}

// Add some interactive stars on mouse move
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.97) {
    createTrailStar(e.clientX, e.clientY);
  }
});

function createTrailStar(x, y) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = x + "px";
  star.style.top = y + "px";
  star.style.width = "4px";
  star.style.height = "4px";
  star.style.position = "fixed";
  star.style.pointerEvents = "none";
  star.style.zIndex = "1000";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 2000);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " " || e.key === "escape") {
    document.querySelector(".btn").click();
  }
});
