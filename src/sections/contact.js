import contactCss from '../css/contact.css'
import locSvg from '../assests/img/map-marker.svg'
import phoneSvg from '../assests/img/phone.svg'
import mapLocation from '../assests/img/map-location.png'

export default function createContact() {
    const contact = document.createElement('div')
    contact.id = 'contact'

    const heading = document.createElement('h2')
    heading.innerText = 'Contact Us'
    contact.appendChild(heading)

    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-div')
    contact.appendChild(contactDiv)

    const numDiv = document.createElement('div')
    numDiv.classList.add('num-div')
    contactDiv.appendChild(numDiv)

    const phone = document.createElement('img')
    phone.src = phoneSvg
    numDiv.appendChild(phone)
    const phoneNumber = document.createElement('span')
    phoneNumber.innerHTML = "012-345-6789"
    numDiv.appendChild(phoneNumber)


    const locDiv = document.createElement('div')
    locDiv.classList.add('location-div')
    contactDiv.appendChild(locDiv)

    const locIcon = document.createElement('img')
    locIcon.src = locSvg
    locDiv.appendChild(locIcon)

    const location = document.createElement('span')
    location.innerHTML = 'Yehaw Junction, Florida'
    locDiv.appendChild(location)

    const locationImg = document.createElement('img')
    locationImg.id = 'map-location'
    locationImg.src = mapLocation
    contactDiv.appendChild(locationImg)
    return contact;
}