'use strict';

const searchField = document.querySelector('.search__field');
const searchBtn = document.querySelector('.search__btn');
const results = document.querySelector('.results__items');

function searchTVShows() {
  const api = 'https://api.tvmaze.com/search/shows?q=';
  const query = searchField.value;
  console.log('yay');
  fetch(api+query)
    .then(res => res.json())
    .then(data => {
      // En este punto ya tenemos data
    });
}

searchBtn.addEventListener('click', searchTVShows);
