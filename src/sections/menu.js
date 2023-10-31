import menuCss from '../css/menu.css'
import cheeseImg from '../assests/img/cheese.jpg'
import pepImg from '../assests/img/pepperoni.jpg'
import calImg from '../assests/img/calzone.jpg'
import margImg from '../assests/img/margarita.jpg'
import vegImg from '../assests/img/veggie.jpg'

const menuItems = [
    {
        name: 'Cheese',
        description:
        'The classic cheese pizza.',
        price:'3',
        url: cheeseImg
    },
    {
        name: 'Pepperoni',
        description:
        'Our classic cheese, with some pepperoni on top. Cant go wrong with this one',
        price:'4',
        url: pepImg
    },
    {
        name: 'Margarita',
        description:
        'Flat bread dough, red and slightly acidic tomato base, fresh white mozzarella, and green basil',
        price:'3.50',
        url: margImg
    },
    {
        name: 'Veggie',
        description:
        'For the veggie lovers. Topped with an array of fresh veggies.',
        price:'3',
        url: vegImg
    },
    {
        name: 'Calzone',
        description:
        'Using our wonderful dough, the Calzone is filled with 2 cheeses and 2 meats of your choosing',
        price:'12',
        url: calImg
    },
];


export default function createMenu() {
    const menu = document.createElement('div')
    menu.id = 'menu'

    const heading = document.createElement('h2')
    heading.innerText ='Menu'
    menu.appendChild(heading)


    const menuItemsDiv = document.createElement('div')
    menuItemsDiv.classList.add('menu-items')
    menu.appendChild(menuItemsDiv)


    for (let item of menuItems) {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('item-div')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('img-div')
        const img = document.createElement('img')
        img.src = item.url
        imgDiv.appendChild(img)
        itemDiv.appendChild(imgDiv)

        const textDiv = document.createElement('div')
        textDiv.classList.add('text-div')
        itemDiv.appendChild(textDiv)

        const h3 = document.createElement('h3')
        h3.innerHTML = item.name
        textDiv.appendChild(h3)

        const para = document.createElement('p')
        para.innerHTML = item.description
        textDiv.appendChild(para)

        const priceDiv = document.createElement('div')
        priceDiv.innerHTML = '$' + item.price
        textDiv.appendChild(priceDiv)
        menuItemsDiv.appendChild(itemDiv)
    }
    return menu;
}