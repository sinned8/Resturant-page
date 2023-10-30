
import './css/global.css'
import './css/home.css'
import createHome from './sections/home'
import createHeader from './components/header'
document.body.prepend(createHeader())

const content = document.getElementById('content')
const navLi = document.querySelectorAll('.nav-li')

export function renderSection(tab) {
    navLi.forEach((li) => li.classList.remove('active-nav'))

    // if
    // content.appendChild(createHome())
    content.innerHTML = ''
    if (tab == 'Home'){
        content.appendChild(createHome())
        navLi[0].classList.add('active-nav')
    }else if (tab == 'Menu') {
        content.appendChild(createMenu())
        navLi[1].classList.add('active-nav')
    } else if (tab == 'Contact') {
        content.appendChild(createContact())
        navLi[2].classList.add('active-nav')
    }
}

renderSection('Home');
// function component() {
//     const element = document.createElement('div');
 
//    element.innerHTML = 'test'
//    element.classList.add('content');
 
//     return element;
//   }
 
//   document.body.appendChild(component());