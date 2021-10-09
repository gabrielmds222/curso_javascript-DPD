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



// ============= ADICIONANDO OBJETOS DENTRO DE OBJETOS =============

// Vamos aprender agora formas de adicionar novos objetos dentro de um objeto
// Utilizaremos esse exemplo:

const person2 = {
    name:  "Fernanda",
    idade: 20,
    passsatempo: ['Estudar', 'Assistir', 'Conversar'],
    pet: {       // A primeira forma de adicionar um objeto novo a um já existente é dessa forma, assim a propriedade pet carrega outras propriedades
        type: "dog",
        name: "Max",
        idade: 8,
    },
};


// A OUTRA FORMA DE ADICIONAR UM OBJETO É A SEGUINTE:

// person2.pet = "Max"

// console.log(person2)


// ============= DESTRUCTURING EM NOVOS OBJETOS =============

// Para usar o destructuring no exemplo acima em que há um objeto dentro de outro, é necessário seguir a seguinte estrutura

// const {name: primeironome, } // É possível dar um nome especial a uma propriedade de objeto dessa forma

const {
    name,
    idade,
    passsatempo,
    pet: {type, name: petName, idade: petAge}, // No caso desse objeto dentro de outro, deve-se fazer um destructuring dentro de outro
  } = person2;

  console.log(name);
  console.log(idade);
  console.log(passsatempo);
  console.log(type);
  console.log(petName);
  console.log(petAge);



// ============= LISTA COM VÁRIOS OBJETOS =============