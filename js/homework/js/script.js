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

for(let i = 0; i < 2; i++){
    const nameOfFilm = prompt('What movie did you watch recently?', '');
    const markOfFilm = prompt('Rate it:', '');

    if(nameOfFilm != null && markOfFilm != null && nameOfFilm != '' && markOfFilm != '' && nameOfFilm.length < 50){
        personalMovieDB[nameOfFilm] = markOfFilm;
        console.log('Done!');
    } else {
        console.log("Error!");
        i--;
    }
}

if(personalMovieDB.count < 10){
    console.log('Watched very few films.');
} else if(personalMovieDB.actors >= 10 && personalMovieDB < 30){
    console.log('You are a classic viewer,');
} else if(personalMovieDB.count > 30){
    console.log('You are a cinephile!');
} else {
    console.log('Error!');
}

console.log(personalMovieDB);