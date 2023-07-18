// function addition(nombreUn, nombreDeux) {
//     let somme = nombreUn + nombreDeux;
//     return somme;
// }

// // console.log(addition(5, 5));

// function multiplication(nombreTrois, un) {
//     let produit = nombreTrois * 2 * un;
//     return produit;
// }

// console.log(multiplication(2, addition(5, 2)));


//La méthode .map()

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(bigNumbers);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);

//La méthode .forEach()

const forEachMathod = animals.forEach(animal => console.log(`Bonjour ${animal}`));

console.log(secretMessage);

//La méthode .join('')

const ani = animals.map(animal => animal[2]);
console.log(ani);
console.log(ani.join(''));

//La méthode .filter()

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
})

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

//La méthode .findIndex()

const findAnimal = animals.findIndex(animal => {
    return animal === 'leopard';
});

console.log(findAnimal);

const findAnimalWhere = animals.findIndex(animal => {
    return animal[0] === 'o';
});

console.log(findAnimalWhere);

//La méthode .reduce()

const nombres = [1, 2, 4, 10];
 
const summedNums = nombres.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})
 
console.log(summedNums) // Output: 17

//

let somme = 0;

for(i = 0; i < nombres.length; i++) {
    
    somme = somme + nombres[i] 
     
}
console.log(somme);// Output: 17

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10)
console.log(newSum);


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];


const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
  }, "C");

  console.log(word);

  const ouais = newNumbers.some(num => num < 0);

  console.log(ouais)


  //RESUME DU MODULE DES ITTERATEURS

  /* 
  .forEach()est utilisé pour exécuter le même code sur chaque élément d'un tableau mais ne modifie pas le tableau et renvoie undefined.
.map()exécute le même code sur chaque élément d'un tableau et renvoie un nouveau tableau avec les éléments mis à jour.
.filter()vérifie chaque élément d'un tableau pour voir s'il répond à certains critères et renvoie un nouveau tableau avec 
les éléments qui renvoient la vérité pour les critères.
.findIndex()renvoie l'indice du premier élément d'un tableau qui satisfait une condition dans la fonction de rappel. 
Il retourne -1si aucun des éléments du tableau ne satisfait la condition.
.reduce()parcourt un tableau et prend les valeurs des éléments et renvoie une seule valeur.
Toutes les méthodes d'itérateur prennent une fonction de rappel, qui peut être une fonction prédéfinie, une expression 
de fonction ou une fonction fléchée.
Vous pouvez visiter le Mozilla Developer Network pour en savoir plus sur les méthodes d'itération (et toutes les autres 
    parties de JavaScript !).
  */

  const Cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
Cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = Cities.filter(city => city.length > 7);
console.log(longCities);

// Choose a method that will return a single value
const Word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(Word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);

