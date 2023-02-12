/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

//---------------------------------------------------------------------------------
let numberOfFilms;


function start() {
   numberOfFilms = +prompt('How many films have you seen', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('How many films have you seen', '');
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

//Ми можемо видалити цю частину якщо в нас є цикл який прописаний нижче:
// const a = prompt('Один з останніх фільмів які Ви переглядали?', ''),
//       b = prompt('На скільки Ви його оцінюєте?', ''),
//       c = prompt('Один з останніх фільмів які Ви переглядали?', ''),
//       d = prompt('На скільки Ви його оцінюєте?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один з останніх фільмів які Ви переглядали?', ''),
            b = prompt('На скільки Ви його оцінюєте?', ''); // поставив крапку з комою!

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('Done');
      } else {
         console.log('Error');
         i--;
      }
   }
}

rememberMyFilms();

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
   } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
   } else {
      console.log("Произошла ошибка");
   }
}

detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDB (hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
   for(let i = 1; i  <= 3; i++) {                //використовуємо саме і = 1 тому що користувач рахує не з 0 а з 1!!!
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);  //вносимо данні в базу, а [i - 1] - цим самим ми передаємо значення для БД з 0, а не з 1 як це було для користувача
   }
}

writeYourGenres();


