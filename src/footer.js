
const renderFooter = () => {
    const footer = document.createElement('footer');
    footer.setAttribute('class', 'footer')
    const footerDiv = document.createElement('div');
    footerDiv.setAttribute('class', 'footer-div')
    footerDiv.innerHTML = `Copyright &copy;
    <script>document.write(new Date().getFullYear());</script>&nbsp;&nbsp;Created by Tomoaki Takebuchi
    | <i class="fab fa-github"></i> <a class= "name-cre" href="https://github.com/tomo5524" target="_blank">Tomo5524</a>`;
    footer.appendChild(footerDiv);

    return footer
}

export default renderFooter