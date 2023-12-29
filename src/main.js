import { getRefs } from './refs';

const KEY = '41531809-f9219a766117007ff116a3463';
const refs = getRefs();
refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${refs.input.value}&image_type=photo&orientation=horizontal`
  )
    .then(response => {
      return response.json();
    })
    .then(
      images =>
        (refs.body.innerHTML = images.hits
          .map(
            img =>
              `<img src="${img.webformatURL}" alt="${img.tags}" width="360", height="200">`
          )
          .join(''))
    )
    .catch(error => console.log('error'))
    .finally(refs.form.reset());
}
