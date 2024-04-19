export function displayMovies(movies, container, enableFavorites) {
    container.innerHTML = ''; // Clear previous results
    
    movies.forEach(movie => { //This code dynamically adds each movie to the page
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.release_date}</p>
        ${enableFavorites ? `<button class="favorite-button" data-id="${movie.id}" data-title="${movie.title}">Favorite</button>` : ''}
        <hr>
        `;
      container.appendChild(movieElement);
    });
  }
  
  export function displayFavorites(movies, container) {
    container.innerHTML = '';
    
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie');
      movieElement.innerHTML = `
    
        <h3>${movie.title}</h3>
        <p>${movie.release_date}</p>
      `;
      container.appendChild(movieElement);
    });
  }