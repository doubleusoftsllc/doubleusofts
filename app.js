const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function setTheme(theme) {
  root.dataset.theme = theme;
  try { localStorage.setItem('doubleusofts-theme', theme); } catch {}
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  themeToggle.dataset.tooltip = theme === 'dark' ? 'Light theme' : 'Dark theme';
  document.getElementById('themeIcon').innerHTML = theme === 'dark' ? '<path d="M216 152a72 72 0 1 1-72-72a56 56 0 1 0 72 72Z"/>' : '<circle cx="128" cy="128" r="48"/><path d="M120 16h16v32h-16zm0 192h16v32h-16zM16 120h32v16H16zm192 0h32v16h-32zM43 55l12-12 23 23-12 12zm135 135 12-12 23 23-12 12zM43 201l23-23 12 12-23 23zM178 66l23-23 12 12-23 23z"/>';
}
let saved; try { saved = localStorage.getItem('doubleusofts-theme'); } catch {}
setTheme(saved === 'light' ? 'light' : 'dark');
themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
document.querySelectorAll('.reveal').forEach(el => {
  el.textContent = '';
  [...el.dataset.reveal].forEach((ch,i) => {
    const span = document.createElement('span'); span.textContent = ch === ' ' ? '\u00a0' : ch; span.style.animationDelay = `${i * 35}ms`; el.appendChild(span);
  });
});
const services = [["Your business, beautifully online.", "Web Development", "Responsive business websites and landing pages designed around your audience, content, and goals.", ["Responsive layouts", "Accessible, clear navigation", "Search-friendly structure", "Performance and launch support"]], ["Built around the way you work.", "Custom Software", "Purpose-built software that helps your team manage work, organize information, and simplify daily operations.", ["Business dashboards", "Customer and team portals", "Workflow tools", "API integrations"]], ["From browse to checkout.", "E-commerce Stores", "Online stores with clear product pages, intuitive shopping experiences, and integrations suited to your business.", ["Store setup and customization", "Product and category pages", "Checkout integration", "Mobile shopping experience"]], ["Useful intelligence, integrated.", "AI & Automation", "AI features and connected workflows that reduce repetitive tasks and help people find the answers they need.", ["AI-assisted customer experiences", "Business workflow automation", "Knowledge and content tools", "Integration with existing systems"]], ["Clear interfaces. Better experiences.", "UI/UX Design", "Practical interface design that makes your product easier to understand, navigate, and use.", ["User flows", "Wireframes and prototypes", "Responsive interface design", "Design-to-development handoff"]], ["Keep your digital business moving.", "Maintenance & Support", "Ongoing website and software improvements to keep your digital products useful as your business evolves.", ["Content and feature updates", "Bug fixes", "Performance improvements", "Technical support"]]];
const cards = [...document.querySelectorAll('[data-service]')];
const toggle = document.getElementById('toggleProjects');
function setExpanded(expanded) {
  cards.forEach((card,i) => { card.hidden = !expanded && i >= 4; });
  toggle.setAttribute('aria-expanded', String(expanded));
  document.getElementById('toggleProjectsText').textContent = expanded ? 'Show less' : 'Show more';
  toggle.querySelector('svg').style.transform = expanded ? 'rotate(180deg)' : '';
}
setExpanded(false);
toggle.addEventListener('click', () => setExpanded(toggle.getAttribute('aria-expanded') !== 'true'));
const dialog = document.getElementById('serviceDialog');
cards.forEach(card => card.addEventListener('click', () => {
  const service = services[Number(card.dataset.service)];
  document.getElementById('serviceTitle').textContent = service[1];
  document.getElementById('serviceDescription').textContent = service[2];
  const list = document.getElementById('serviceFeatures'); list.replaceChildren();
  service[3].forEach(feature => { const li=document.createElement('li');li.textContent=feature;list.appendChild(li); });
  dialog.showModal();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if(e.target === dialog) { const r=dialog.getBoundingClientRect(); if(e.clientX<r.left || e.clientX>r.right || e.clientY<r.top || e.clientY>r.bottom) dialog.close(); } });
document.getElementById('discussService').addEventListener('click', () => dialog.close());
document.getElementById('year').textContent = new Date().getFullYear();
