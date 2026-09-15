document.getElementById('year').textContent = new Date().getFullYear();

const siteHeader = document.querySelector('.site_header');
window.addEventListener('scroll', () => {
	siteHeader.classList.toggle('scrolled', window.scrollY > 8);
});

const revealObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in_view');
				revealObserver.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const navToggle = document.getElementById('nav_toggle');
const siteNav = document.getElementById('site_nav');
const navToggleIcon = navToggle.querySelector('i');

function setNavOpen(isOpen) {
	siteNav.classList.toggle('open', isOpen);
	navToggle.setAttribute('aria-expanded', isOpen);
	navToggleIcon.classList.toggle('fa-bars', !isOpen);
	navToggleIcon.classList.toggle('fa-xmark', isOpen);
}

navToggle.addEventListener('click', () => {
	setNavOpen(!siteNav.classList.contains('open'));
});

siteNav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => setNavOpen(false));
});
