const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMsg = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
        errorMsg.textContent = "Por favor preencher o campo obrigatório" // O text content permite adicionar uma mensagem por meio do javascript
        errorMsg.classList = "error"; // O método "classList" acessa classes do arquivo css

        setTimeout(() => { // O "setTimeout" Executa uma ação após um certo período de tempo
            errorMsg.textContent = "";
            errorMsg.classList = "";
          }, 3000); // O período de tempo dessa função será de 3 segundos
          return;
    }

    const li = document.createElement("li"); // O "createElement" nos permite criar novos elementos que não estão no arquivo html
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br /> Email: ${emailValue}`; // O "innerHTML" permite escrever em HTML no arquivo javascript

    items.appendChild(li); // O método "appendChild" vai adicionar um elemento filho ao elemento principal


    nameInput.value = "";
    emailInput.value = "";
});