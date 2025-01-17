import "./style.css"
import { renderHome } from "./home"

// Initial render
// renderHome()

// Navigation 
const nav = document.querySelector('nav')
nav.addEventListener('click', navHandling);

function navHandling(event) {
    console.log(event.target.id)
}