// have a bg that covers whole page

const renderHome = () => {
    const container = document.createElement("div");
    container.setAttribute('class','home-container')

    const desc_div = document.createElement("div");
    desc_div.setAttribute('class','home-desc text-center flex jf-cn al-items');
    const desc = document.createElement("h1");
    desc.setAttribute('class','description');
    desc.innerHTML = 'Time to be Cheesy and Dig In!'

    desc_div.appendChild(desc)
    container.appendChild(desc_div)


    return container
};


export default renderHome

