{/* 
<div class="hero">
    <div class="hero-text">
        <h1>Doughn't worry, be happy</h1>
        <p>Savor the taste of Italy in a circle, sliced into triangles, and delivered in a square box</p>
        <button>Order Now</button>
    </div>
    <img src="./media/images/pizza.png" alt="pizza">
</div> 
*/}
import pizzaImage from "./media/images/pizza.png";

function renderHome() {

    const content = document.querySelector('.content');
    
    const hero = document.createElement('div');
    hero.classList.add('hero');
    
    // Hero text
    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');
    const heroH1 = document.createElement('h1');
    heroH1.textContent = "Doughn't worry, be happy"
    const heroP = document.createElement('p');
    heroP.textContent = 'Savor the taste of Italy in a circle, sliced into triangles, and delivered in a square box';
    const heroBtn = document.createElement('button');
    heroBtn.textContent = 'Order Now';
    heroText.appendChild(heroH1);
    heroText.appendChild(heroP);
    heroText.appendChild(heroBtn);
    
    // Image
    const img = document.createElement('img');
    img.src = pizzaImage;
    img.alt = 'Pizza';
    
    hero.appendChild(heroText);
    hero.appendChild(img);

    content.appendChild(hero);
}

export { renderHome };
