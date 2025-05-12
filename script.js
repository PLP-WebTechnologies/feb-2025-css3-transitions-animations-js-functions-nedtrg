// Load theme from localStorage
window.onload = function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Toggle theme and store preference
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const newTheme = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  localStorage.setItem("theme", newTheme);
});

// Trigger animation on box
const box = document.getElementById("animatedBox");
box.addEventListener("click", () => {
  box.classList.add("animate");

  // Remove class after animation completes
  setTimeout(() => {
    box.classList.remove("animate");
  }, 600);
});
