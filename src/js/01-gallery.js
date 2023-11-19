import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const container = document.querySelector('.gallery')

function createMarkup(arr) {
   return  arr.map(({ preview, original, description }) => {
     return `
          <li style="list-style: none" class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
              />
            </a>
          </li>`
      }).join('')
}

container.insertAdjacentHTML('beforeend', createMarkup(galleryItems))
  
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
