document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("projects-content");
  if (!target || typeof projectsData === "undefined") return;
  const subtitle = document.querySelector(".page-header .subtitle");
  if (subtitle) subtitle.textContent = projectsData.intro;
  const cards = projectsData.projects.map((project) => `
    <a class="project-card" href="${project.link}">
      <span class="category-pill">${project.category}</span>
      <h3>${project.title}</h3>
      <p class="card-desc">${project.description}</p>
      <div class="card-tags">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </a>`).join("");
  target.innerHTML = `<div class="project-grid">${cards}</div>`;
});
