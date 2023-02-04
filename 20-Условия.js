`use strict`

if (4 == 4) {
   console.log('Ok!');
} else {
   console.log('Error');
}
//----------------------------------------
const num = 50;

if (num < 49) {
   console.log('Error');
} else if (num > 100){
   console.log('To much');
} else {
   console.log('Ok!');
}
//alternative variation below
(num === 50) ? console.log('Ok!') : console.log('Error');
//----------------------------------------------------
const num1 = 51;

switch (num1) {
   case 49:
      console.log('Неверно');
      break;
   case 100:
      console.log('Неверно');
   case 50:
      console.log('В точку!');
      break;
   default:
      console.log('Не цього разу');
      break;
}
