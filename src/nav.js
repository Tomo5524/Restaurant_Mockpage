// can return nav? and will it be usable in index.js?

// npm run build did not work cuz there was no build webpack in json package
// npm ERR! missing script: build
//error: update_ref failed for ref 'refs/remotes/origin/master': cannot lock ref 'refs/remotes/origin/master': unable to resolve reference 'refs/remotes/origin/master': reference broken


// create nav

const renderNav = () => {
    console.log('Hiya RendNav')

    // const nav = document.createElement("div");
    // nav.setAttribute('class','nav')

    const ul = document.createElement("ul");
    ul.setAttribute('class','ulist flex al-items')

    const li_logo = document.createElement("li");
    li_logo.setAttribute('class','li-item logo')
    const logo_ref = document.createElement("img");
    logo_ref.setAttribute('src', './images/attachment_71444173.png')
    logo_ref.setAttribute('class','logo-img')
    li_logo.appendChild(logo_ref)

    const right_div = document.createElement("div");
    right_div.setAttribute('class','right-div flex fl-ed')
    

    const li_home = document.createElement("li");
    li_home.setAttribute('class','li-item')
    const home_ref = document.createElement("a");
    home_ref.setAttribute('class','ref')
    // how to add text to a ref.
    home_ref.textContent = "Home"
    // home_ref.addEventListener('click', (e) => {
    //     console.log(e)
    // })
    li_home.appendChild(home_ref)


    const li_menu = document.createElement("li");
    li_menu.setAttribute('class','li-item')
    const menu_ref = document.createElement("a");
    menu_ref.setAttribute('class','ref')
    menu_ref.textContent = "Menu"
    li_menu.appendChild(menu_ref)
    

    // const li_about = document.createElement("li");
    // li_about.setAttribute('class','li-item')
    // const about_ref = document.createElement("a");
    // about_ref.setAttribute('class','ref')
    // about_ref.textContent = "About"
    // li_about.appendChild(about_ref)

    const li_contact = document.createElement("li");
    li_contact.setAttribute('class','li-item')
    const contact_ref = document.createElement("a");
    contact_ref.setAttribute('class','ref')
    contact_ref.textContent = "Contact"
    li_contact.appendChild(contact_ref)

    right_div.appendChild(li_home)
    right_div.appendChild(li_menu)
    // right_div.appendChild(li_about)
    right_div.appendChild(li_contact)


    ul.appendChild(li_logo)
    ul.appendChild(right_div)
    // ul.appendChild(li_home)
    // ul.appendChild(li_menu)
    // ul.appendChild(li_about)
    // ul.appendChild(li_contact)

    // nav.appendChild(ul)

    // can return nav? and will it be usable in index.js?
    return ul


};


export default renderNav


