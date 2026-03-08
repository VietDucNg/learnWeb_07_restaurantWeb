import './reset.css';
import './style.css';
import './home.css';
import './menu.css';
import './contact.css';
import 'leaflet/dist/leaflet.css';

import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const navBtns = document.querySelectorAll('.nav-btn');
const mainDiv = document.querySelector('.main-div');
const heading = document.querySelector('header h1');
const homeBtn = document.querySelector('.home-btn');

// handle heading click
function handleHeadingClick() {
    resetPage(homeBtn);
    loadHome();
}

heading.addEventListener('click', handleHeadingClick);

// handle nav click
const pages = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact
};

loadHome();

function resetPage(clickedBtn) {
    navBtns.forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');
    mainDiv.innerHTML = '';
}

navBtns.forEach(btn => btn.addEventListener('click', (e)=> {
    const clickedBtn = e.currentTarget;
    const pageName = clickedBtn.dataset.page;

    if (clickedBtn.classList.contains('active')) return;
    else {
        resetPage(clickedBtn);
        pages[pageName]();
    }
}))