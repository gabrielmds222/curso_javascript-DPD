// Os eventos são basicamente um conjunto de ações que são realizadas em um determinado elemento da página web,
// seja ele um texto, uma imagem, ou uma div por exemplo

// Um exemplo de evento é: Um usuário clica em um botão sem preencher um dos espaços do formulário, nesse deve aparecer um aviso na aplicação

// =============== CRIANDO EVENTO ===============

// Vamos primeiro criar um evento para quando o usuário clicar no botão

const submitButton = document.querySelector("#submit-button"); // Primeiro selecionamos o elemento no DOM
const nameInput = document.querySelector("#name"); // Selecionar input 1
const emailInput = document.querySelector("#email"); // Selecionar input 2
const myForm = document.querySelector("#my-form"); // Essa variável vai servir para podermos estilizar nosso formulário


submitButton.addEventListener("click", function(event) { // O método "addEventListener", vai ser adicionar o evento e, dentro deles tem dois parâmetros,
                                    // O "click", que indica que o evento vai acontecer quando o botão for clicado e, a function que vai dizer o que vai contecer a partir do click 
    event.preventDefault(); // O método "preventDefault" vai impedir o comportamento padrão do botão
    // console.log("clicked!"); // Nesse caso vai aparecer essa mensagem

    const nameValue = nameInput.value; // Nesse caso, essa variável está pegando o "value", ou seja o valor atribuido ao input, que é o que o usuário digitar
    const emailValue = emailInput.value; // Mesma coisa nesse caso

    // console.log(nameValue);
    // console.log(emailValue);

    // Para o caso de usuário não preencher algum dos inputs, podemos criar uma mensagem para alertá-lo
    if (nameValue === "" || emailValue === "") {
        return alert("Please fill out all the fields!");
      }
});


nameInput.addEventListener("change", function (event) { // Esse evento utiliza agora o "change", ou seja, o evento ocorrerá a partir de uma mudança no nameInput
    console.log(event.target.value); // O "target", vai pegar o valor di nameInput toda vez que ele for alterado e vai executá-lo
});