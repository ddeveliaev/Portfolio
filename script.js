const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

// Menú móvil
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// Tema claro / oscuro
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "☀" : "☾";
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Aviso para los enlaces todavía no personalizados
document.getElementById("linkedinLink").addEventListener("click", (event) => {
  if (event.currentTarget.getAttribute("href") === "#") {
    event.preventDefault();
    alert("Añade aquí tu enlace de LinkedIn.");
  }
});

document.getElementById("githubLink").addEventListener("click", (event) => {
  if (event.currentTarget.getAttribute("href") === "#") {
    event.preventDefault();
    alert("Añade aquí tu enlace de GitHub.");
  }
});
