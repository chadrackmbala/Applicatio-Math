function calcul(firstNumber, secondNumber) {
    let division = firstNumber / secondNumber;
    console.log(`La division de ${firstNumber} par ${secondNumber} est ${division}`);
    let produit = firstNumber * secondNumber;
    console.log(`Le produit de ${firstNumber} par ${secondNumber} est ${produit}`);
    alert(`La division de ${firstNumber} par ${secondNumber} est ${division}`);
    alert(`Le produit de ${firstNumber} par ${secondNumber} est ${produit}`);
}

calcul(Number(prompt('Entrer un premier nombre')), Number(prompt('Entrer un second nombre')));