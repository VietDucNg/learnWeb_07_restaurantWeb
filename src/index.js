import './reset.css';
import './style.css';

import loadHome from './home';

const homeBtn = document.querySelector('.home-btn');

homeBtn.addEventListener('click', loadHome);