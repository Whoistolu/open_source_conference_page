const eventSpeakers = [
    {
        picture: 'img/1.png',
        name: 'Ajise Tolu',
        position: 'Chairman of the Organisation',
        description: 'Ex-Professor at the University of Manchester',
    },
    {
        picture: 'img/2.png',
        name: 'Muhammed Sassey',
        position: 'Director of the Organisation',
        description: 'Ex-Professor at the University of Micighan',
    },
    {
        picture: 'img/3.png',
        name: 'Brian Orora',
        position: 'Secretary of the Organisation',
        description: 'Senior Developer at the University of Wales',
    },
    {
        picture: 'img/4.png',
        name: 'Francis Ugorji',
        position: 'Software tester of the Organisation',
        description: 'Senior Developer at the University of Oklahoma',
    },
    {
        picture: 'img/5.png',
        name: 'Amine Mohammed',
        position: 'Depty director of the Organisation',
        description: 'Ex-Professor at the University of Waterlo',
    },
    {
        picture: 'img/6.png',
        name: 'Tufoin Nkuo',
        position: 'Instructor of the Organisation',
        description: 'Ex-Professor at the University of Alabama',
    },
];

function createSpeakersDiv(speakerObjects) {
    const speakers = 
    `<div class="speaker1">
    <div class="speaker-image">
        <img src=${speakerObjects.picture} alt="speaker-1">
    </div>
    <div>
        <h2>${speakerObjects.name}</h2>
        <h3>${speakerObjects.position}</h3>
        <h4>${speakerObjects.description}</h4>
    </div>
</div>`;
return speakers;
}
const speakerAtEvent = document.getElementById('image-container1');
eventSpeakers.forEach((card) => {
    speakerAtEvent.innerHTML += createSpeakersDiv(card);
});


const mobileMenuButton = document.querySelector('#handburger');
function display() {
    const targetedDiv = document.querySelector('.mobile-menu-hidden');
    targetedDiv.classList.add('show');
    console.log(display);
  }

mobileMenuButton.addEventListener('click', display);
const closeButton = document.querySelector('#close-button');
function closePop() {
  const targetedDiv2 = document.querySelector('.mobile-menu-hidden');
  targetedDiv2.classList.remove('show');
}

closeButton.addEventListener('click', closePop);