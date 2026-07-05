const data = window.PORTFOLIO_DATA;
const main = document.querySelector("#main");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector(".mobile-nav");

const icons = {
  arrow: `<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9"/></svg>`,
  mail: `<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="2"/><path d="m3.5 6 6.5 5 6.5-5"/></svg>`,
};

const timelineIcons = {
  bookCoffee: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5c3-1.4 6-1.2 9 .7v12c-3-1.9-6-2.1-9-.7zM12 7.2c2.7-1.7 5.4-2 8.1-1v8.1M16.4 14.4h4.1v1.8a2.6 2.6 0 0 1-2.6 2.6h-3.7a2.6 2.6 0 0 1-2.2-1.2"/></svg>`,
  cap: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2.5 9 9.5-5 9.5 5-9.5 5zM6 11.2v5.1c3.7 2.4 8.3 2.4 12 0v-5.1M21.5 9v6"/></svg>`,
  community: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.3" r="3"/><circle cx="5.2" cy="10.2" r="2.2"/><circle cx="18.8" cy="10.2" r="2.2"/><path d="M6.8 20v-2.2a5.2 5.2 0 0 1 10.4 0V20M1.8 19v-1.4a3.5 3.5 0 0 1 3.5-3.5M22.2 19v-1.4a3.5 3.5 0 0 0-3.5-3.5"/></svg>`,
  compass: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 20h18M5 16l4-4 3 2 6-7 2 2"/><path d="M17 7h3v3"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12.5c5.8 2.7 12.2 2.7 18 0M10 13.5h4"/></svg>`,
  network: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="4.5" r="2.3"/><circle cx="5" cy="17.5" r="2.3"/><circle cx="19" cy="17.5" r="2.3"/><path d="m10.9 6.5-4.8 8.9M13.1 6.5l4.8 8.9M7.3 17.5h9.4"/></svg>`,
};

function experienceTemplate() {
  return `
    <article class="page page--experience">
      <section class="hero section-shell reveal">
        <div class="section-kicker"><span></span>Experience</div>
        <div class="hero__grid">
          <div class="hero__copy">
            <p class="overline">Personal statement</p>
            <h1>I make complexity<br><em>useful.</em></h1>
            <p class="hero__statement">${data.profile.statement}</p>
            <p class="draft-note">${data.profile.statementNote}</p>
            <a class="text-link" href="#contact">Start a conversation ${icons.arrow}</a>
          </div>
          <div class="portrait-wrap" aria-label="Portrait placeholder for Ares Wei">
            <div class="portrait">
              <span>${data.profile.initials}</span>
              <div class="portrait__glow"></div>
            </div>
            <p><i></i>${data.profile.availability}</p>
          </div>
        </div>
      </section>

      <section class="skills section-shell reveal">
        <div class="section-heading">
          <div><p class="overline">Competencies</p><h2>Skills / <em>Proficiencies</em></h2></div>
          <p>Click a discipline to see the specific ways I work.</p>
        </div>
        <div class="skill-tabs" role="tablist" aria-label="Skills">
          ${data.skills.map((skill, index) => `<button role="tab" aria-selected="${index === 0}" aria-controls="skill-panel" data-skill="${skill.id}">${skill.label}</button>`).join("")}
        </div>
        <div class="skill-panel" id="skill-panel" role="tabpanel"></div>
      </section>

      <section class="timeline-section section-shell reveal">
        <div class="section-heading section-heading--timeline">
          <div><p class="overline">2020 — 2026</p><h2>A timeline of<br><em>becoming.</em></h2></div>
          <p>Experience is more than a list of roles. This is the thread connecting what I learned, how I grew and where I am heading.</p>
        </div>
        <article class="education-card">
          <div class="education-card__icon">${timelineIcons.cap}</div>
          <div>
            <p class="overline">Education · ${data.education.period}</p>
            <h3>${data.education.school}</h3>
            <p>${data.education.degree} · <strong>${data.education.focus}</strong></p>
          </div>
          <span>${data.education.honors}</span>
        </article>
        <div class="timeline">
          ${data.timeline.map(item => `
            <article class="timeline-item ${item.current ? "is-current" : ""} ${item.ongoing ? "is-ongoing" : ""}">
              <div class="timeline-year"><strong>${item.year}</strong><span>${item.theme}</span></div>
              <div class="timeline-marker"><span>${timelineIcons[item.icon]}</span></div>
              <div class="timeline-content">
                <div class="timeline-content__head">
                  <p class="overline">${item.theme}</p>
                  ${item.current ? `<span class="current-label"><i></i>Current</span>` : ""}
                </div>
                <div class="timeline-entries">
                  ${item.entries.map(entry => `
                    <article class="timeline-entry">
                      <div class="timeline-entry__title">
                        <h3>${entry.role}</h3>
                        <p>${entry.organization}${entry.location ? ` · ${entry.location}` : ""}</p>
                      </div>
                      <p class="timeline-entry__impact">${entry.impact}</p>
                    </article>`).join("")}
                </div>
                ${item.milestone ? `<div class="timeline-milestone"><span>◆</span><div><small>Credential milestone</small><strong>${item.milestone}</strong></div></div>` : ""}
                ${item.ongoing ? `<div class="ongoing-link"><span></span>Ongoing at U.S. Bank</div>` : ""}
              </div>
            </article>`).join("")}
        </div>
      </section>

      <section class="strengths section-shell reveal">
        <div class="section-heading">
          <div><p class="overline">How I show up</p><h2>Work style / <em>Strengths</em></h2></div>
          <p>The habits behind the output.</p>
        </div>
        <div class="strength-grid">
          ${data.strengths.map(item => `<article class="strength-card"><span>${item.number}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}
        </div>
      </section>

      ${contactBandTemplate()}
    </article>`;
}

function projectsTemplate() {
  return `
    <article class="page page--projects">
      <section class="page-intro section-shell reveal">
        <div class="section-kicker"><span></span>Selected work</div>
        <p class="overline">Projects / Portfolio</p>
        <h1>Proof, not just<br><em>potential.</em></h1>
        <p>Selected work across finance, AI, analytics and business systems. Each case is built to show the question, the thinking and the value created.</p>
      </section>
      <section class="project-list section-shell reveal">
        ${data.projects.map(project => `
          <article class="project-card">
            <div class="project-card__number">${project.number}</div>
            <div class="project-card__body">
              <p class="overline">${project.category}</p>
              <h2>${project.title}</h2>
              <p>${project.summary}</p>
              <div class="tag-list">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
            </div>
            <div class="project-card__action"><span>${project.result}</span>${icons.arrow}</div>
          </article>`).join("")}
      </section>
      ${contactBandTemplate("Have a project in mind?", "Let’s compare notes.")}
    </article>`;
}

function hobbiesTemplate() {
  return `
    <article class="page page--hobbies">
      <section class="page-intro section-shell reveal">
        <div class="section-kicker"><span></span>Outside the résumé</div>
        <p class="overline">Hobbies / Curiosities</p>
        <h1>The things that keep<br><em>me curious.</em></h1>
        <p>Good work comes from a life with range. These are a few of the interests that shape how I notice, think and connect.</p>
      </section>
      <section class="hobby-grid section-shell reveal">
        ${data.hobbies.map((hobby, index) => `<article class="hobby-card"><span class="hobby-card__icon">${hobby.icon}</span><span class="hobby-card__number">0${index + 1}</span><h2>${hobby.title}</h2><p>${hobby.text}</p></article>`).join("")}
      </section>
      <section class="quote-band section-shell reveal">
        <p>“I like people who get excited about ideas — and still care whether those ideas work.”</p>
        <span>— A principle I try to keep</span>
      </section>
      ${contactBandTemplate("Found a shared interest?", "Say hello.")}
    </article>`;
}

function contactTemplate() {
  return `
    <article class="page page--contact">
      <section class="contact-hero section-shell reveal">
        <div class="section-kicker"><span></span>Contact</div>
        <div class="contact-hero__grid">
          <div>
            <p class="overline">A good conversation can start anywhere</p>
            <h1>Let’s make the next<br><em>idea real.</em></h1>
          </div>
          <div class="contact-hero__copy">
            <p>I’m always glad to meet thoughtful people working on interesting questions — whether that means a role, a project or simply comparing notes.</p>
            <p class="location"><i></i>${data.contact.location}</p>
          </div>
        </div>
      </section>
      <section class="contact-links section-shell reveal">
        <a href="mailto:${data.contact.email}"><span>Email</span><strong>${data.contact.email}</strong>${icons.arrow}</a>
        <a href="${data.contact.linkedin}" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect professionally</strong>${icons.arrow}</a>
        <a href="${data.contact.github}" target="_blank" rel="noreferrer"><span>GitHub</span><strong>Explore the code</strong>${icons.arrow}</a>
      </section>
      <section class="contact-note section-shell reveal">
        <p class="overline">A small note</p>
        <p>This demo uses placeholder contact details. Update the <code>contact</code> object in <code>data.js</code> before publishing.</p>
      </section>
    </article>`;
}

function contactBandTemplate(kicker = "Open to the right conversation", title = "Let’s build what’s next.") {
  return `<section class="contact-band section-shell reveal"><div><p class="overline">${kicker}</p><h2>${title}</h2></div><a class="round-link" href="#contact" aria-label="Go to contact page">${icons.arrow}</a></section>`;
}

const templates = { experience: experienceTemplate, projects: projectsTemplate, hobbies: hobbiesTemplate, contact: contactTemplate };

function setSkill(skillId) {
  const skill = data.skills.find(item => item.id === skillId) || data.skills[0];
  const panel = document.querySelector(".skill-panel");
  if (!panel) return;
  panel.innerHTML = `
    <div class="skill-panel__intro"><p class="overline">${skill.eyebrow}</p><h3>${skill.label}</h3><p>${skill.description}</p></div>
    <ul>${skill.items.map((item, index) => `<li><span>0${index + 1}</span>${item}</li>`).join("")}</ul>`;
  document.querySelectorAll("[data-skill]").forEach(button => {
    const active = button.dataset.skill === skill.id;
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
  });
}

function bindPageEvents() {
  document.querySelectorAll("[data-skill]").forEach(button => {
    button.addEventListener("click", () => setSkill(button.dataset.skill));
    button.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      const tabs = [...document.querySelectorAll("[data-skill]")];
      const next = (tabs.indexOf(button) + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].focus();
      setSkill(tabs[next].dataset.skill);
    });
  });
  setSkill("finance");
  window.requestAnimationFrame(() => document.querySelectorAll(".reveal").forEach((el, index) => setTimeout(() => el.classList.add("is-visible"), index * 70)));
}

function closeMenu() {
  menuButton.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("is-open");
  mobileNav.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

function render() {
  const route = location.hash.slice(1) || "experience";
  const activeRoute = templates[route] ? route : "experience";
  main.innerHTML = templates[activeRoute]();
  document.querySelectorAll("[data-route-link]").forEach(link => link.classList.toggle("is-active", link.dataset.routeLink === activeRoute));
  document.title = `${activeRoute[0].toUpperCase() + activeRoute.slice(1)} — Ares Wei`;
  closeMenu();
  window.scrollTo({ top: 0, behavior: "instant" });
  bindPageEvents();
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  mobileNav.classList.toggle("is-open", isOpen);
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});

window.addEventListener("hashchange", render);
document.querySelector("#year").textContent = new Date().getFullYear();
render();
