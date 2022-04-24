`use strict`;

import pets from '../../js/pets.js';
import helpShelter from '../../js/helpShelter.js';

window.addEventListener('DOMContentLoaded', () => {
// opening - closing menu
const burgerBtn = document.querySelector('.burger-btn'),
      navigation = document.querySelector('.nav'),
      links = document.querySelectorAll('.nav-link'),
      navLogo = document.querySelector('.nav-logo'),
      logo = document.querySelector('.logo'),
      navWrapper = document.querySelector('.nav-wrapper');

let width = document.querySelector('body').offsetWidth;

if (width <= 767) {
  navigation.classList.add('nav-none');
} else if (width > 767) {
    navigation.classList.remove('nav-none');
}

window.addEventListener('resize', function() {
    width = document.querySelector('body').offsetWidth;
    if (width <= 767) {
        navigation.classList.add('nav-none');
    } else if (width > 767) {
        navigation.classList.remove('nav-none');
    }
})
function closeMenu() {
            document.documentElement.classList.remove('hidden-overflow');
            burgerBtn.classList.remove('active');
            navigation.classList.remove('show');
            navWrapper.classList.remove('grey');
    
    if (navigation.classList.contains('nav-none')) {
      navigation.classList.remove('nav-none');
      navWrapper.classList.add('grey');
    } else {
        setTimeout(() => {
            navigation.classList.add('nav-none');
            navWrapper.classList.remove('grey');
          }, 1000);
    }
}

navWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-wrapper')) {
      closeMenu();
    }
});

burgerBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('hidden-overflow');
    burgerBtn.classList.toggle('active');
    navigation.classList.toggle('show');
    burgerBtn.classList.add('show');
    navLogo.classList.add('show');
    navWrapper.classList.toggle('grey');
    

    if (navigation.classList.contains('nav-none')) {
      navigation.classList.remove('nav-none');
      navWrapper.classList.add('grey');
    } else {
      setTimeout(() => {
        navigation.classList.add('nav-none');
        navWrapper.classList.remove('grey');
        }, 1000);
    }
});

links.forEach((element) => element.addEventListener('click', closeMenu));

// form a grid in help-shelter section

let helpShelterLength = Object.values(helpShelter).length;


for(let i = 0; i < helpShelterLength; i++) {
    let helpList = document.querySelector('.help-list');
    const helpListItem = document.createElement('li');
    helpListItem.classList.add('help-list-item');
    helpList.append(helpListItem);
    const iconItem = document.createElement('img');
    iconItem.classList.add('help-icon');
    iconItem.src = helpShelter[i].icon;
    iconItem.alt = helpShelter[i].title;
    helpListItem.append(iconItem);
    const titleListItem = document.createElement('h4');
    titleListItem.classList.add('help-item-title');
    titleListItem.textContent = helpShelter[i].title;
    helpListItem.append(titleListItem);
}

// render pets-cards
class petCard {
    constructor(src, alt, name, popap, parentSelector) {
        this.src= src;
        this.alt= alt;
        this.name = name;
        this.popap = popap;
        this.parent = document.querySelector(parentSelector);
    }
  
    render() {
        const element = document.createElement('div');
        element.classList.add('our-friend-card');
        element.setAttribute('data-popap', this.popap);
        element.innerHTML = ` 
            <img src=${this.src} class="pets" alt=${this.alt} data-popap=${this.popap}>
            <p class="pets-name" data-popap=${this.popap}>${this.name}</p>
            <button class="learn-more-btn" name="button" data-popap=${this.popap}>Learn more</button>
        </div>
        `;
        this.parent.append(element);
    
    }
  }

//   slider

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const petsWrap = document.querySelector('.pets-wrap');
const petsCards = document.querySelector('.pets-cards');
const widthPetsCards = window.getComputedStyle(petsCards).width;


let offset = 0;

for(let i = 0; i < 3; i++) {
    for (let i = 0; i < pets.length; i++) {
        new petCard (
            pets[i].img,
            pets[i].alt,
            pets[i].name,
            pets[i].name,
            '.pets-wrap'
        ).render();
      }
}
const ourFriendCards = document.querySelectorAll('.our-friend-card');


function formOffsetForNext(gap) {
    if(offset == (+widthPetsCards.slice(0, widthPetsCards.length - 2) + gap) * (ourFriendCards.length / 3 - 1)) {
        petsWrap.classList.remove('transition');
        offset = 0;
    } else {
        petsWrap.classList.add('transition');
        offset += (+widthPetsCards.slice(0, widthPetsCards.length - 2) + gap);
    }
}

function formOffsetForPrev(gap) {
    if (offset == 0) {
        petsWrap.classList.remove('transition');
        offset = (+widthPetsCards.slice(0, widthPetsCards.length - 2) + gap) * (ourFriendCards.length / 3 - 1);
    } else {
        petsWrap.classList.add('transition');
        offset -= (+widthPetsCards.slice(0, widthPetsCards.length - 2) + gap);
    }
}

nextBtn.addEventListener('click', () => {
    if (width >= 1280) {
        formOffsetForNext(90);
    } else if (width < 1280) {
        formOffsetForNext(40);
    }
    petsWrap.style.transform = `translateX(-${offset}px)`;
});
prevBtn.addEventListener('click', () => {
    if (width >= 1280) {
        formOffsetForPrev(90);
    } else if (width < 1280) {
        formOffsetForPrev(40);
    }
    petsWrap.style.transform = `translateX(-${offset}px)`;
});


// render pet modal
class popapPet {
    constructor(src, alt, name, type, breed, text, age, inoculations, diseases, parasites, parentSelector) {
        this.src= src;
        this.alt= alt;
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.text = text;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
        this.parent = document.querySelector(parentSelector);
    }
  
    renderPopap() {
        const element = document.querySelector('.popap-content');
        element.innerHTML = ` 
                    <img src=${this.src} alt=${this.alt} class="popap-pet-img">
                        <div class="popap-description">
                            <div class="popap-dog">
                                <h3 class="popap-pet-name">${this.name}</h3>
                                <h4 class="popap-pet-breed">${this.type} - ${this.breed}</h4>
                        </div>
                        <h5 class="popap-text">${this.text}</h5>
                        <ul class="popap-list">
                            <li><span class="bold">Age:</span> ${this.age}</li>
                            <li><span class="bold">Inoculations:</span>  ${this.inoculations}</li>
                            <li><span class="bold">Diseases:</span> ${this.diseases}</li>
                            <li><span class="bold">Parasites:</span> ${this.parasites}</li>
                        </ul>
        `;
        } 
    }
  
  
  // opening-closing pet-modal
  
  function formPopap(event) {
    const target = event.target;
    for (let i = 0; i < pets.length; i++) {
        if(pets[i].name == target.dataset.popap) {
            new popapPet (
                pets[i].img,
                pets[i].alt,
                pets[i].name,
                pets[i].type,
                pets[i].breed,
                pets[i].description,
                pets[i].age,
                pets[i].inoculations,
                pets[i].diseases,
                pets[i].parasites,
            ).renderPopap();
        }
    }
  }
  
  const popap = document.querySelector('.popap-wrapper');
  const popapBtn = document.querySelector('.popap-button');
  const popapTrigger = document.querySelectorAll('[data-popap]');
  let popapContent = document.querySelector('.popap-content');
  const closeContent = document.querySelector('[data-close]');

  
  function showModalContent() {
    document.documentElement.classList.add('hidden-overflow');
    popap.classList.remove('hidden'); 
    popap.classList.add('show'); 
    popapContent.classList.add('overflow-visible');
  }
  
  function closeModalContent() {
    document.documentElement.classList.remove('hidden-overflow');
    popap.classList.add('hidden');
    popap.classList.remove('show');
    popapContent.classList.remove('overflow-visible');
    popapContent.innerHTML = ``; 
  }
  
  popapTrigger.forEach(item => { 
    item.addEventListener('click', (event) => {
        formPopap(event)
        showModalContent();
    });
  });
  
  // popapTrigger.forEach((item) => item.addEventListener('click', (event) => formPopap(event)));
  
  closeContent.addEventListener('click', (e) => {
    const tar = e.target;
    if(tar.classList.contains('popap-wrapper') || tar.classList.contains('popap-button') || tar.classList.contains('modal')) {
     closeModalContent();
    }
  });

});