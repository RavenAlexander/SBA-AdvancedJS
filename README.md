# SBA-AdvancedJS - Movie Search

This is a project that uses external API data to return information about movies! You are also allowed to save movies you searched into a Favorites category.

## Objectives:
- Use asynchronous JavaScript tools to build a responsive web application.
- Demonstrate understanding of the JavaScript event loop.
- Generate asynchronous code using Promises and async/await syntax.
- Use fetch and/or Axios to interact with an external web API.
- Organize files using modules and imports.

Languages used: HTML, CSS, JS

### APIs Used: https://www.themoviedb.org/  https://rapidapi.com/apikite/api/json-store/ 
You will need to obtain your own API keys if you want to use this code.

### Blockers: 
I did run into an issue with the TMDB API that I wasn't aware of until it was too late to change. At the time of this app creation, there is no way to limit the amount of results that the API returns to you, unless the limit is by page. One page contains up to 20 movies if there are enough entries to fill the list. This also applies to the "Favorites" feature, as the favorites are found by id name. In future updates I would like to change this to be able to return specified entries and prevent the lists from overpopulating.
