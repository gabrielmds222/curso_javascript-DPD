const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMsg = document.querySelector('.msg');

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === "" || emailValue === "") {
        errorMsg.textContent = "Por favor preencher o campo obrigatório"
        errorMsg.classList = "error";
        return;
    }
});