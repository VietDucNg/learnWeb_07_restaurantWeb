import './reset.css';
import './style.css';

import loadHome from './home';

const navBtns = document.querySelectorAll('.nav-btn');
const homeBtn = document.querySelector('.home-btn');


navBtns.forEach(btn => btn.addEventListener('click', (e)=> {
    if (e.target.classList.contains('active')) return;
    
    e.target.classList.add('active');

    if (e.target == homeBtn) loadHome();
}))