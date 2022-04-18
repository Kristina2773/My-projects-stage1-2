`use strict`

import pets from '../../js/pets.js';

const burgerBtn = document.querySelector('.burger-btn'),
      navigation = document.querySelector('.nav'),
      links = document.querySelectorAll('.nav-link'),
      navLogo = document.querySelector('.nav-logo'),
      logo = document.querySelector('.logo');

let width = document.querySelector('body').offsetWidth;


// opening-closing menu
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
function closeMenu(e) {
    if (e.target.classList.contains('nav-link')) {
            burgerBtn.classList.remove('active');
            navigation.classList.remove('show');
            burgerBtn.classList.remove('show');
    }
    if (navigation.classList.contains('nav-none')) {
      navigation.classList.remove('nav-none');
    } else {
      setTimeout(() => {navigation.classList.add('nav-none')}, 1000);
    }
}

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navigation.classList.toggle('show');
    burgerBtn.classList.toggle('show');
    navLogo.classList.toggle('show');
    logo.classList.toggle('close');

    if (navigation.classList.contains('nav-none')) {
      navigation.classList.remove('nav-none');
    } else {
      setTimeout(() => {navigation.classList.add('nav-none')}, 1000);
    }
});

links.forEach((element) => element.addEventListener('click', closeMenu));


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

for (let i = 0; i < pets.length; i++) {
  new petCard (
      pets[i].img,
      pets[i].alt,
      pets[i].name,
      pets[i].name,
      '.pets-cards'
  ).render();
}


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
const popapContent = document.querySelector('.popap-content');

const closeContent = document.querySelector('[data-close]');


function showModalContent() {
  popap.classList.remove('hidden'); 
  popap.classList.add('show'); 
}

function closeModalContent() {
  popap.classList.add('hidden');
  popap.classList.remove('show');
  popapContent.innerHTML = ``; 
}

popapTrigger.forEach(item => { 
  item.addEventListener('click', (event) => {
      formPopap(event)
      showModalContent();
  });
});


closeContent.addEventListener('click', (e) => {
  const tar = e.target;
  if(tar.classList.contains('popap-wrapper') || tar.classList.contains('popap-button') || tar.classList.contains('modal')) {
   closeModalContent();
  }
});