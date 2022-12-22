console.log( NaN || 2 || undefined ); // 2

console.log( NaN && 2 && undefined ); // NaN
 
console.log( 1 && 2 && 3 ); // 3
 
console.log( !1 && 2 || !3 ); // false
 
console.log( 25 || null && !3 ); // 25
 
console.log( NaN || null || !3 || undefined || 5); // 5
 
console.log( NaN || null && !3 && undefined || 5); // 5
 
console.log( 5 === 5 && 3 > 1 || 5); // true
//-------------------------------------------

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
// will be: Done!
//-------------------------------------------

let hamburger; //використовуємо let бо не вкладуємо початкове значення в змінну зconst була б помилка
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}
//will be: Done!
//-------------------------------------------
let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} else {
   console.log('Faaaals')
}