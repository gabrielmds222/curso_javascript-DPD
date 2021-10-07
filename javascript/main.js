// Nesse arquivo será feito o estudo da diferença entre as formas
// de se declarar variáveis no javascript


// ===============================
// ============= var =============
// ===============================


// Essa é a primeira forma de se declarar uma variável, utilizando var
var msg = 'olá mundo'

alert(msg)

// Porém é a menos utilizada pois pode ser alterada mesmo de fora, como neste caso

if (1 + 1 == 2) {
    var message = 'true'
}

alert (message)