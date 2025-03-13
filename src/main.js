
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
 if (!form) {
   console.error('Form not found');
   return;
}

if (!loader) {
  console.error('Loader not found');
  return;
}

function showLoader() {
  loader.classList.add('active');
}

function hideLoader() {
  loader.classList.remove('active');
}




form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({ title: 'Warning', message: 'Please enter a search term!' });
    return;
  }

  clearGallery();
  showLoader(); 

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong! Please try again.' });
  } finally {
    hideLoader();
  }
});
  });
