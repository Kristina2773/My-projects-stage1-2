`use strict`;

const helpShelter = {
    0: {
        icon: '../../assets/icons/icon-pet-food.svg',
        title: 'Pet food',
    },
    1: {
        icon: '../../assets/icons/icon-transportation.svg',
        title: 'Transportation',
    },
    2: {
        icon: '../../assets/icons/icon-toys.svg',
        title: 'Toys',
    },
    3: {
        icon: '../../assets/icons/icon-bowls-and-cups.svg',
        title: 'Bowls and cups',
    },
    4: {
        icon: '../../assets/icons/icon-shampoos.svg',
        title: 'Shampoos',
    },
    5: {
        icon: '../../assets/icons/icon-vitamins.svg',
        title: 'Vitamins',
    },
    6: {
        icon: '../../assets/icons/icon-medicines.svg',
        title: 'Medicines',
    },
    7: {
        icon: '../../assets/icons/icon-collars-or-leashes.svg',
        title: 'Collars / leashes',
    },
    8: {
        icon: '../../assets/icons/icon-sleeping-area.svg',
        title: 'Sleeping areas',
    }

}

let helpShelterLength = Object.values(helpShelter).length;

console.log(helpShelterLength)

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
