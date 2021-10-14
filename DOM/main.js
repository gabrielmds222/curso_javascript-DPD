// O DOM (Modelo de Objeto de Documentos), é uma forma de por meio do javascript, selecionar e manipular o documento da aplicação e seus elementos

// No arquivo html temos esse elemento: <h1 id="add-user">Add User</h1>. E podemos seleciona-lo por meio do javascript do seguinte modo:

const addUserText = document.getElementById("add-user"); // Aqui foi criada uma variável e, usado o método getElementById, que seleciona o elemento cujo ID for igual ao entre parênteses

console.log(addUserText);

// Outra forma de selecionar um elemento é utilizando o querySelector:

const item = document.querySelector("#add-user"); // O querySelector pode selecionar outros tipos de elementos além do ID, para isso deve usar os sinais como "#" ou ".", da mesma forma que no css

console.log(item);