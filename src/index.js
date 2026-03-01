import './reset.css';
import './style.css';
import './contactPage.css'
import 'leaflet/dist/leaflet.css'

import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const navBtns = document.querySelectorAll('.nav-btn');
const homeBtn = document.querySelector('.home-btn');
const menuBtn = document.querySelector('.menu-btn');
const contactBtn =  document.querySelector('.contact-btn')


navBtns.forEach(btn => btn.addEventListener('click', (e)=> {
    if (e.target.classList.contains('active')) return;
    e.target.classList.add('active');

    if (e.target == homeBtn) loadHome();
    else if (e.target == menuBtn) loadMenu();
    else if (e.target == contactBtn) loadContact();
}))