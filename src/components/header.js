import { renderSection } from "..";

export default function createHeader(){
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const navTabs = ['Home', 'Menu', 'Contact'];
    const ul = document.createElement('ul');

    for (let tab of navTabs) {
        const li = document.createElement('li')
        li.id - tab.toLowerCase() + '-tab'
        li.classList.add('nav-li')
        li.innerText = tab
        ul.appendChild(li)
        li.addEventListener('click', () => {
            renderSection(tab)
        })
    }
    nav.appendChild(ul)
    header.appendChild(nav)
    return header;
}