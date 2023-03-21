const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   let str = '';

   //Стандартно використовується тернарний оператор АЛЕ можна використати іншу форму запиису (буде нижче):
   arr.lenght === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

   // if (arr.lenght === 0) {
   //    str = 'Семья пуста';
   // } else {
   //    str = 'Семья состоит из: ';
   // };

   arr.forEach(member => { str += `${member} `
});

   return str;
}

console.log(showFamily(family));

//Second task:

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(city => {
      console.log(city.charAt(0).toUpperCase() + city.slice(1).toLowerCase()) //скомбінував щоб в консоль виводились міста з великої літери (але в кінці виводить ше й undefined!!!!)
   });
   return '';
};

console.log(standardizeStrings(favoriteCities));




// Second tasr GPT:
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

const formattedCities = favoriteCities.map(city => {
   return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
});


console.log(formattedCities); // ['Lisbon', 'Rome', 'Milan', 'Dublin']
