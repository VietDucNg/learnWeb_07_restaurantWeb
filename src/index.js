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

const pages = {
    home: loadHome,
    menu: loadMenu,
    contact: loadContact
};

loadHome();

navBtns.forEach(btn => btn.addEventListener('click', (e)=> {
    const clickedBtn = e.currentTarget;
    const pageName = clickedBtn.dataset.page;

    if (clickedBtn.classList.contains('active')) return;
    else {
        navBtns.forEach(btn => btn.classList.remove('active'));
        clickedBtn.classList.add('active');
        mainDiv.innerHTML = '';
        pages[pageName]();
    }
}))