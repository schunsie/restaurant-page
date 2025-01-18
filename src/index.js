import "./style.css"
import { renderHome } from "./home"
import { renderMenu } from "./menu"
import { renderContact } from "./contact";

// Initialize variables
const content = document.querySelector('.content');
let activePage = 'home';

// Initial render
renderHome()

// Navigation 
const nav = document.querySelector('nav')
nav.addEventListener('click', navHandling);

function navHandling(event) {
    const t = event.target;
    const targetID = t.id;
    console.log(targetID);
    console.log(t);

    switch (targetID) {
        case 'home':
            toggleActive(t);
            clearContent();
            renderHome();
            break;
        case 'menu':
            toggleActive(t);
            clearContent();
            renderMenu();
            break;
        case 'contact':
            toggleActive(t);
            clearContent();
            renderContact();
            break;
        case 'nav-icon':
            toggleResponsiveNav()
            break;
    }
}

function clearContent() {
    content.innerHTML = '';
}

function toggleActive(newActive) {
    const oldActive = nav.querySelector(`#${activePage}`);
    oldActive.classList.toggle('active')

    // Set new active
    newActive.classList.toggle('active');
    activePage = newActive.id;
}

function toggleResponsiveNav() {
    console.log('test');
    const btns = document.querySelectorAll('nav button:not(#icon)');
    btns.forEach(btn => btn.classList.toggle('responsive'));
}