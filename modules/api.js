const API_KEY = '86678f8aefbe274ed55324b1862dfef1'; // TMDB 

export async function fetchMovies(query) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
    
} 
   catch (error) {
    throw error;
  } 
} 
