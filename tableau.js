{
    // let reponse = 0;
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//     for(let i = 1; i <= 10; i++) {
      
//       if ( (2 + 2) != 4) {
//         console.log('Something has gone very wrong :( ');
//         reponse = reponse + i;
        
//       }console.log(reponse);
//     }
//   };
  
//   // Write your code below
//   //1000000
//   const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
//   isTwoPlusTwo();
  
//   console.log(isTwoPlusTwo.name);
}
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

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(bigNumbers);

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage);