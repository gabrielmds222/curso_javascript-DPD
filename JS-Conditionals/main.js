// Condicionais nada mais são do que um código que só será executado se obedecer uma condição.
// Para isso tem-se algumas formas de estabelecer essa condição.

// =============== IF ===============

// O if, ou 'se', traduzindo do inglês, vai receber uma condição e, executar o código dentro dele se a condição for verdadeira

const soma = 1 + 1;

if (soma === 2) { // Nesse caso se o valor da variável for igual a 2,
    console.log('True') // Deverá aparecer essa mensagem.
}


// =============== ELSE ===============

// O else serve como uma condição contrária à do if, por exemplo:

const sub = 5 - 3;

if (sub <= 1) { // Nesse caso, o valor do if não será o correto, visto que a operção da variável deve ser 2.
    console.log('False'); 
}
else {  // Nesse caso, o else vai aprensetar uma solução para quando a condição do if não for executada.
    console.log('True');
}


// =============== ELSE IF ===============

// Para o caso de existirem mais de duas possibilidades de condições a serem testadas, a melhor solução é utilizar o else if

const sum = 1 + 1;

if (sum === 2) {
  console.log("Sum is 2!");
} else if (sum === 3) {  // Sendo assim, tem-se uma terceira possibilidade a ser testada e, podem ser usados quantos else if forem precisos
  console.log("Sum is 3!");
} else {
  console.log("Sum is not 2!");
}


// =============== OPERADORES DO IF/ELSE ===============

// Para testar condições, existem alguns casos em que será preciso o uso dos operadores abaixo.
// && = AND
// || = OR

const sum1 = 2 + 2;
const sum2 = 3 + 10;

if (sum1 === 4 && sum2 === 6) {  // O operador &&, analisa as todas as condições entre parênteses e só executa o código quando as todas forem verdadeiras
  console.log("sum1 is 4 and sum2 is 6!");
}

if (sum1 === 4 || sum2 === 6) { // O operador ||, analisa as todas as condições entre parênteses e executa o código quando pelo menos uma for verdadeira
  console.log("sum1 is 4 or sum2 is 6!");
}



// =============== THERNARY OPERATOR ===============

// Com esse operador, podemos utilizar uma estrutura condicional de uma forma simplificada, com três operadores.

const test = 2 + 1;

// if (test === 3) {
//   number = 2;
// } else {
//   number = 4;
// }

// Mesma coisa que acima
let number = test === 3 ? 2 : 4;

// Após a igualdade, o primeiro número significa a condição, ou seja, test === 3?
// A interrogação é para o caso de ser verdadeiro e, o número após ela, é o valor que a variável number vai assumir.
// Os dois pontos são para o caso de ser falso e, o número após eles, é o valor que a variável number vai assumir, caso seja falso.

console.log(number);