// script.js

import { fetchMovies } from './modules/api.js';
import { displayFavorites, displayMovies } from './modules/ui.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const favoritesButton = document.getElementById('favorites-button'); // Get favorites button
const moviesContainer = document.getElementById('movies-container');
const favoritesContainer = document.getElementById('favorites-container');


searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (query !== '') {
        try {
            const movies = await fetchMovies(query);
            displayMovies(movies, moviesContainer, true); // Pass true to indicate that favorites functionality is enabled
    } catch (error) {
      console.error('Error fetching movies:', error.message);
    }
  }
});

//I keep getting an error when I try to fetch favorites, so for now it is commented out.
favoritesButton.addEventListener('click', async () => {
        try {
              const favorites = await fetchFavorites();
              displayFavorites(favorites, favoritesContainer, true); // Pass false to disable favorites functionality
              favoritesContainer.style.display = 'block'; // Show the favorites container
            } catch (error) {
                  console.error('Error fetching favorites:', error.message);
                }
              });
            
              async function fetchFavorites() { 
                    const options = {
                          method: 'GET',
      headers: {
        
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'json-store.p.rapidapi.com'
      }
    };
  
    const response = await fetch(JSON_STORE_URL, options);
    if (!response.ok) {
          throw new Error('Failed to fetch favorites');
        }
        const data = await response.json();
        //console.log(Object.values(data)); - test
        return Object.values(data);
      }
    
    
    // Function to save a movie as a favorite, it puts the movie into a json and stores it
    const RAPIDAPI_KEY = 'tyhHQE8ucRmshvnOtxDukm3iqhwup1aJMjGjsnFKTHMpVgjmdB';
    const JSON_STORE_URL = 'https://json-store.p.rapidapi.com/';

    async function saveFavoriteMovie(movieId, movieTitle) {
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'X-RapidAPI-Key': RAPIDAPI_KEY,
                'X-RapidAPI-Host': 'json-store.p.rapidapi.com'
            },
        body: JSON.stringify({
            name: `FavoriteMovie_${movieId}`,
            document: {
                movieId,
                movieTitle,
      } 
    }) 
}; 
//console.log(options.body); - test

try {
    let response = await fetch(JSON_STORE_URL, options);
    if (!response.ok) {
        throw new Error('Failed to save movie');
    }
    console.log('Movie saved to favorites!');
} catch (error) {
    console.error('Error saving movie:', error.message);
    throw error; 
}
}

// Function to handle marking a movie as favorite and storing it in JSON Store API
moviesContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('favorite-button')) {
    let movieId = event.target.dataset.id;
    let movieTitle = event.target.dataset.title;
    try {
      await saveFavoriteMovie(movieId, movieTitle);
      alert('Movie saved to favorites!');
    } catch (error) {
      console.error('Error saving movie:', error.message);
      alert('Failed to save movie. Please try again later.');
    }
  }
});