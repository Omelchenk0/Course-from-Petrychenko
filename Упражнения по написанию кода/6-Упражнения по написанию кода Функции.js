// Место для первой задачи

function sayHello(name) {
   return `Привіт, ${name}!`;
}

console.log(sayHello('Євгеній')); // використав консоль лог щоб побачити виведення

//або

function sayHello(name)  {
   return `Hi, ${name}!`;
}

console.log(sayHello('Eugene'));

// Место для второй задачи
function returnNeighboringNumbers(number) {
   return [number - 1, number, number + 1];
}

console.log(returnNeighboringNumbers(3));

// або

function returnNeighboors(number) {
   return [number - 5, number, number + 5];
}

console.log(returnNeighboors(10));

// Место для третьей задачи

function getMathResult(num, times) {

   //далі це: Если второй аргумент не является числом, 
   //равен или меньше нуля - то возвращать просто первый аргумент. 
   //(Проверяем через оператор typeof)

   if (typeof (times) !== 'number' || times <= 0) {
      return num;
   }

   
   let str = '';

   for (let i = 1; i <= times; i++) {
      if (i === times) {
         str += `${num * i}`;
         // Тут без черточек в конце
      } else {
         str += `${num * i}---`;
         // Это тоже самое, что и
         // str = str + num * i + "---"
      }
   }

   return str;
}

console.log(getMathResult(2, 4));

//-----------------------------

function getMathResult(num, times) {
   if (typeof (times) != 'number' || times <= 0) {
      return num;
   }

   let str = '';

   for (let i = 1; i <= times; i++) {
      if (i === times) {
         str += `${num * i}`;
      } else {
         str += `${num * i}---`;
      }
   }
   
   return str;
}

console.log(getMathResult(2, 4));