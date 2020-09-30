# MovieBase - movies collection application made with Angular

## [Live Version](https://movie-base-48b87.web.app/)

## General Information

### Movies Search

Users can search for movies/series/episodes by Title and/or Year and/or Type. Up to 10 movies will be shown on each page of the requested search. Clicking on a movie will redirect to this movie's details page.

### Movie detail

Movie detail page has full information about the selected movie (Title, Year, Type, Poster, Plot, IMDB rating, Runtime, Genre).

### Navigation

Each search query is in the url, which enables users comfortable navigation (pressing back button in the browser leads to previous search requests or pages). This way users can also send links with specific query and page in mind.

### Data Storage

- Up to 50 last movie details are stored in the application. This is more than enough for users to comfortably check different movies for details and go back without reloading.
- Each page of the current search query is stored, so after checking out 20 pages of "how to get rich" movies, you can go back in the browser to see the same pages without any loading.
- Since search query is taken from the url, previous search queries are still visible in the input fields.

## Run Locally

1. `git clone` this project
2. Run `npm i` to install all the dependencies
3. Create `environment.ts` and `environment.prod.ts` files in the `src/environments` folder. Copy contents from `environment.dist.ts` and change the `omdbKey` for a valid OMDB API Key
4. Run `npm run start` or `ng serve` to start the application
5. Navigate to `http://localhost:4200/`

## Deploy to Firebase

1. `git clone` this project
2. Create `environment.ts` and `environment.prod.ts` files in the `src/environments` folder. Copy contents from `environment.dist.ts` and change the `omdbKey` for a valid OMDB API Key
3. Create a project at https://firebase.google.com/
4. Run `ng add @angular/fire`
5. Run `ng deploy`
