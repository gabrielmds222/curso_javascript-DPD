// A Programação Orientada a Objetos (POO) é um padrão de desenvolvimento Nesse processo de programação, são criadas coleções de objetos com estrutura e comportamentos próprios.


class Person { // Aqui começamos criando uma classe Person
    constructor(name, lastname) { // Dentro dessa classe tem a função constructor que executa ações e, foram passados dois parâmetros.
        this.name = name; // Aqui puxamos os parâmetros da função por meio do this
        this.lastname = lastname;
    }

    umMetodoQualquer() { // Dentro da classe é possível criar métodos também, esse no caso une os dois parÂmetros da função
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