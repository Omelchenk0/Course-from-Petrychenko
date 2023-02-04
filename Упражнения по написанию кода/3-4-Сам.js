"use strict"
//1

for (let i = 5; i <= 10; i++) {
   console.log(i);
}

//2

for (let i = 20; i >= 14; i--) {
   console.log(i);
   }

//3

for (let i = 2; i <= 10; i++){
   if(i % 2 === 0)
   console.log(i);
}

//4
// for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//        continue;
//    } else {
//        console.log(i);
//    }
// }

let i = 2;
while(i <= 16){
   if(i % 2 === 0){
      i++
      continue;
   }
   else{
      console.log(i);
   }
i++
}

//5 Заполните массив цифрами от 5 до 10 включительно. 
//Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
const arrayOfNumbers = [];

// Пишем решение вот тут
for (let i = 5; i <= 10; i++) {
   arrayOfNumbers[i - 5] = i; 
}
console.log(arrayOfNumbers);
// Не трогаем
return arrayOfNumbers;

//--------------------------------------------------------------

//1 Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут
for (let i = 0; i < arr.length; i++){
   result[i] = arr[i];
}
console.log(result);
// Не трогаем
return result;

