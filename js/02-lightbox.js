import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.reduce(
  (acc, item) =>
    acc +
    `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
  ''
);

galleryEl.insertAdjacentHTML('beforeend', markup);

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// console.log(galleryItems);
