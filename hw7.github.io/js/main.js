const form = document.querySelector('#js-form');
const submit = document.querySelector('#js-submit');
const popularSubmit = document.querySelector('.js-pop-button');
const latestSubmit = document.querySelector('.js-lt-button');
const topRatedSubmit = document.querySelector('.js-tr-button');
const input = document.querySelector('#js-input-value');
const gallery = document.querySelector('.gallery');
const apiKey = '&api_key=f24a0fd18f52218851075901c5a108a0&';
const queryUrl = 'https://api.themoviedb.org/3/search/movie?language=en-US&page=1&include_adult=false';
const popularUrl = 'https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1';
const latestUrl = 'https://api.themoviedb.org/3/movie/latest?language=en-US';
const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

const fetchFilms = (url, searchQuery) =>
   fetch(url + apiKey + `&query=${searchQuery}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('error while fetching, ' + response.statusText);
  })
  .catch(err => console.log(err));


const getFilmsInfo = films =>
  films.map(elem => {
    return {
      poster_path: elem.poster_path,
      title: elem.title,
      release_date: elem.release_date,
      overview: elem.overview.slice(0,99),
      vote_average: elem.vote_average,
    };
  });

const renderGallery = (films, parent) => {
  let htmlCard = '';
  films.forEach(elem => {
    let overview =elem.overview.slice(0,99);
    htmlCard += `<div class="film-card">
      <img src="https://image.tmdb.org/t/p/w500${elem.poster_path}" alt="film-poster" class="film-card__img">
      <h3 class="film-card__title">${elem.title}</h3>
      <p class="film-card__release-date">${elem.release_date}</p>
      <p class="film-card__overview">${overview}...</p>
      <div class="film-card__vote-average">${elem.vote_average}</div>
    </div>`;
  });
  parent.innerHTML = htmlCard;
};

const renderLatestFilm = (elem, parent) => {
  let htmlCard = '';
   htmlCard += `<div class="film-card">
      <img src="https://image.tmdb.org/t/p/w500${elem.poster_path}" alt="film-poster" class="film-card__img">
      <h3 class="film-card__title">${elem.title}</h3>
      <p class="film-card__release-date">${elem.release_date}</p>
      <p class="film-card__overview">${elem.overview}...</p>
      <div class="film-card__vote-average">${elem.vote_average}</div>
    </div>`;
  parent.innerHTML = htmlCard;
};

const fullCycle =(someUrl, someQuery) => {
  fetchFilms(someUrl, someQuery)
     .then(data => {
       const films = getFilmsInfo(data.results);
       renderGallery(films, gallery);
    });
 };

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (input.value !=="") {
  fullCycle(queryUrl, input.value);
  } else {
    alert ('Введите имя фильма !');
   }
});

popularSubmit.addEventListener('click', () => {
  fullCycle(popularUrl);
});
latestSubmit.addEventListener('click', () => {
  fetchFilms(latestUrl)
    .then(data => {
      renderLatestFilm(data, gallery);
    });
});
topRatedSubmit.addEventListener('click', () => {
  fullCycle(topRatedUrl);
  });

  
