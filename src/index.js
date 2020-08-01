// workflow
// -> how to add nav to each page?

import renderNav from "./nav.js"
import renderFooter from "./footer.js"
import renderHome from "./home.js"
import renderMenu from "./menu.js" 
// import renderAbout from "./about.js" //change bg
// import renderContact from "./contact.js" //change bg

const content = document.getElementById("content");

const nav = document.createElement("div")
nav.setAttribute('class','nav')

const ul_div = renderNav();
nav.appendChild(ul_div)
console.log()

// when itme other than home is clicked, get rid of bg
// now working 
// ul_div.forEach(node => console.log(node))

const footer_div = renderFooter()

content.appendChild(nav)
content.appendChild(footer_div)


// page defaults to home 
const home = renderHome();
content.appendChild(home)
// console.log(home)

const nav_items = document.querySelectorAll(".li-item");

nav_items.forEach(item => item.addEventListener('click', e => {
    console.log(e)
}));






