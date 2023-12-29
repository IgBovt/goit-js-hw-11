import { getRefs } from './refs';
import err from './img/2.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const KEY = '41531809-f9219a766117007ff116a3463';
const refs = getRefs();
refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  refs.span.classList.add('loader');

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
        iziToast.warning({
          backgroundColor: '#EF4040',
          titleColor: '#fff',
          messageColor: '#fff',
          iconUrl: `${err}`,
          position: 'topRight',
          title: 'SORRY',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      refs.body.innerHTML = images.hits
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
        .join('');

      refs.span.classList.remove('loader');

      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => console.log('error'))
    .finally(refs.form.reset());
}
