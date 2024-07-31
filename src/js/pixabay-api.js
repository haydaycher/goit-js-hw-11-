import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '45161707-c900d4c58d729c828a58b7932';
const BASE_URL = 'https://pixabay.com/api/';

const spinner = document.querySelector('.loader');
function showSpinner() {
  spinner.style.display = 'flex';
}
export function hideSpinner() {
  spinner.style.display = 'none';
}

export function fetchImages(query) {
  const url = new URL(BASE_URL);
  url.searchParams.set('key', API_KEY);
  url.searchParams.set('q', query);
  url.searchParams.set('image_type', 'photo');
  url.searchParams.set('orientation', 'horizontal');
  url.searchParams.set('safesearch', 'true');

  showSpinner();

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    })
    .finally(() => {
      hideSpinner();
    });
}
