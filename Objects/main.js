// ============= OBJETOS =============

// Um objeto nada mais é do que uma variável que guarda vários valores dentro de propriedades

const person = { // Para declarar um objeto, primeiro é necessário declarar uma variável, e abrir chaves. Dentro das chaves ficaram as propriedades
    firstName: "Gabriel",
    lastName: "Silva",
    age: "20",
    hobbies: ["Dormir", "Jogar videogame", "Ler"],
};

const nome = person.firstName;
const sobrenome = person.lastName;
const idade = person.age;
const hobbies = person.hobbies;


console.log(nome)
console.log(sobrenome)
console.log(idade)
console.log(hobbies)
console.log(hobbies[2])