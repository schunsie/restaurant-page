import "./style.css"
import { renderHome } from "./home"
import { renderMenu } from "./menu"

// Initial render
// renderHome()

// test render
renderMenu();

// Navigation 
const nav = document.querySelector('nav')
nav.addEventListener('click', navHandling);

function navHandling(event) {
    console.log(event.target.id)
}