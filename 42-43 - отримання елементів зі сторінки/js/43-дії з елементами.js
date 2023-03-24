'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'yellow';   //варіант запису коли нам потрібно використати 1 властивість CSS
// box.style.width = '550px';

box.style.cssText = 'background-color: blue; width: 700px'; //cssText - варіант запису різних стилів CSS в 1 рядку JS.

btns[3].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'pink';
// circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){       //це спосіб надання стилів всім елементам через цикл;
//    hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {                          //це спосіб надання стилів всім елементам через метод;
   item.style.backgroundColor = 'pink'
});

const div = document.createElement('div');                //це створення елемента на сторінкі;

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);  //метод append додає елемент після вказаного елемента;


// Рефакторинг кода - це зміна структури вже написаного кода;

//---------------------------------
// wrapper.prepend(div); //метод prepend додає елемент після вказаного елемента;


// hearts[1].before(div); //метод before додає елемент після вказаного елемента;
// wrapper.insertBefore(div, hearts[2]); // insertBefore- це ЗАСТАРІЛИЙ метод розміщення об'єкта;


// hearts[1].after(div); //метод after додає елемент після вказаного елемента;

//---------------------------------

// circles[0].remove();             //метод remove - видаляє вибраний об'єкт;
// wrapper.removeChild(hearts[1]); //removeChild - це ЗАСТАРІЛИЙ метод вдалення об'єкта;

//---------------------------------

// hearts[0].replaceWith(circles[0]); //replaceWith - заміняє один елемент - іншиим
// wrapper.replaceChild(circles[0], hearts[0]); // replaceChild - це ЗАСТАРІЛИЙ метод вдалення об'єкта;

div.innerHTML = '<h1>Hello world</h1>'; //поміщаємо заголовок в елемент З ТЕГОМ
//АЛЕ вищевказаний метод не прийнято вокористовувати бо користувач може ввести якийсь елемент на сторінку

// div.textContent = "Hi!"; //поміщаємо САМЕ ТЕКСТ в елемен


//вставка кода HTML до або після якого сь елемента:
div.insertAdjacentHTML("afterend", "<h2>Good day!</h2>");

//beforebegin, afterbegin, beforeend. afterend