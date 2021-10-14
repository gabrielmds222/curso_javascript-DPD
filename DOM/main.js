// O DOM (Modelo de Objeto de Documentos), é uma forma de por meio do javascript, selecionar e manipular o documento da aplicação e seus elementos


// =============== SELECIONAR UM ELEMENTO ===============

// No arquivo html temos esse elemento: <h1 id="add-user">Add User</h1>. E podemos seleciona-lo por meio do javascript do seguinte modo:

const addUserText = document.getElementById("add-user"); // Aqui foi criada uma variável e, usado o método getElementById, que seleciona o elemento cujo ID for igual ao entre parênteses

console.log(addUserText);

// Outra forma de selecionar um elemento é utilizando o querySelector:

const item = document.querySelector("#add-user"); // O querySelector pode selecionar outros tipos de elementos além do ID, para isso deve usar os sinais como "#" ou ".", da mesma forma que no css

console.log(item);



// =============== SELECIONAR MAIS DE UM ELEMENTO ===============

// Os métodos acima funcionam apenas para selecionar um elemento por vez,
// Para selecionar mais de um elementos, temos alguns métodos:

const allItems1 = document.querySelectorAll(".items .item"); // Esse método funciona como o querySelector, porém ele pode selecionar mais elementos

const allItems2 = document.getElementsByClassName("item"); // Esse outro métodos vai selecionar todos os elementos que pertençam a classe escrita nos parênteses

const allItems3 = document.getElementsByTagName("li"); // Esse último não seleciona ID ou classes, mas sim as tags do html

// Dessas três formas, os elementos selecionados aparecem em uma espécie de lista, então é possível utilizar as propríedades já vistas para listas.

console.log(allItems1);
console.log(allItems2);
console.log(allItems3);



// =============== REMOVER ELEMENTOS ===============

// A primeira manipulação que faremos nos elementos é remover um deles, por exemplo
// Remover algum dos itens da lista de itens

const items = document.querySelector(".items"); // Nesse caso selecionamos com o querySelector e, assim foram selecionador todos os elementos com classe "items"

// items.remove(); // O método remove() vai remover todos os elementos.

// items.firstElementChild.remove(); // Adicionando o firstElementChild, apenas o primeiro elemento será removido

// items.lastElementChild.remove(); // Adicionando o lastElementChild, apenas o ultimo elemento será removido



// =============== ALTERANDO ELEMENTOS ===============

// Para acessar elementos e alterá-los, utiliza-se o "children"

items.children[0].textContent = "Item Um"; // O "children" vai representar os elementos dentro de "items" e assim pode-se alterá-los

items.lastElementChild.innerHTML = "<h1>Hello world!</h1>"; // Com o "lastElementChild", vai ser selecionado o ultimo elemento "children" e, o "innerHTML", permite alterar o elemento. Até escrevendo um novo html


// =============== ESTILIZANDO ELEMENTOS ===============

// Também podemos estilizar elementos por meio do javascript, caso for necessário uma mudança de estilização

const button = document.querySelector(".btn"); // Aqui estamos selecionando o botão do formulário

button.style.background = "red"; // E aqui utilizamos o "style" para estilizar algo, nesse caso o "background"

button.style.color = "black"; // Já aqui a mudança será na "color"