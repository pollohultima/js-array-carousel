const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const asideImg = document.querySelector('.aside');

for (let i = 1; i <= items.length; i++) {
    const showImage = `<img src="./assets/img/0${i}.jpg" alt="" class="same_height"></img>`;
    asideImg.innerHTML += showImage;
}




const [itemOne] = items
const [sweden] = title
const [textSweden] = text

const swedenSelection = [itemOne, sweden, textSweden]
console.log(swedenSelection);

const [itemTwo] = items

const [svizzera] = title
const [textSvizzera] = text


const svizzeraSelection = [itemTwo, svizzera, textSvizzera]
console.log(svizzeraSelection);