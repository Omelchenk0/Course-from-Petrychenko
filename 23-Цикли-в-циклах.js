for (let i = 0; i < 3; i++) {
   console.log(i);
   for (let j = 0; j < 3; j++) {
      console.log(j);
   }
}

// завдання з пірамідкою --------------------------
// *
// **
// ***
// ****
// *****
// ******


let result = '';
const length = 7; 

for(let i = 1; i < length; i++){

   for(let j = 0; j < i; j++){
      result +="*";
   }
   result += '\n';
}
console.log(result);


//---------------------далі експерименти-------------

let result = '';
const length = 6; 

for(let i = 1; i <= length; i++){

   for(let j = 0; j < i; j++){
      result +="*";
   }
   result += '\n';
}
console.log(result);
