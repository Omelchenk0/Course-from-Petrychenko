   "use strict";
// console.log(1);

//--------------------------------------------------------------------------------------------------------------------------

// alert('Hello u'); //простовиводить якесь попередження, взаємодія тільки через "ОК"

//---------------------------------------------------------------------------------------------------------------------------

// const result = confirm("Are you here?"); //просить підтвердження через "ОК" або "Відміна"
// console.log(result);


//---------------------------------------------------------------------------------------------------------------------------

// const answer = prompt("Are u 18?", "20");  //задаємо питання про вік, взаємодія через "ОК" або "Відміна", 
// // а також відразу прописуємо в рядку рекомендований вік "20"
// console.log(answer + ' years'); //приставка до результата яка виводиться в консоль;

//---------------------------------------------------------------------------------------------------------------------------

// const answers = []; //створили масив, задача: вивести кілька запитань в модальному вікні браузера;

// answers[0] = prompt('What is your name?', 'Vasia');
// answers[1] = prompt('What is your surname?', 'Pupkin');
// answers[2] = prompt('How old are you?', '55');


//------------------8.ІНТЕРПОЛЯЦІЯ----------------------------------------------------------------------------
// це ми використовуємо для формування посилання на сайті в даному прикладу
// приклеювання одного кусочка строки до другого називається- контантинацією.

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);
//---------------------------------------------------------------------------------------------------------------------------

// const user = "Ivor";

// alert(`Hi, ${user}`);

//---------------------------------------------------------------------------------------------------------------------------

//-----------------------9. Оператори JS-----------------------------------------------------------------------

// console.log('arr' + " - object"); // складе разом в 1 рядок 2 вказаних значення
// console.log(4 + "5"); //буде 9 

//----------------------------------
let incr = 10,
   decr = 10;

incr++; //інкримент (може бути в префіксній або постфіксній формі) 
decr--; //декримент (також може бути в префіксній або постфіксній формі) 

console.log(incr); //результатом буде "11";
console.log(decr); //результатом буде "9"

//або------------

// console.log(incr++);   //в обох випадках нічого не зміниться 10
// console.log(decr--);  // в обох випадках нічого не зміниться 10

//---------------------
console.log(5%2); //в данному випадку буде показувати ЗАЛИШОК від ділення, тобто - "1"

//оператори
//  "=" - присвоєння
// "==" - порівняння
// "===" - суворе порівняння

console.log(2*4 == 8) // true
console.log(2*4 == '8') //true бо порівняння по значенню
console.log(2*4 === '8') // false

//оператори логічні

&& // i завжди шукає Тру, якщо є хоч 1 Фолс то буде Фолс 
|| // або завжди шукає Тру, якщо є хоч 1 Тру то буде Тру

const isCheked = true,
      isClosed = false;

//console.log(isCheked && isClosed); //it will be false;
//or
//console.log(isCheked || isClosed);// буде Тру

! //   - оператор заперечення, змінює значення на протилежне
!= //  - оператор "не рівно"
!== // - 

//------------------------------------ порядок виконання операторів
// матеметичні - аналогічно математиці ( є таблиця операторів)