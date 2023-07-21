export const callNav = (event, styles) => {
    const nav = event.currentTarget;
    nav.classList.toggle(styles.active);
    nav.previousSibling.classList.toggle(styles.list);
    document.body.classList.toggle(styles.overflow);

    const navWrapper = document.querySelector('nav').parentElement;

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
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
};

function removeClasses(nav, styles){
    nav.classList.remove(styles.active);
    nav.previousSibling.classList.remove(styles.list);
    document.body.classList.remove(styles.overflow);
}

export default callNav;
