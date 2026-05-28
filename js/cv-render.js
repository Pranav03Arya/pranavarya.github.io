document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("cv-content");
  if (!target || typeof cvData === "undefined") return;
  const subtitle = document.querySelector(".page-header .subtitle");
  if (subtitle) subtitle.textContent = cvData.intro;
  const timeline = (items) => `
    <div class="timeline">${items.map((item) => `
      <article class="timeline-entry">
        <div class="entry-date">${item.date}${item.location ? `<span class="entry-location">${item.location}</span>` : ""}</div>
        <div class="entry-rail"><span class="entry-dot"></span></div>
        <div class="entry-content">
          <h3>${item.title}</h3>
          <a class="entry-org" href="${item.orgLink}">${item.org}</a>
          <p>${item.description}</p>
        </div>
      </article>`).join("")}</div>`;
  const skills = Array.isArray(cvData.skills) ? {
    Languages: cvData.skills.slice(0, 3),
    "ML / Data": cvData.skills.slice(3, 6),
    "Web / Backend": cvData.skills.slice(6, 10),
    Infrastructure: cvData.skills.slice(10)
  } : cvData.skills;
  const skillGrid = Object.keys(skills).map((name) => `
    <div class="skill-category">
      <h3>${name}</h3>
      <p class="skill-list">${skills[name].join(", ")}</p>
    </div>`).join("");
  target.innerHTML = `
    <p class="cv-intro">${cvData.intro}</p>
    <section class="cv-section"><h2>Talk to Me, Goose!</h2><p class="cv-intro">Name: Pranav Aryasomayajula<br>Gmail: <a href="mailto:pranav03arya@gmail.com">pranav03arya@gmail.com</a><br>LinkedIn: <a href="https://linkedin.com/in/pranav-aryasomayajula">linkedin.com/in/pranav-aryasomayajula</a><br>GitHub: <a href="https://github.com/Pranav03Arya">github.com/Pranav03Arya</a><br>Location: Fairfax, VA</p></section>
    <section class="cv-section">
      <h2>Education</h2>
      ${timeline(cvData.education)}
    </section>
    <section class="cv-section skills-section">
      <h2>Skills</h2>
      <div class="skills-grid">${skillGrid}</div>
    </section>
    <section class="cv-section">
      <h2>Experience</h2>
      ${timeline(cvData.experience)}
    </section>
    <section class="cv-section">
      <h2>Leadership / Extracurricular</h2>
      ${timeline(cvData.leadership)}
    </section>
    `;
});
