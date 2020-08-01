

const renderMenu = () => {

    const container = document.createElement("div");
    container.setAttribute('class','menu-container');

    const menu = document.createElement("div"); 
    menu.setAttribute('class','menu')

    const Cheese_Pizza = document.createElement("h3"); 
    Cheese_Pizza.setAttribute('class','menu-name');
    Cheese_Pizza.innerHTML = 'Cheese Pizza'

    const price_one = document.createElement("p"); 
    price_one.setAttribute('class','menu-price');
    price_one.innerHTML = '11$'

    const first_item = document.createElement("div"); 
    first_item.setAttribute('class','menu-item flex sp-between');

    first_item.appendChild(Cheese_Pizza)
    first_item.appendChild(price_one)

    const Meat_Pizza = document.createElement("h3"); 
    Meat_Pizza.setAttribute('class','menu-name');
    Meat_Pizza.innerHTML = 'Meat Pizza'

    const price_second = document.createElement("p"); 
    price_second.setAttribute('class','menu-price');
    price_second.innerHTML = '11$'

    const second_item = document.createElement("div"); 
    second_item.setAttribute('class','menu-item flex sp-between');

    second_item.appendChild(Meat_Pizza)
    second_item.appendChild(price_second)

    const Margherita_Pizza = document.createElement("h3"); 
    Margherita_Pizza.setAttribute('class','menu-name');
    Margherita_Pizza.innerHTML = 'Margherita Pizza'

    const price_third = document.createElement("p"); 
    price_third.setAttribute('class','menu-price');
    price_third.innerHTML = '11$'

    const third_item = document.createElement("div"); 
    third_item.setAttribute('class','menu-item flex sp-between');

    third_item.appendChild(Margherita_Pizza)
    third_item.appendChild(price_third)

    const BBQ_Chicken_Pizza = document.createElement("h3"); 
    BBQ_Chicken_Pizza.setAttribute('class','menu-name');
    BBQ_Chicken_Pizza.innerHTML = 'BBQ Chicken Pizza'

    const price_forth = document.createElement("p"); 
    price_forth.setAttribute('class','menu-price');
    price_forth.innerHTML = '11$'

    const forth_item = document.createElement("div"); 
    forth_item.setAttribute('class','menu-item flex sp-between');

    forth_item.appendChild(BBQ_Chicken_Pizza)
    forth_item.appendChild(price_forth)

    const Hawaiian_Pizza = document.createElement("h3"); 
    Hawaiian_Pizza.setAttribute('class','menu-name');
    Hawaiian_Pizza.innerHTML = 'Hawaiian Pizza'

    const price_fifth = document.createElement("p"); 
    price_fifth.setAttribute('class','menu-price');
    price_fifth.innerHTML = '11$'

    const fifth_item = document.createElement("div"); 
    fifth_item.setAttribute('class','menu-item flex sp-between');

    fifth_item.appendChild(Hawaiian_Pizza)
    fifth_item.appendChild(price_fifth)

    const Buffalo_Pizza = document.createElement("h3"); 
    Buffalo_Pizza.setAttribute('class','menu-name');
    Buffalo_Pizza.innerHTML = 'Buffalo Pizza'

    const sixth_forth = document.createElement("p"); 
    sixth_forth.setAttribute('class','menu-price');
    sixth_forth.innerHTML = '11$'

    const sixth_item = document.createElement("div"); 
    sixth_item.setAttribute('class','menu-item flex sp-between');

    sixth_item.appendChild(Buffalo_Pizza)
    sixth_item.appendChild(Buffalo_Pizza)

    menu.appendChild(first_item)
    menu.appendChild(second_item)
    menu.appendChild(third_item)
    menu.appendChild(forth_item)
    menu.appendChild(fifth_item)
    menu.appendChild(sixth_item)

    container.appendChild(menue)

    return container


}

export default renderMenu