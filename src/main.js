import { getRefs } from './refs';
import err from './img/2.svg';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const KEY = '41531809-f9219a766117007ff116a3463';
const refs = getRefs();
refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${refs.input.value}&image_type=photo&orientation=horizontal&per_page=21`
  )
    .then(response => {
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
            `<a class="link" href="#"><img class="img" src="${img.webformatURL}" alt="${img.tags}" width="360" height="200" loading="lazy"></a>`
        )
        .join('');
    })
    .catch(error => console.log('error'))
    .finally(refs.form.reset());
}
