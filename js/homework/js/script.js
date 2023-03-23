'use strict';
//HOMEWORK
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How much films have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much films have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('Watched very few films.');
    } else if(personalMovieDB.actors >= 10 && personalMovieDB < 30){
        console.log('You are a classic viewer,');
    } else if(personalMovieDB.count >= 30){
        console.log('You are a cinephile!');
    } else {
        console.log('Error!');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre is numbered ${i}:`);
    }
}

writeYourGenres();