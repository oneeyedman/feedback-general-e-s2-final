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

      for (let b=0;b<data.length;b++) {
        // Creamos el LI
        const result = document.createElement('li');
        result.classList.add('results__item');

        // Creo el H2 y lo relleno
        const title = document.createElement('h2');
        title.classList.add('results__title');
        const titleContent = document.createTextNode(data[b].show.name);
        title.appendChild(titleContent);

        // Creo el ul de géneros y lo relleno
        const genres = document.createElement('ul');
        genres.classList.add('genres');

        for (let g=0;g<data[b].show.genres.length;g++) {
          const genre = document.createElement('li');
          genre.classList.add('genre');

          const genreContent = document.createTextNode(data[b].show.genres[g]);

          genre.appendChild(genreContent);
          genres.appendChild(genre);
        }

        // Añadimos los contenidos a lo elementos
        result.appendChild(title);
        result.appendChild(genres);


        // Añadimos el elemento al listado
        results.appendChild(result);
      }

    });
}

searchBtn.addEventListener('click', searchTVShows);
