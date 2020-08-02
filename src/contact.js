
const renderContact = () => {
    const container = document.createElement("div");
    container.setAttribute('class','contact-container flex jf-cn');

    const contact_div = document.createElement("div"); 
    contact_div.setAttribute('class','contact')

    const contact = document.createElement("h3"); 
    contact.setAttribute('class','title');
    contact.innerHTML = 'CONTACT: '

    const phone_div = document.createElement("div"); 
    phone_div.setAttribute('class','flex');
    
    const phone = document.createElement("p"); 
    phone.setAttribute('class','text');
    phone.innerHTML = 'Phone: '

    const phone_num = document.createElement("p"); 
    phone_num.setAttribute('class','text');
    phone_num.innerHTML = '123-123-1234'

    phone_div.appendChild(phone)
    phone_div.appendChild(phone_num)

    const email_div = document.createElement("div"); 
    email_div.setAttribute('class','flex');
    
    const email_title = document.createElement("p"); 
    email_title.setAttribute('class','text');
    email_title.innerHTML = 'Email: '

    const email = document.createElement("p"); 
    email.setAttribute('class','text');
    email.innerHTML = 'bestpizzza@pizza.com'

    email_div.appendChild(email_title)
    email_div.appendChild(email)

    const first_item = document.createElement("div"); 
    first_item.setAttribute('class','contact-item');

    first_item.appendChild(contact)
    first_item.appendChild(phone_div)
    first_item.appendChild(email_div)



    const location = document.createElement("h3"); 
    location.setAttribute('class','title');
    location.innerHTML = 'LOCATION: '

    const loc_div = document.createElement("div"); 
    // loc_div.setAttribute('class','');
    
    const first_loc = document.createElement("p"); 
    first_loc.setAttribute('class','text');
    first_loc.innerHTML = 'Antarctica 1st main street'

    // const phone_num = document.createElement("p"); 
    // phone_num.setAttribute('class','text');
    // phone_num.innerHTML = '123-123-1234'

    loc_div.appendChild(first_loc)
    // loc_div.appendChild(phone_num)

    // const email_div = document.createElement("div"); 
    // email_div.setAttribute('class','flex');
    
    // const email_title = document.createElement("p"); 
    // email_title.setAttribute('class','text');
    // email_title.innerHTML = 'Email: '

    // const email = document.createElement("p"); 
    // email.setAttribute('class','text');
    // email.innerHTML = 'bestpizzza@pizza.com'

    // email_div.appendChild(email_title)
    // email_div.appendChild(email)

    const second_item = document.createElement("div"); 
    second_item.setAttribute('class','contact-item');

    second_item.appendChild(location)
    second_item.appendChild(loc_div)


    

    const hour = document.createElement("h3"); 
    hour.setAttribute('class','title');
    hour.innerHTML = 'HOURS: '

    const hour_div = document.createElement("div"); 
    // hour_div.setAttribute('class','');
    
    const hours = document.createElement("p"); 
    hours.setAttribute('class','text');
    hours.innerHTML = 'Monday-Sunday: 10pm-12am '

    const options = document.createElement("p"); 
    options.setAttribute('class','text');
    options.innerHTML = 'DINE-IN OR DELIVERY'

    
    hour_div.appendChild(hours)
    hour_div.appendChild(options)


    const third_item = document.createElement("div"); 
    third_item.setAttribute('class','contact-item');

    third_item.appendChild(hour)
    third_item.appendChild(hours)
    third_item.appendChild(hour_div)
    

    contact_div.appendChild(first_item)
    contact_div.appendChild(second_item)
    contact_div.appendChild(third_item)

    container.appendChild(contact_div)
    return container
}

export default renderContact