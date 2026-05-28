function setTheme(theme) {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  if (theme === "dark") root.setAttribute("data-theme", "dark");
  else root.removeAttribute("data-theme");
  if (button) {
    button.textContent = theme === "dark" ? "Light" : "Dark";
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }
  localStorage.setItem("theme", theme);
}

function initThemeToggle() {
  const stored = localStorage.getItem("theme");
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = stored || (prefersDark ? "dark" : "light");
  setTheme(theme);
  const button = document.getElementById("theme-toggle");
  if (!button) return setTimeout(initThemeToggle, 0);
  button.addEventListener("click", () => {
    theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(theme);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  setTimeout(initThemeToggle, 0);
}
