// A Programação Orientada a Objetos (POO) é um padrão de desenvolvimento Nesse processo de programação, são criadas coleções de objetos com estrutura e comportamentos próprios.


class Person { // Aqui começamos criando uma classe Person
    constructor(name, lastname) { // Dentro dessa classe tem a função constructor que executa ações e, foram passados dois parâmetros.
        this.name = name; // Aqui puxamos os parâmetros da função por meio do this
        this.lastname = lastname;
    }

    umMetodoQualquer() { // Dentro da classe é possível criar métodos também, esse no caso une os dois parâmetros da função
        console.log(`${this.name} ${this.lastname}`);
    }

    static speak() { // Um método estático não precisa utilizar os parâmetros dentro da classe
        console.log('método estático')
    }
}

const person = new Person("Gabriel", "Medeiros"); // Aqui foi declarada uma variável que vai dar valores aos parâmetros da classe

console.log(person);
person.umMetodoQualquer();
Person.speak(); // Como speak é um método estático, ele é executado junto à classe.



// ==============  HERANÇA DE CLASSE  ==============

// É possível criar uma classe que herde as informações de outras classes da seguinte forma:

class Animal { // Primeiro temos uma classe normal, que  será a classe "pai".
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} made some noise!`); // O objetivo dessa classe é executar a mensagem "(animal) fez um barulho."
    }
  }

  const animal = new Animal("Simba"); // Essa variável declara o valor do parâmetro name, ou seja, o nome do animal é simba
  animal.speak();

// Mas como a classe Animal é muito ampla, se o objetivo for algo mais específico, é possível fazer da seguinte forma:

  class Dog extends Animal { // Foi criada uma classe Dog e, usada a propriedade extends, que permite essa classe utilizar todas as propriedades de outra classe
    constructor(name) {
      super(name); // A oalavra-chave super é uma forma de chamar o parâmetro utilizado na classe principal
    }
  
    speak() {
      console.log(`${this.name} barked!`); // Aqui o método speak foi sobrescrito para se adaptar caso o animal seja um cachorro
    }
  }
  
  const dog = new Dog("Bob");
  dog.speak();
