'use strict';
//HOMEWORK
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = +prompt('How much films have you watched?', '');

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('How much films have you watched?', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++){
            const nameOfFilm = prompt('What movie did you watch recently?', '');
            const markOfFilm = prompt('Rate it:', '');
    
            if(nameOfFilm != null && markOfFilm != null && nameOfFilm != '' && markOfFilm != '' && nameOfFilm.length < 50){
                personalMovieDB[nameOfFilm] = markOfFilm;
                console.log('Done!');
            } else {
                console.log("Error! 1");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            console.log('Watched very few films.');
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('You are a classic viewer,');
        } else if(personalMovieDB.count >= 30){
            console.log('You are a cinephile!');
        } else {
            console.log('Error! 2');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++){
            let genres = prompt(`Enter your favorite genres separated by commas:`);

            if(genres ==='' || genres == null){
                console.log('Error!');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Your favourite genre numbered №${i + 1} is ${genre}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

