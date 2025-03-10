import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a');

export function renderGallery(images) {
  gallery.innerHTML = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
          </a>
          <div class="info">
            <p>👍 ${likes}</p>
            <p>👁️ ${views}</p>
            <p>💬 ${comments}</p>
            <p>⬇️ ${downloads}</p>
          </div>
        </li>
      `
    )
    .join('');

  lightbox.refresh();
}
