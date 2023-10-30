import style from '../css/home.css';
import { renderSection } from '..';


export default function createHome() {
    const home = document.createElement('div');
    home.id = 'home'

    const heading = document.createElement('h1')
    heading.innerText = 'DD\'s Pizza';
    home.appendChild(heading)

    const description = document.createElement('p');
    description.innerText = 'Home of the finest slice in all of South Florida!'
    home.appendChild(description)


    const CTAcontainer = document.createElement('div')
    CTAcontainer.id = 'CTAcontainer'
    

    const menuBttn = document.createElement('button')
    menuBttn.innerText = 'Menu'
    CTAcontainer.appendChild(menuBttn)
    const contactBttn = document.createElement('button')
    contactBttn.innerText = 'Contact Us'
    CTAcontainer.appendChild(contactBttn)

    home.appendChild(CTAcontainer)

    return home;
}