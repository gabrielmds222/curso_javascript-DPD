// ============== TRUTHY OU FALSY ==============

// Os valores thuthy e falsy correspondem aos valores booleanos de true ou false
// Agora veremos alguns casos em que o valor é false:

const x = ''; // variável sem valor.
// FALSE

const y = 0; // variável com valor igual a 0.
// FALSE

const a = null; // variáveis nulas.
const b = undefined; // Ou indefinidas
// FALSE


// E agora alguns casos de valor true.

const list = []; // Uma lista sempre é true
// TRUE
const object = {}; // Um objeto também sempre é true
// TRUE



// ============== VERIFICANDO SE É TRUTHY OU FALSY ==============

// Uma forma de verificar o valor de algo no javascript é utilizando o operador (!!)
// Por exemplo, vamos verificar as variáveis do tópico anterior:

console.log(!!x); // x é uma variável sem valor, então será false

console.log(!!list); // list é uma lista, então será true



// ============== INVERTENDO O VALOR ==============

// Para inverter o valor de uma variável, ao invés de utilizar o operador (!!), utiliza-se apenas uma exclamação (!)
// Como no exemplo abaixo:

console.log(!b); // A variável b agora deixa de ser false, para ser true.

console.log(!object); // E com a variável object acontece o inveso.
