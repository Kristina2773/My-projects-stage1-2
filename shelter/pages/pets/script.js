`use strict`

import pets from '../../js/pets.js';

window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn'),
        navigation = document.querySelector('.nav'),
        links = document.querySelectorAll('.nav-link'),
        navLogo = document.querySelector('.nav-logo'),
        logo = document.querySelector('.logo'),
        navWrapper = document.querySelector('.nav-wrapper');

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
  function closeMenu() {
      // if (e.target.classList.contains('nav-link') || e.target.classList.contains('nav-wrapper') || e.target.classList.contains('line')) {
              document.documentElement.classList.remove('hidden-overflow');
              burgerBtn.classList.remove('active');
              navigation.classList.remove('show');
              navWrapper.classList.remove('grey');
      // }
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

  // pagination

  const firstBtn = document.querySelector('.first-btn');
  const lastBtn = document.querySelector('.last-btn');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const countPage = document.querySelector('.page');
  const petsCards = document.querySelector('.pets-cards');

  function sliceArr (arr, size){
    let result = [];
    for(let i = 0; i < arr.length; i+=size) {
      result.push(arr.slice(i, i+size))
    }
    return result;
  }

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  let indexArr = [];

  for(let j = 0; j < 6; j++){
    for (let i = 0; i < 8; i++) {
      indexArr.push(i);
  }
  }
  function resultIndex(indexArr, quantityElements) {
    return resultIndex = sliceArr(indexArr, quantityElements)
  }


  window.addEventListener('resize', function() {
    width = document.querySelector('body').offsetWidth;
    if (width >= 1280) {
      limit = 8;
    } else if (width < 1280 && width >= 768) {
      limit = 6;
    } else if(width < 768 && width >= 320) {
      limit = 3;
    }
})

  if (width >= 1280) {
    resultIndex(indexArr, 8);
  } else if (width < 1280 && width >= 768) {
    resultIndex(indexArr, 6);
  } else if(width < 768 && width >= 320) {
    resultIndex(indexArr, 3);
  }

  for(let i = 0; i < resultIndex.length; i++) {
      shuffle(resultIndex[i]);
  }

  resultIndex = resultIndex.flat();

  function arraySlice(arr, first_el, arrLength) {
    return arr.slice(first_el, arrLength);
  }

  let limit; 

  if (width >= 1280) {
    limit = 8;
  } else if (width < 1280 && width >= 768) {
      limit = 6;
  } else if(width < 768 && width >= 320) {
    limit = 3;
  }
  
  let page = 1;

  function createCardsOnPage(limit, page) {
    let offset = (page - 1) * limit;
    let endArrSpl = offset + limit;
    let res = arraySlice(resultIndex, offset, endArrSpl);
    for (let i = 0; i < res.length; i++) {
      let index = res[i];
      new petCard (
          pets[index].img,
          pets[index].alt,
          pets[index].name,
          pets[index].name,
          '.pets-cards'
      ).render();
    }
  }

  createCardsOnPage(limit, page);

  function disabledPreviousBtn() {
      firstBtn.disabled = true;
      firstBtn.classList.add('disabled');
      prevBtn.disabled = true;
      prevBtn.classList.add('disabled');
  }

  function disabledNextBtn() {
      nextBtn.disabled = true;
      nextBtn.classList.add('disabled');
      lastBtn.disabled = true;
      lastBtn.classList.add('disabled');
  }

  function enabledPreviousBtn() {
      firstBtn.disabled = false;
      firstBtn.classList.remove('disabled');
      prevBtn.disabled = false;
      prevBtn.classList.remove('disabled');
  }
  function enabledNextBtn() {
      nextBtn.disabled = false;
      nextBtn.classList.remove('disabled');
      lastBtn.disabled = false;
      lastBtn.classList.remove('disabled');
  }


  nextBtn.addEventListener('click', () => {
    page = page + 1;
    if (page <= resultIndex.length / limit) {
      petsCards.innerHTML = '';
      countPage.textContent = `${page}`;
      createCardsOnPage(limit, page);
    }
    enabledPreviousBtn();
    if (page == resultIndex.length / limit) {
        disabledNextBtn();
    }
    triggerForPopap();
  })

  prevBtn.addEventListener('click', () => {
    if (page > 0) {
      prevBtn.disabled = false;
      petsCards.innerHTML = '';
      page = page - 1;
      countPage.textContent = `${page}`;
      createCardsOnPage(limit, page);
    }
    enabledNextBtn();
    if (page == 1){
      disabledPreviousBtn();
    }
    triggerForPopap();
  })

  lastBtn.addEventListener('click', () => {
    console.log(resultIndex, limit)
    if (page <= resultIndex.length / limit) {
      petsCards.innerHTML = '';
      page = resultIndex.length / limit;
      countPage.textContent = `${page}`;
      createCardsOnPage(limit, page);
    }
    disabledNextBtn();
    enabledPreviousBtn();
    triggerForPopap();
  })

  firstBtn.addEventListener('click', () => {
    if (page > 0) {
      firstBtn.disabled = false;
      firstBtn.removeAttribute('disabled');
      petsCards.innerHTML = '';
      page = 1;
      countPage.textContent = `${page}`;
      createCardsOnPage(limit, page);
    }
    enabledNextBtn();
    disabledPreviousBtn();
    triggerForPopap();
  })

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
  const content = document.querySelector('.popap-content');
  const popapBtn = document.querySelector('.popap-button');
  

  const closeContent = document.querySelector('[data-close]');


  function showModalContent() {
    document.documentElement.classList.add('hidden-overflow');
    popap.classList.remove('hidden'); 
    popap.classList.add('show'); 
    content.classList.add('overflow-visible');
  }

  function closeModalContent() {
    document.documentElement.classList.remove('hidden-overflow');
    popap.classList.add('hidden');
    popap.classList.remove('show');
    content.classList.add('overflow-visible');
    content.innerHTML = ''; 
  }

  function triggerForPopap () {
    let popapTrigger = document.querySelectorAll('[data-popap]');
    popapTrigger.forEach(item => { 
      item.addEventListener('click', (event) => {
          formPopap(event);
          console.log('here');
          showModalContent();
      });
    });
  }
  triggerForPopap();


  closeContent.addEventListener('click', (e) => {
    const tar = e.target;
    if(tar.classList.contains('popap-wrapper') || tar.classList.contains('popap-button') || tar.classList.contains('modal')) {
    closeModalContent();
    }
  });

});





