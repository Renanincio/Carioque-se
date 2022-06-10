const btnMobile = window.document.getElementById('button');

function toggleMenu() {
    const nav = window.document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);





