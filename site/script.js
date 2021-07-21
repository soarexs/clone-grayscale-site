const nav = document.getElementById('nav')
const menu = document.getElementById('menu')
const links = document.getElementById('links')


const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 200,
});

const navItems = [
    {
        section: document.getElementById('tablet'),
        toActive: document.getElementById('about-header'),
        class: 'a--active'
    },
    {
        section: document.getElementById('container-father'),
        toActive: document.getElementById('projects-header'),
        class: 'a--active',
        additionalPixels: 100
    },
    {
        section: document.getElementById('container-subscribe'),
        toActive: document.getElementById('contact-header'),
        class: 'a--active'
    }
]

const updateNavItems = activateItemsOnScroll(navItems)

window.onscroll = () => {
    const currentScrollPosition = document.documentElement.scrollTop

    if (currentScrollPosition >= 400) {
        nav.classList.add('header--active')
        updateNavItems()
    } else {
        nav.classList.remove('header--active')
    }
}

menu.addEventListener("click", () =>{
           links.classList.add('visible-links')
   })