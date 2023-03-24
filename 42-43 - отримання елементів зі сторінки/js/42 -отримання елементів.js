'use strict';

const box = document.getElementById('box'); //тільки 1 елемент! ID ідентифікатор унікальний, може бути тільки 1 на сторінкці
console.log(box);

//-----------------------------------

const btns = document.getElementsByTagName('button'); //в цьому методі ми завжди отримуємо html-колекцію елементів,
console.log(btns[1]);  //або console.log(btns[1]);    //навіть якщо на сторінкі є тільки 1 такий елемент

//-----------------------------------

const circles = document.getElementsByClassName('circle')[1]; //в цьому методі ми теж отримуємо html-колекцію елементів
console.log(circles);

//-----------------------------------

const hearts = document.querySelectorAll('.heart'); //в цьому методі ми вже МАЄМО вказати ТИП селектора

hearts.forEach(item => {           //це псевдомасив hearts і стрілочна колбек функція в методі forEach;
   console.log(item);
});

//-----------------------------------

const oneHeart = document.querySelector('div'); //ми отримаємо ТІЛЬКИ 1 ПЕРШИЙ такий елемент зі сторінки;
console.log(oneHeart);  //при використонні цього селектора не потрібно вказувати індекс елемента;