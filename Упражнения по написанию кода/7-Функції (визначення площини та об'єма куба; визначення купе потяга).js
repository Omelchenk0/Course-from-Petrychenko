// Место для первой задачи
function calculateVolumeAndArea(lenght) {

   if (typeof (lenght) !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
      return "При вычислении произошла ошибка";
   }
   let volume = 0,
   area = 0;

   //розраховуємо  об'єм:
   volume = lenght * lenght * lenght;
   // length ** 3 - это тоже самое, что и выше или варианты через цикл.
   // (дві зірочки) - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/

   //розраховуємо площину:
   area = 6 * (lenght * lenght);

   return `Объем куба: ${volume}, площадь куба всей поверхности: ${area}`;

}


console.log(calculateVolumeAndArea(5));

//-------------------нижче скопійований  готовий код

// function calculateVolumeAndArea(length) {
//    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(lenght)) {
//       return "При вычислении произошла ошибка";
//    }

//    let volume = 0,
//       area = 0;

//    volume = length * length * length;
//    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//    area = 6 * (length * length);

//    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(15));



// Место для второй задачи
function getCoupeNumber(seatNumber) {
   if (typeof (seatNumber) !== 'number' || !Number.isInteger(seatNumber) || seatNumber < 0) {
      return "Помилка. Перевірте введені дані";
   }

   if (seatNumber === 0 || seatNumber > 36) {
      return "Такого місця немає в вагоні"
   }

   return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(1));

//При введенні рішення на сайті були помилки через те що  сповіщення прописав українською.