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

navToggle.addEventListener('click', () => {
	const isOpen = siteNav.classList.toggle('open');
	navToggle.setAttribute('aria-expanded', isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		siteNav.classList.remove('open');
		navToggle.setAttribute('aria-expanded', 'false');
	});
});
