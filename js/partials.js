const HEADER_HTML = `
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo">Pranav Aryasomayajula</a>
    <nav class="site-nav">
      <a href="index.html">About</a>
      <a href="cv.html">CV</a>
      <a href="projects.html">Projects</a>
      <button id="theme-toggle" aria-label="Switch theme"></button>
    </nav>
  </div>
</header>`;

const FOOTER_HTML = "";

function init() {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.outerHTML = HEADER_HTML;
  if (footer) footer.outerHTML = FOOTER_HTML;
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.setAttribute("aria-current", "page");
    }
  });
}

init();
