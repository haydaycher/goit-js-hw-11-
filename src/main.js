import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchForm = document.getElementById('searchForm');
  const gallery = document.getElementById('gallery');

  const originalPlaceholder = searchInput.getAttribute('placeholder');

  searchInput.addEventListener('focus', () => {
    searchInput.setAttribute('data-placeholder', originalPlaceholder);
    searchInput.setAttribute('placeholder', '');
  });

  searchInput.addEventListener('blur', () => {
    searchInput.setAttribute('placeholder', originalPlaceholder);
  });

  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchValue = searchInput.value.trim();

    if (searchValue === '') {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search term.',
        position: 'topRight',
      });
      return;
    }

    gallery.innerHTML = '';

    fetchImages(searchValue)
      .then(images => {
        if (images.length === 0) {
          iziToast.info({
            title: 'No Results',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        } else {
          iziToast.success({
            title: 'Success',
            message: `Found ${images.length} images.`,
            position: 'topRight',
          });

          renderImages(images);
        }
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: 'Failed to fetch images.',
          position: 'topRight',
        });
      });

    searchInput.value = '';
  });
});
