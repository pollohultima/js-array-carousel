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


/*
STRUMENTI
- array
- eventListener
- for
- if
- querySelector/getElementById/altri
*/

//DOM

const previewElement = document.querySelector(' .preview');
const thumbsElement = document.querySelector(' .thumbs');
const prevElement = document.querySelector(' .prev');
const nextElement = document.querySelector(' .next');

//Initialize var
let activeItem = 0


// Render all thumbnails
for (let index = 0; index < items.length; index++) {

    const image_path = items[index];

    //Render all iamges and text
    let element = `
    <div class="preview__item">
    <img src="./assets/${items[index]}" alt="">
        <div class="text">
            <h2>${title[index]}</h2>
            <p>${text[index]}</p>
        </div>
    </div>`
    previewElement.insertAdjacentHTML('beforeend', element)


    //Render thumbs

    const thumbImage = `
    <img class="thumb_image" src="./assets/${image_path}">`

    thumbsElement.insertAdjacentHTML('beforeend', thumbImage)

}
document.getElementsByClassName('thumb_image')[activeItem].classList.add('activeThumb');
document.getElementsByClassName('preview__item')[activeItem].classList.add('active')


// Event Listeners

//decremento valore di active item
prevElement.addEventListener('click', function () {

    //check if the active item === 0
    if (activeItem == 0) {
        activeItem = items.length - 1;
    }
    //decrement active element
    else {
        activeItem = activeItem - 1;
    }

    document.querySelector('.preview__item.active').classList.remove('active')
    document.getElementsByClassName('preview__item')[activeItem].classList.add('active')

    //deselct the current activeThumb
    document.querySelector('.thumb_image.activeThumb').classList.remove('activeThumb');

    //select the new active thumb
    document.getElementsByClassName('thumb_image')[activeItem].classList.add('activeThumb');
})


//incremento valore di active item
nextElement.addEventListener('click', function () {

    //check if the active item is at last element
    if (activeItem == items.length - 1) {
        activeItem = 0;
    }
    //increment active element
    else {
        activeItem = activeItem + 1;
    }

    document.querySelector('.preview__item.active').classList.remove('active')
    document.getElementsByClassName('preview__item')[activeItem].classList.add('active')

    //deselct the current activeThumb
    document.querySelector('.thumb_image.activeThumb').classList.remove('activeThumb');

    //select the new active thumb
    document.getElementsByClassName('thumb_image')[activeItem].classList.add('activeThumb');
})




