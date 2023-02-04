"use strict"

//1 При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

function firstTask() {
   // Пишем решение вот тут
   let num = 5;

   while (num <= 10) {
      console.log(num);
      num++;
   }
};

//або: 

let numm = 5;

do {
   console.log(numm);
   numm++;
}
while (numm <= 10);

//або

let nuum = 5;

for (let i = 5; i <= 10; i++) {
   console.log(nuum);
   nuum++;
}

//або, найкращий варіант без змінної.

for (let i = 5; i <= 10; i++) {
   console.log(i);
}
//2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
//Когда цикл дойдет до числа 13 - остановить весь цикл.


for (let i = 20; i >= 10; i--) {
   if (i === 13) break;
   console.log(i)
}

//3.При помощи цикла for выведите чётные числа от 2 до 10 включительно

for (let i = 1; i <= 10; i++) {
   if (i % 2 === 0) {
      console.log(i);
   }
}

// for (let i = 2; i <= 10; i++) {
//    if (i % 2 === 0) {
//       console.log(i);
//    }
// }

//4.Перепишите цикл  for на вариант с while. 
//Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.:

for (let i = 2; i <= 16; i++) {
   if (i % 2 === 0) {
      continue;
   } else {
      console.log(i);
   }
}


let i = 2;
while (i <= 16) {
   if (i % 2 === 0) {
      i++;
      continue;
   } else {
      console.log(i)
   }
   i++;
}


//5. Заполните массив цифрами от 5 до 10 включительно. 
//Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arrayOfNumbers = [];

// Пишем решение вот тут
for (let i = 5; i <= 10; i++) {
   arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);

// Не трогаем
return arrayOfNumbers;
