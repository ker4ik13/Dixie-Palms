function removeClasses(nav: any, styles: any) {
	nav.classList.remove(styles.active);
	nav.previousSibling.classList.remove(styles.list);
	document.body.classList.remove(styles.overflow);
}

export function callNav(event: any, styles: any) {
	const nav = event.currentTarget;

	nav.classList.toggle(styles.active);
	nav.previousSibling.classList.toggle(styles.list);
	document.body.classList.toggle(styles.overflow);

	const navWrapper = nav.parentElement;

	const navLinks = document.querySelectorAll('nav a');

	navLinks.forEach((link) => {
		link.addEventListener('click', () => {
			removeClasses(nav, styles);
		});
	});

	document.addEventListener('click', (event) => {
		const withinBoundaries = event.composedPath().includes(navWrapper);

		if (!withinBoundaries) {
			removeClasses(nav, styles);
		}
	});
}

export default callNav;
