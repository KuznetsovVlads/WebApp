'use strict';

let numberOfFilms;

function start (){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }

}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function rememberMyFilms(){
    for (let i=0; i<2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?','');
    
        if (a != null && b != null && a !='' && b !='' && a.length < 50 ) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function Detect () {
    if (personalMovieDB.count <=10) {
        alert('Просмотренно довольно мало фильмов');
    }else if (personalMovieDB.count  <30 && personalMovieDB.count  >=10) {
        alert('Вы классический зритель');
    }else if (personalMovieDB.count  >=30) {
        alert('Вы киноман');
    }else {
        alert('Error');
    }
}
Detect ();

function writeYourGenres(personalMovieDB){
    for(let i=1; i<4; i++) {
        personalMovieDB.genres [i-1]= prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres(personalMovieDB);

function showMyDB(){
    if (personalMovieDB.privat === false){
        console.log(personalMovieDB);
    }
}
showMyDB();