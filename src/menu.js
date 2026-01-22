import nemRanImg from './img/nem_ran.jpg';
import bunChaImg from './img/bun_cha.webp';
import chaCaImg from './img/cha-ca-la-vong.jpg';
import phoBoImg from './img/pho_bo.jpg';
import phoGaImg from './img/pho_ga.jpg';
import bunBoImg from './img/bun-bo-hue.jpg';
import miQuangImg from './img/mi_quang.webp';
import banhXeoImg from './img/banh_xeo.png';
import comTamImg from './img/com_tam.webp';
import goiImg from './img/goi_du_du.jpg';

const mainDiv = document.querySelector('.main-div');

class ItemObj {
    constructor(name, intro, price, img) {
        this.name = name;
        this.intro = intro;
        this.price = price;
        this.img = img;
    }
}

const menuItemArr = [
    new ItemObj(
        'Spring Rolls (Nem Rán)', 
        'Crispy rolls filled with pork, glass noodles, and vegetables, fried until golden and served with fresh herbs.', 
        '22€',
        nemRanImg,
    ),

    new ItemObj(
        'Grilled Pork with Vermicelli (Bún Chả)', 
        'Grilled pork served with rice vermicelli, fresh herbs, and dipping sauce - a true specialty of Hanoi.',
        '18€',
        bunChaImg,
    ),

    new ItemObj(
        'Hanoi Turmeric Fish with Dill (Chả Cá Lã Vọng)',
        'Pan-fried turmeric fish with dill and spring onions, served sizzling with noodles and dipping sauce.',
        '25€',
        chaCaImg,
    ),

    new ItemObj(
        'Beef Pho (Phở bò)',
        "Vietnam's iconic beef noodle soup with slow-simmered broth, rice noodles, tender beef, and fragrant herbs.",
        '18€',
        phoBoImg,
    ),

    new ItemObj(
        'Chicken Pho (Phở gà)',
        'A lighter, aromatic chicken noodle soup with clear broth, silky rice noodles, and fresh herbs.',
        '17€',
        phoGaImg,
    ),

    new ItemObj(
        'Spicy Beef Noodle Soup (Bún Bò Huế )',
        'A bold and spicy beef noodle soup from central Vietnam, rich with lemongrass and chili aromas.',
        '20€',
        bunBoImg,
    ),

    new ItemObj(
        'Quang-Style Turmeric Noodles (Mì Quảng)',
        'Turmeric-tinted noodles topped with pork, shrimp, herbs, and crunchy rice crackers, lightly served with broth.',
        '18€',
        miQuangImg,
    ),
    
    new ItemObj(
        'Vietnamese Crispy Pancake (Bánh Xèo)',
        'A crispy rice pancake filled with pork, shrimp, and bean sprouts, wrapped in herbs and dipped in sauce.',
        '15€',
        banhXeoImg,
    ),
    
    new ItemObj('Broken Rice with Grilled Pork (Cơm Tấm)',
        'Broken rice served with grilled pork, egg, pickles, and fish sauce — a beloved southern Vietnamese classic.',
        '15€',
        comTamImg,
    ),
    
    new ItemObj(
        'Green Papaya Salad (Gỏi đu đủ)',
        'A refreshing mix of shredded green papaya, herbs, peanuts, and lime, balancing sweet, sour, and spicy flavors.',
        '12€',
        goiImg,
    ),
]

function creatMenuItem(item) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-div');

    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = item.name;

    const itemIntro = document.createElement('p');
    itemIntro.classList.add('item-intro');
    itemIntro.textContent = item.intro;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = item.price;

    const itemImg = document.createElement('img');
    itemImg.classList.add('item-img');
    itemImg.src = item.img;

    itemDiv.append(itemName, itemIntro, itemPrice, itemImg);
    return itemDiv;
}

function loadMenu() {
    for (const item of menuItemArr) {
        const itemDiv = creatMenuItem(item);
        mainDiv.appendChild(itemDiv);
    }
}

export default loadMenu;