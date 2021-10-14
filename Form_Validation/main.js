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
        errorMsg.textContent = "Por favor preencher o campo obrigatório"
        errorMsg.classList = "error";

        setTimeout(() => {
            errorMsg.textContent = "";
            errorMsg.classList = "";
          }, 3000);
          return;
    }

    const li = document.createElement("li");
    li.classList = "item";
    li.innerHTML = `Nome: ${nameValue}<br /> Email: ${emailValue}`;

    items.appendChild(li);
});