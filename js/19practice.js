const numberOfFilms = +prompt('How many films have you seen', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt('Один з останніх фільмів які Ви переглядали?', ''),
      b = prompt('На скільки Ви його оцінюєте?', ''),
      c = prompt('Один з останніх фільмів які Ви переглядали?', ''),
      d = prompt('На скільки Ви його оцінюєте?', '');