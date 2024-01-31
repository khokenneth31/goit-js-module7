import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

lightbox.on("show.simplelightbox", function () {
  document.body.style.overflow = "hidden";
});

lightbox.on("close.simplelightbox", function () {
  document.body.style.overflow = "visible";
});

// Path: js/03-lightbox.js
