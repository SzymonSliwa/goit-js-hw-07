import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItemsShown = galleryItems
  .map(
    (galleryItem) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
     <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryItemsShown);

//const image = document.querySelectorAll(".gallery__image");

gallery.onclick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  basicLightbox
    .create(
      `<img width="1400" heigth="900" 
				src=${e.target.dataset.source} />
			`
    )
    .show();
};
