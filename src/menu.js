import pepperoniImage from "./media/images/pepperoni.png";
import hawaiianImage from "./media/images/hawaiian.png";
import margheritaImage from "./media/images/margherita.png";
import bbqChickenImage from "./media/images/bbqchicken.png";
import meatLoversImage from "./media/images/meatlovers.png";

{/* 
<ul class="menu-list">
    <li class="menu-item">
        <img src="media/icons/pepperoni.png" alt="pepperoni">
        <div>
            <h3>Pepperoni pizza</h3>
            <p>Our classic pizza with tomato sauce, mozzarella cheese, and spicy pepperoni.</p>
        </div>
        <p class="price">$13.50</p>
    </li>
    <li class="menu-item">
        <img src="media/icons/margherita.png" alt="margherita">
        <div>
            <h3>Margherita pizza</h3>
            <p>The original Italian pizza with a simple but flavorful combination of tomato sauce, mozzarella cheese, and fresh basil.</p>
        </div>
        <p class="price">$15.50</p>
    </li>
    <li class="menu-item">
        <img src="media/icons/hawaiian.png" alt="hawaiian">
        <div>
            <h3>Hawaiian pizza</h3>
            <p>A controversial choice for some, but undeniably popular. This pizza features tomato sauce, mozzarella cheese, ham, and pineapple.</p>
        </div>
        <p class="price">$50.99</p>
    </li>
    <li class="menu-item">
        <img src="media/icons/bbqchicken.png" alt="bbqchicken">
        <div>
            <h3>BBQ chicken pizza</h3>
            <p>This pizza offers a twist with barbecue sauce, mozzarella cheese, grilled chicken, and often red onions and cilantro.</p>
        </div>
        <p class="price">$18.50</p>
    </li>
    <li class="menu-item">
        <img src="media/icons/meatlovers.png" alt="meatlovers">
        <div>
            <h3>Meat lover's pizza</h3>
            <p>This pizza is a carnivore's dream, topped with a variety of meats like pepperoni, sausage, bacon, ham, and ground beef.</p>
        </div>
        <p class="price">$20,-</p>
    </li>
</ul> 
*/}

function renderMenu() {
    const content = document.querySelector('.content');

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    for (const pizza of menu) {
        const menuItem = document.createElement('li');
        menuItem.classList.add('menu-item');

        // Create menu item image
        const img = document.createElement('img');
        img.src = pizza.img;
        img.alt = pizza.name;

        // Create menu text
        const text = document.createElement('div');
        const pizzaName = document.createElement('h3');
        pizzaName.textContent = `${pizza.name} pizza`;
        const pizzaDesc = document.createElement('p');
        pizzaDesc.textContent = pizza.desc;
        text.appendChild(pizzaName);
        text.appendChild(pizzaDesc);

        // Create price tag
        const priceTag = document.createElement('p');
        priceTag.classList.add('price');
        priceTag.textContent = `$${pizza.price}`;

        // Append elements to list item
        menuItem.appendChild(img);
        menuItem.appendChild(text);
        menuItem.appendChild(priceTag);

        // Append list item to list
        menuList.appendChild(menuItem);
    }

    // append list to content
    content.appendChild(menuList);
}

const menu = [
    {
        name : 'Pepperoni',
        img : pepperoniImage,
        desc : 'Our classic pizza with tomato sauce, mozzarella cheese, and spicy pepperoni.',
        price: '13.50'
    },
    {
        name : 'Margherita',
        img : margheritaImage,
        desc : 'The original Italian pizza with a simple but flavorful combination of tomato sauce, mozzarella cheese, and fresh basil.',
        price: '15.50'
    },
    {
        name : 'Hawaiian',
        img : hawaiianImage,
        desc : 'A controversial choice for some, but undeniably popular. This pizza features tomato sauce, mozzarella cheese, ham, and pineapple.',
        price: '50.99'
    },
    {
        name : 'BBQ chicken',
        img : bbqChickenImage,
        desc : 'This pizza offers a twist with barbecue sauce, mozzarella cheese, grilled chicken, and often red onions and cilantro.',
        price: '18.50'
    },
    {
        name : 'Meat lover\'s',
        img : meatLoversImage,
        desc : 'This pizza is a carnivore\'s dream, topped with a variety of meats like pepperoni, sausage, bacon, ham, and ground beef.',
        price: '20,-'
    },
];

export { renderMenu };