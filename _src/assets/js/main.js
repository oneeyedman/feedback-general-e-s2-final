'use strict';

const searchField = document.querySelector('.search__field');
const searchBtn = document.querySelector('.search__btn');
const results = document.querySelector('.results__items');

function searchTVShows() {
  const api = 'https://api.tvmaze.com/search/shows?q=';
  const query = searchField.value;

  fetch(api+query)
    .then(res => res.json())
    .then(data => {
      // En este punto ya tenemos data
      let shows = '';

      for (let i=0;i<data.length;i++) {

        let genres = '';
        for (let x=0;x<data[i].show.genres.length;x++) {
          genres += `
            <li class="genre">
              ${data[i].show.genres[x]}
            </li>`;
        }

        shows += `
          <li class="results__item">
            <h2 class="result__title">${data[i].show.name}</h2>
            <ul class="result__genres">${genres}</ul>
          </li>`;
      }

      results.innerHTML = shows;
    });
}

searchBtn.addEventListener('click', searchTVShows);
