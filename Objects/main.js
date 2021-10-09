// ============= OBJETOS =============

// Um objeto nada mais é do que uma variável que guarda vários valores dentro de propriedades

const person = { // Para declarar um objeto, primeiro é necessário declarar uma variável, e abrir chaves. Dentro das chaves ficaram as propriedades
    firstName: "Gabriel",
    lastName: "Silva",
    age: "20",
    hobbies: ["Dormir", "Jogar videogame", "Ler"],
};

// Em cada uma das variáveis abaixo, é pego o valor de uma das propriedades do objeto utilizando a seguinte estrutura:

// const nome = person.firstName;
// const sobrenome = person.lastName;
// const idade = person.age;
// const hobbies = person.hobbies;

// A segunda forma de pegar os valores de um objeto é como o exemplo abaixo:
//          Essa forma é chamada de DESTRUCTURING

const {firstName, lastName, age, hobbies} = person

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(hobbies)