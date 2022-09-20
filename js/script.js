'use strict';


let personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function (){
        for (let i=0; i<2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = +prompt('На сколько оцените его?','');
        
            if (a != null && b != null && a !='' && b !='' && a.length < 50 ) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    Detect: function () {
        if (personalMovieDB.count <=10) {
            alert('Просмотренно довольно мало фильмов');
        }else if (personalMovieDB.count  <30 && personalMovieDB.count  >=10) {
            alert('Вы классический зритель');
        }else if (personalMovieDB.count  >=30) {
            alert('Вы киноман');
        }else {
            alert('Error');
        }
    },
    writeYourGenres: function() {
        for(let i=1; i<6; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if( genres == ' ' || genres == null){ 
                alert(`Вы ввели некоректные данные`);
                i--;
            }else {
                personalMovieDB.genres[i-1] = genres;
            }
            personalMovieDB.genres.forEach((item, i)=>{
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            });
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(){
        if (personalMovieDB.privat === false){
            console.log(personalMovieDB);
        }
    },
};
