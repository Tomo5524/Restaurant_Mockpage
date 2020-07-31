// workflow
// -> how to add nav to each page?

import renderNav from "./nav.js"
// import renderHome from "./home.js"
// import renderMenu from "./menu.js"
// import renderAbout from "./about.js"
// import renderContact from "./contact.js"

const content = document.getElementById("content");

const nav = document.createElement("div")
nav.setAttribute('class','nav')
content.appendChild(nav)

const ul_div = renderNav();
console.log(ul_div)


nav.appendChild(ul_div)




