// O loop de programação é como fazer a mesma coisa repetidas vezes. Existem duas principais formas de se criar um loop, o while e o for.


// ==================== WHILE ====================

// Um loop com while executa um código enquanto uma condição for verdadeira. É melhor utilizado em loops que não se sabe a quantidade de repetições


let contador = 0;  // Declaramos uma variável

while (contador < 10) { // Adiciona uma condição, nesse caso, enquanto o valor da variável for menor do que 10
  console.log("contador é menor do que 10!"); // Enquanto a condição for verdadeira, deve-se imprimir a mensagem.
  contador += 1
}


// ==================== FOR ====================

// A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula,
//  seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
// O for é melhor utilizado quando já se sabe a quantidade de repetições.

for (let cont = 0; cont < 10; cont ++) { // A primeira expressão do for declara uma variável com um valor inicial que nesse caso é 0
    console.log(cont);               // A segunda expressão indica o fim do íntervalo, nesse caso o intervalo é de 0 à 9
}                                    // A terceira expressão indica que a variável do for vai subir de 1 em 1

// O for acima vai imprimir os valores de 0 à 9


// já no caso abaixo, o for vai imprimir os números de 10 a 1 em ordem decescente, por conta do valor da terceira expressão. 

for (let cont = 10; cont > 0; cont --) { 
    console.log(cont);               
} 



// ==================== FOR com Listas ====================

// É possível criar um loop dentro de uma lista, por exemplo:

const fruits = ['banana', 'maçã', 'abacaxi', 'laranja'];

// Digamos que o objetivo seja fazer um loop que percorra os valores da lista, ou seja, de 0 a 3 e, mostre o nome das frutas em sequência

for (let i = 0; i < fruits.length; i++) { // Nesse exemplo foi usada a variável 'i', no intervalo de 0 até o tamanho da lista e,
    console.log(fruits[i]); // com o 'i' entre colchetes, o nome de cada fruta será mostrado em sequência
}


                // ======== FOR OF ========

// Uma forma mais eficiente de executar o loop acima é utilizando a estrutura for of

for (let i of fruits) { // Dessa forma, dizemos que enquanto o 'i' estiver dentro da lista, 
    console.log(i)      // Deve-se exibir o valor de 'i'
}


                // ======== FOR EACH ========

// Outra forma é com o método forEach que executa uma função callback para cada elemento de uma lista

fruits.forEach(function(fruta) { // Ou seja, para cada elemento da lista ela vai executar a função.
    console.log(fruta);
}) 


// Com esse método também é possível imprimir os índices de cada elemento

fruits.forEach(function(fruta, index) { // Além de pedir a função que imprime cada fruta, também pede os índices
    console.log(index);
    console.log(fruta);
})


                // ======== FOR IN ========

// Essa forma de usar o for é mais utilizada para repetições com objetos.
// Por exemplo:

const person = {
    name: "Jane",
    age: 21,
    pet: "Dog"
  };
  
  for (property in person) {  // Nessa condição, a 'property' vai percorrer o objeto e mostrar todos os dados em ordem
    console.log(property); // Nesse primeiro caso, será mostrado apenas as propriedades como 'name', 'age', por exemplo.
    console.log(person[property]); // Já aqui, serão mostrado os dados como, 'jane', '21'.
  }