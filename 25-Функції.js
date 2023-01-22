"use strict"

function showFirstMessage() {
   console.log("Hello World");
}

showFirstMessage();

//or we can write like:

function showFirstMessage(text) {
   console.log(text);
   let num = 20; //створили локальну змінну через let/const яка існує тільки всередині функції
               //і ми не можемо викликати її за межами цієї функції
               //але ми можемо використовувати змінну яка записана за межами функції
}

showFirstMessage("Hello World");

// калькулятор

function calc(a, b) {
   return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));