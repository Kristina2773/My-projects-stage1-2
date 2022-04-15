`use strict`


const petsInfo = [
    {
        "name": "Katrine",
        "img": "../../assets/images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
      },
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../assets/images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../assets/images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../assets/images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    }
  ]

  const burgerBtn = document.querySelector('.burger-btn'),
      navigation = document.querySelector('.nav'),
      links = document.querySelectorAll('.nav-link'),
      navLogo = document.querySelector('.nav-logo'),
      logo = document.querySelector('.logo');

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

  let petsCards = document.querySelector('.pets-cards');

  for(let i = 0; i < petsInfo.length; i++) {
    const petCard = document.createElement('div');
    petCard.classList.add('our-friend-card');
    petsCards.append(petCard);
    petCard.append(createImgCard(i));
    petCard.append(createNamePet(i));
    petCard.append(createCardBtn(i)); 
  }

  function createImgCard(i) {
    const imgCard = document.createElement('img');
    imgCard.classList.add('img-card');
    imgCard.src = petsInfo[i].img;
    imgCard.alt = petsInfo[i].name;
    return imgCard;
  }

  function createNamePet(i) {
    const namePet = document.createElement('p');
      namePet.classList.add('pets-name');
      namePet.textContent = petsInfo[i].name;
      return namePet;
  }

  function createCardBtn() {
    const cardBtn = document.createElement('button');
      cardBtn.classList.add('learn-more-btn');
      cardBtn.textContent = 'Learn more';
      return cardBtn;
  }