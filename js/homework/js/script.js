'use strict';
//HOMEWORK

const numberOfFilms = +prompt('How much films have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What movie did you watch recently?', ''),
      b = prompt('Rate it:', ''),
      c = prompt('What movie did you watch recently?', ''),
      d = prompt('Rate it:', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);