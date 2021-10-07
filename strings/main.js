// Nesse arquivo será feito o estudo do uso de strings no javascript

// strings são arquivos de texto que são usados entre aspas

const message = 'olá mundo'

// Agora veremos alguns comandos relacionados à strings


// ============== length ==============


// O comando .length mostra a quantidade de caracteres de uma string incluido os espaços

console.log(message.length) // O comando console.log, mostra o resultado do código no navegador




// ============== Unir strings ==============


const nome = 'Paulo'
const sobrenome = 'Soares'

// Para unir essas duas strings e fazê-las aparecerem em sequência, tem-se alguns métodos
// como por exemplo:

console.log('Meu nome é ' + nome + ' ' + sobrenome)
console.log(`Meu nome é ${nome} ${sobrenome}`)
console.log(`Meu nome é ${nome.toUpperCase()} ${sobrenome.toUpperCase()}`) //Nesse caso o comando .touppercase() faz com que todas as letras da string fiquem em maiúsculo
console.log(`Meu nome é ${nome.toLowerCase()} ${sobrenome.toLowerCase()}`) //Nesse caso o comando .tolowercase() faz com que todas as letras da string fiquem em minúsculo
