"use strict"

//1 
const numbers = [-2, 4, -1, 6, 8];

//-- вірни варіант 3, С. Відповів вірно!
const result = numbers 
      .filter(n => n > 0)
      .map(n => n * 2)

console.log(result);  //виведеться масив [8, 12, 16]

//--невірні варіанти:

// const result = numbers 
// .findAll(n => n > 0)
// .map(n => n * 2)

// const result = numbers 
// .every(n => n > 0)
// .map(n => n * 2)

// const result = numbers 
// .findAll(n => n > 0)
// .forEach(n => n * 2)

//2
// How to create an element?
// document.createElement('div') - вірна відповіть. Відповів вірно!
// document.appendChild('div')
//document.createElement('<div>')
//document.addElement('div')

//3 
//Как активировать срабатывание обработчиков при всплытии события? ---Потрібно вивчити

//А: При подписке на событие нудно третьим аргументом передать флаг true;
//В: Нужно дулать подписку на специальный тип событий, например: 'bubling:click';
//C: Никак, это поведене по умолчанию;          --------------------скоріш за все це вірно, це обрав і в тестах;
//D: При подписке на событие нужно третьим аргументом передать флаг false;

//4
//Чему равняется контекст в момент вызова функции через оператор new? - Потрібно довчити

//А: Первому переданому аргументу;
//В: Последнему переданому аргументу;
//С: Пустому новому обїекту; - вірна відповідь, це й обрав!
//D: Контекст не определен;

//5
// Какие очереди задач есть в event loop? Потрібно вивчити

//A: microtasks, tasks, render; - вибрав в тесті
//B: microtasks, tasks;
//C: tasks, render;
//D: timeouts, intervals, tasks;

//6
// Что будет выведено в консоль?

var a = 'hello';
function b() {
   console.log(a);
   var a = 'world';
   console.log(a);
}
b();

//A: hello, world
//B: в коде ошибка
//C: hello, hello
//D: undefined, world - вірна відповідь, вибрав в тесті!

//7 
//В каком случае может произойти фриз страницы? ----вивчить це питання

//А: Выполняется бесконечный цикл в синхронном коде;
//В: callback внутри setTimeout бесконечно вызывает setTimeout
//C: Внутри промиса бесконечно создаются другие промисы
//D: В случаях 1 и 3

//8 
//Что будет выведено в консоль?

var a = {};
(function b(a) {
   a.a = 10;
   a = null;
})(a);
console.log(a);

//A: {}
//B: null 
//C: {a:10} - Вірна відповідь!!
//D: В коде ошибка - вибрав в тесті

//9 
//Что произойдет при исполнении этого кода? 

const map = new Map();

map.set('0', '1');
map.set('s2', '2s');
map.set('3s', 's3');

const arr = [...map.values()];
const result = arr.map(value => parseInt(value, 10));

console.log(result);


//A: ошибка при использовании spread оператора;   ---Вибрав в тесті( 
//B: [1, 2, NaN]                                  ---Правильна відповідь!
//C: Ошибка при парсинге третьего элемента
//D: [1, 2, 3]


//10


