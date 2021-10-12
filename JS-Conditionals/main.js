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

if (sub <= 1) { // Nesse caso, o valor do if não será o correto,
    console.log('False'); 
}
else {  
    console.log('True');
}