import { getRefs } from './refs';
import { getAlert } from './alert';
import { getLargePhoto } from './simpleLightBox';

const KEY = '41531809-f9219a766117007ff116a3463';
const refs = getRefs();
refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  refs.span.classList.add('loader');
  refs.body.innerHTML = '';
  getPhoto();
}

function getPhoto() {
  fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${refs.input.value}&image_type=photo&orientation=horizontal&per_page=21`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(images => {
      if (images.hits.length <= 0) {
        getAlert();
      }
      createMarkup(images);
      removeLoader();
      getLargePhoto();
    })
    .catch(error => console.log('error'))
    .finally(refs.form.reset());
}

function createMarkup(images) {
  return (refs.body.innerHTML = images.hits
    .map(
      img =>
        `
            <a class="link" href="${img.largeImageURL}">
            <img
                class="img"
                src="${img.webformatURL}"
                alt="${img.tags}"
                width="360"
                height="200"
                loading="lazy"
            />
            <div class="text-bar">
                <div class="text-container">
                <h3 class="text-title">Likes</h3>
                <p class="text">${img.likes}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Views</h3>
                <p class="text">${img.views}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Comments</h3>
                <p class="text">${img.comments}</p>
                </div>
                <div class="text-container">
                <h3 class="text-title">Downloads</h3>
                <p class="text">${img.downloads}</p>
                </div>
            </div> </a
            >`
    )
    .join(''));
}

function removeLoader() {
  return refs.span.classList.remove('loader');
}
