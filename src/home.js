import loadMenu from './menu';

const mainDiv = document.querySelector('.main-div');
const navBtns = document.querySelectorAll('.nav-btn');
const menuBtn = document.querySelector('.menu-btn');

function createWelcomeMsg() {
    const welcomeMsg = document.createElement('h2');
    welcomeMsg.textContent = 'WELCOME TO HANOI DELIGHTS RESTAURANT';
    welcomeMsg.classList.add('welcome-msg');
    return welcomeMsg;
}

function createIntroMsg(){
    const introMsg = document.createElement('p');
    introMsg.textContent = 'Experience the authentic flavors of Hanoi with our traditional Vietnamese dishes, prepared with fresh, local ingredients.'
    introMsg.classList.add('intro-msg');
    return introMsg;
}

function handelViewMenuBtnClick() {
    navBtns.forEach(btn => btn.classList.remove('active'));
    menuBtn.classList.add('active');
    mainDiv.innerHTML = '';
    loadMenu();
}

function createViewMenuBtn(){
    const viewMenuBtn = document.createElement('button');
    viewMenuBtn.textContent = 'View Menu';
    viewMenuBtn.classList.add('viewMenu-btn');
    viewMenuBtn.addEventListener('click',handelViewMenuBtnClick);
    return viewMenuBtn;
}

function loadHome() {
    mainDiv.classList.remove(...mainDiv.classList);
    mainDiv.classList.add('main-div','main-home');
    mainDiv.appendChild(createWelcomeMsg());
    mainDiv.appendChild(createIntroMsg());
    mainDiv.appendChild(createViewMenuBtn());
}

export default loadHome;