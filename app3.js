{
  //   let tableauNombres = [];

  // function nParite(n, partie) {
  //   if (partie !== '') {
  //     for (n ; n <= 21; n++)
  //       tableauNombres.push(n);

  //     let tableauNombrePaire = [];
  //     let tableauNombreImpaire = [];

  //     for (let itterateur = 0; itterateur < tableauNombres.length; itterateur++) {
  //       tableauNombres[itterateur] % 2 === 0 ? tableauNombrePaire.push(tableauNombres[itterateur])
  //         : tableauNombreImpaire.push(tableauNombres[itterateur])
  //     }

  //     console.log('Tableau Paire');

  //     console.log(tableauNombrePaire);

  //     console.log('Tableau Impaire');

  //     console.log(tableauNombreImpaire);

  //     let sommeDeNombrePaires = 0;
  //     let sommeDeNombreImpaires = 0;

  //     for (let itterateur = 0; itterateur < tableauNombrePaire.length; itterateur++)
  //       sommeDeNombrePaires = sommeDeNombrePaires + tableauNombrePaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres paires : ${sommeDeNombrePaires}`);

  //     for (let itterateur = 0; itterateur < tableauNombreImpaire.length; itterateur++)
  //       sommeDeNombreImpaires = sommeDeNombreImpaires + tableauNombreImpaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres impaires : ${sommeDeNombreImpaires}`);
  //   } else {
  //     console.log('Nombre inconnu !')
  //   }
  //   return n;
  // }

  // nParite(6, 'a');
}
{
  // function nParite(n, parite) {
  //   let tableauNombres = [];
  //   if (parite === 'a') {
  //     for (i = 10; i <= 21; i++)
  //       tableauNombres.push(i);

  //     let tableauNombrePaire = [];
  //     let tableauNombreImpaire = [];

  //     for (let itterateur = 0; itterateur < tableauNombres.length; itterateur++) {
  //       tableauNombres[itterateur] % 2 === 0 ? tableauNombrePaire.push(tableauNombres[itterateur])
  //         : tableauNombreImpaire.push(tableauNombres[itterateur])
  //     }

  //     console.log('Tableau Paire');

  //     console.log(tableauNombrePaire);

  //     console.log('Tableau Impaire');

  //     console.log(tableauNombreImpaire);

  //     let sommeDeNombrePaires = 0;
  //     let sommeDeNombreImpaires = 0;

  //     for (let itterateur = 0; itterateur < tableauNombrePaire.length; itterateur++)
  //       sommeDeNombrePaires = sommeDeNombrePaires + tableauNombrePaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres paires : ${sommeDeNombrePaires}`);

  //     for (let itterateur = 0; itterateur < tableauNombreImpaire.length; itterateur++)
  //       sommeDeNombreImpaires = sommeDeNombreImpaires + tableauNombreImpaire[itterateur];
  //     console.log(`La somme de 6 premiers nombres impaires : ${sommeDeNombreImpaires}`);
  //   } else {
  //     console.log('Nombre inconnu !')
  //   }
  //   return n;
  // }


  // nParite(6, 'a')
}
{
  // function produitDeDeuxNombres(a, b) {
  //   let produit = a - b;
  //   switch (produit) {
  //     case produit > 0:
  //       console.log(1);
  //       break;
  //     case produit === 0:
  //       console.log(0);
  //       break;
  //     // case produit < 0:
  //     //   console.log(-1);
  //     //   break;
  //   //   default:
  //   //     console.log(0)
  //   // }
  // }

  // produitDeDeuxNombres(8,6)
}
{
  // function productSign(n, m) {
  //   n = n - m;
  //   if (n > 0) {
  //     console.log(n = 1);
  //   } else if (n === 0) {
  //     console.log(n = 0);
  //   } else {
  //     console.log(n = -1);
  //   }
  //   return n
  // }

  // productSign(6, 6)
}
{
  //   let tableauNombres = [];
  // let tableauNombresMultpleDe3 = [];
  // let tableauNombresMultpleDe5 = [];
  // let sommeNombrePour3 = 0;
  // let sommeNombrePour5 = 0;

  // for(i = 3; i < 23; i++) {
  //   let nombre = i;
  //   if(nombre % 3 === 0 || nombre % 5 === 0) {
  //     tableauNombres.push(i);
  //   }
  //   if(nombre % 3 === 0) {
  //     tableauNombresMultpleDe3.push(i)
  //   }
  //   if(nombre % 5 === 0) {
  //     tableauNombresMultpleDe5.push(i)
  //   } else {
  //     console.log(`${nombre} n'est ni multiple de 3, ni multiple de 5`);
  //   }
  // }

  // for(i = 0; i < tableauNombresMultpleDe3.length ; i++) {
  //   sommeNombrePour3 = sommeNombrePour3 + tableauNombresMultpleDe3[i];
  // }

  // for(i = 0; i < tableauNombresMultpleDe5.length ; i++) {
  //   sommeNombrePour5 = sommeNombrePour5 + tableauNombresMultpleDe5[i];
  // }
  // console.log(tableauNombres);
  // console.log(tableauNombresMultpleDe3);
  // console.log(tableauNombresMultpleDe5);
  // console.log(sommeNombrePour3);
  // console.log(sommeNombrePour5);
}
{
  // function multiple_3_5(n) {
  //   let tableauNombres = [];
  //   let tableauNombresMultpleDe3 = [];
  //   let tableauNombresMultpleDe5 = [];
  //   let sommeNombrePour3 = 0;
  //   let sommeNombrePour5 = 0;

  //   for (i = 3; i < 23; i++) {
  //     let nombre = i;
  //     if (nombre % 3 === 0 || nombre % 5 === 0) {
  //       tableauNombres.push(i);
  //     }
  //     if (nombre % 3 === 0) {
  //       tableauNombresMultpleDe3.push(i)
  //     }
  //     if (nombre % 5 === 0) {
  //       tableauNombresMultpleDe5.push(i)
  //     }
  //   }

  //   for (i = 0; i < tableauNombresMultpleDe3.length; i++) {
  //     sommeNombrePour3 = sommeNombrePour3 + tableauNombresMultpleDe3[i];
  //   }

  //   for (i = 0; i < tableauNombresMultpleDe5.length; i++) {
  //     sommeNombrePour5 = sommeNombrePour5 + tableauNombresMultpleDe5[i];
  //   }
  //   console.log(`La somme des multiples de 3 en dessous de 23 est : ${sommeNombrePour3}`);
  //   console.log(`La somme des multiples de 5 en dessous de 23 est : ${sommeNombrePour5}`);
  // }

  // multiple_3_5();
}
{
  //   //Dans un tableau contenant des nombres, lorsuq'on veut par exemple separer les nombres relatifs à deux éléments différents 
  // // il arrive que le nombre commun soit exclu si l'on utilise la structure if, else if
  // for(i = 3; i < 23; i++) {
  //   let nombre = i;
  //   if(nombre % 3 === 0 || nombre % 5 === 0) {
  //     tableauNombres.push(i);
  //   }
  //   if(nombre % 3 === 0) {
  //     tableauNombresMultpleDe3.push(i)
  //   } else if(nombre % 5 === 0) {
  //     tableauNombresMultpleDe5.push(i)
  //   } else {
  //     console.log(`${nombre} n'est ni multiple de 3, ni multiple de 5`);
  //   }
  // }
}
{
  // function leapyear(year) {

  //   if (year % 4 === 0 && year % 400 === 0) {
  //     year = true;
  //   } else if(year % 100 === 0) {
  //     year = false;
  //   } else {
  //     console.log('Nombre inconnu !');
  //   }
  //   return year;
  // }

  // leapyear(21);
}
{
  // function multiple_3_5(n) {
  //   let multipleDe3Et5 = [];
  //   let somme = 0;
  //     for(i = 0; i < n; i++) {
  //         if(i % 3 === 0 || i % 5 === 0) {
  //             multipleDe3Et5.push(i);
  //         }
  //     } 
  //     for(i = 1; i < multipleDe3Et5.length; i++) {
  //       somme = somme + multipleDe3Et5[i];
  //     }
  //     return somme;
  //   }

  // multiple_3_5(23);


  // console.log(multiple_3_5(10));
}
{
  //Programme pour indiquer l'heure

//Déclaration de la classe today pour avoir accès à la methode .get
}
{
  // let today = new Date();
  // let days = ["Mond", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday", "Sunday"];
  // let day = today.getDay();
  // console.log(`Today is ${days[day]}`);

  // let heure = today.getHours();
  // let minutes = today.getMinutes();
  // let second = today.getSeconds();

  // let heureNonTransforme = heure;
  // console.log(heure)
  // let beaforAfter = heure >= 12 ? "PM" : "AM";
  // heure = beaforAfter === "PM" ? heure - 12 : heure;
  // console.log(heure);
  // console.log(beaforAfter);

  // if (beaforAfter === "PM") {
  //   if (heure === 0 && minutes === 0 && second === 0) {
  //     heure = 12;
  //     beaforAfter = "Noon";
  //   } else {
  //     heure = 12;
  //     beaforAfter = "PM";
  //   }
  // }
  // if (beaforAfter === "AM") {
  //   if (heure === 0 && minutes === 0 && second === 0) {

  //     beaforAfter = "Middlenigth";
  //   } else {
  //     heure = heureNonTransforme;
  //     beaforAfter = "AM";
  //   }
  // }

  // console.log(`It's ${heure} ${beaforAfter} ${minutes} minutes ${second} seconds`);
}
{
  // function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));
// console.log(leapyear(2000));
// console.log(leapyear(1700));
// console.log(leapyear(1800));
// console.log(leapyear(100));

// function nombreDevine(nombre) {
//   let debut = 1;
//   let nombreAleatoire = Math.floor(Math.random()*10);
//   let somme = debut + nombreAleatoire;
//   console.log(somme);
//   let message = somme === nombre ? alert("Good Work !") : alert("Sorry !")
//   alert(message);
// }

// nombreDevine(Number(prompt("Entrer un nombre")));

// function nParite(n, parite) {
//   let somme = 0;
//   let ajout;
//   if(i % 2 === 0) {
//         ajout = 0;
//   }
//   if(parite || ajout === 0) {
//     for(i = 0; i < n; i++) {
//       somme = somme + ajout;
//         ajout = ajout + 2;
//     }
//   } else {
//     for(i = 0; i < n; i++) {
//       if(i % 2 === 1) {
//         somme = somme + i;
//       }
//     }
//   } return somme;
// }

// console.log(nParite(6, true));

// let signes = ["+", "*"];
// let signesIndex = Math.floor(Math.random()*2);
// let premierNombre = Math.floor(Math.random()*10);
// let secondNombre = Math.floor(Marh.random()*2);
// let signe = signesIndex === signes[i] 

// let operation = (`${premierNombre} `);
}

let score = 0;
let pourcentage;
let answerTable = [];
let message;
let userIdentity = user => userName = user;

userIdentity(prompt('Veuillez entrer votre prénom.'));

for(let i = 0; i < 3; i++) {
  let signeTable = ["+", "*", "/", "-"];
let signeIndex = Math.floor(Math.random() * 4);
let signe = signeTable[signeIndex];
let firstNumber = Math.floor(Math.random() * 10);
let secondNumber = Math.floor(Math.random() * 10);
let operation;
let userName;
let cote;
let answer;



function operationDeCalcul() {
  switch (signe) {
    case '+':
      operation = firstNumber + secondNumber;
      break;
    case '*':
      operation = firstNumber * secondNumber;
      break;
    case '/':
      operation = firstNumber / secondNumber;
      break;
    case '-':
      operation = firstNumber - secondNumber;
      break;
    default:
      console.log('Singe non compris');
  }
  if(firstNumber === 0 && secondNumber === 0) {
    operation = 0;
  }
  if (operation === Infinity) {
    operation = 0;
  } 
  return operation;
}
operationDeCalcul();

function userAswenrs(reponse) {
  if(reponse === operation) {
    console.log('Good Work !')
    cote = 33;
  } else {
    console.log('Mauvaise reponse !')
    cote = 0;
  }
}

userAswenrs(Number(prompt(`${firstNumber} ${signe} ${secondNumber}`)));

answerTable.push(cote);
console.log(answerTable);
}
for(let i = 0; i < answerTable.length; i++) {
  score = score + answerTable[i];
}
console.log(score);
pourcentage = score;
console.log(pourcentage);
if(pourcentage === 0) {
  message = "☹️ Votre niveau est très faible, je vous recomande de faire beaucoups d'exercices !"
} else if(pourcentage > 0 && pourcentage < 34 ) {
  message = "Vous êtes en dessous de la moyenne, encore un peu d'effort ! 😊"
} else if(pourcentage > 34 && pourcentage < 66) {
  message = "Vous vous débrouillez bien !"
} else {
  message = "Félicitations !! 😃🥳🤗👏"
}
console.log(`${userName} vous avez obtenu ${pourcentage} % ${message}`);
alert((`${userName} vous avez obtenu ${pourcentage} % ${message}`));
//