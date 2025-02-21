// Header
//---------------------------------------------------------------------------
const headerContainer = document.createElement("header");
headerContainer.id = "header-container";

const header = document.createElement("h1");
header.id = "header";
header.textContent = "Validating Web Forms";

headerContainer.appendChild(header);

document.body.appendChild(headerContainer);
//---------------------------------------------------------------------------

// Form
//---------------------------------------------------------------------------
const formContainer = document.createElement("div");
formContainer.id = "form-container";

const firstNameInputContainer = document.createElement("div");
firstNameInputContainer.id = "first-name-input-container";

const firstNameP = document.createElement("p");
firstNameP.id = "first-name-paragraph";
firstNameP.textContent = "First Name";

const firstNameInput = document.createElement("input");
firstNameInput.id = "first-name-input";
firstNameInput.type = "text";
firstNameInput.placeholder = "John";
firstNameInput.required = true;
firstNameInput.minLength = 3;
firstNameInput.maxLength = 16;

const firstNameError = document.createElement("p");
firstNameError.id = "first-name-error";
firstNameError.textContent = "First name must be alphanumeric and contain 3 - 16 characters";

firstNameInputContainer.appendChild(firstNameP);
firstNameInputContainer.appendChild(firstNameInput);
firstNameInputContainer.appendChild(firstNameError);

const lastNameInputContainer = document.createElement("div");
lastNameInputContainer.id = "last-name-input-container";

const lastNameP = document.createElement("p");
lastNameP.id = "last-name-paragraph";
lastNameP.textContent = "Last Name";

const lastNameInput = document.createElement("input");
lastNameInput.id = "last-name-input";
lastNameInput.type = "text";
lastNameInput.placeholder = "Doe";
lastNameInput.required = true;
lastNameInput.minLength = 3;
lastNameInput.maxLength = 16;

const lastNameError = document.createElement("p");
lastNameError.id = "last-name-error";
lastNameError.textContent = "Last name must be alphanumeric and contain 3 - 16 characters";

lastNameInputContainer.appendChild(lastNameP);
lastNameInputContainer.appendChild(lastNameInput);
lastNameInputContainer.appendChild(lastNameError);

const emailInputContainer = document.createElement("div");
emailInputContainer.id = "email-input-container";

const emailP = document.createElement("p");
emailP.id = "email-paragraph";
emailP.textContent = "Email";

const emailInput = document.createElement("input");
emailInput.id = "email-input";
emailInput.type = "email";
emailInput.placeholder = "example@mail.com";
emailInput.required = true;

const emailError = document.createElement("p");
emailError.id = "email-error";
emailError.textContent = "Email must be a valid email address, e.g. example@example.com";

emailInputContainer.appendChild(emailP);
emailInputContainer.appendChild(emailInput);
emailInputContainer.appendChild(emailError);

const passwordInputContainer = document.createElement("div");
passwordInputContainer.id = "password-input-container";

const passwordP = document.createElement("p");
passwordP.id = "password-paragraph";
passwordP.textContent = "Password";

const passwordInput = document.createElement("input");
passwordInput.id = "password-input";
passwordInput.type = "password";
passwordInput.placeholder = "Password";
passwordInput.required = true;
passwordInput.minLength = 6;
passwordInput.maxLength = 20;

const passwordError = document.createElement("p");
passwordError.id = "password-error";
passwordError.textContent = "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters";

passwordInputContainer.appendChild(passwordP);
passwordInputContainer.appendChild(passwordInput);
passwordInputContainer.appendChild(passwordError);

const telephoneInputContainer = document.createElement("div");
telephoneInputContainer.id = "telephone-input-container";

const telephoneP = document.createElement("p");
telephoneP.id = "telephone-paragraph";
telephoneP.textContent = "Telephone";

const telephoneInput = document.createElement("input");
telephoneInput.id = "telephone-input";
telephoneInput.type = "tel";
telephoneInput.placeholder = "012-345-6789";
telephoneInput.required = true;
telephoneInput.minLength = 11;
telephoneInput.maxLength = 12;

const telephoneError = document.createElement("p");
telephoneError.id = "telephone-error";
telephoneError.textContent = "Telephone must be a valid telephone number (11 digits and 333-333-3334)";

telephoneInputContainer.appendChild(telephoneP);
telephoneInputContainer.appendChild(telephoneInput);
telephoneInputContainer.appendChild(telephoneError);

const bioInputContainer = document.createElement("div");
bioInputContainer.id = "bio-input-container";

const bioP = document.createElement("p");
bioP.id = "bio-paragraph";
bioP.textContent = "Bio";

const bioInput = document.createElement("input");
bioInput.id = "bio-input";
bioInput.type = "text";
bioInput.placeholder = "IT Technician and part-time superhero";
bioInput.required = true;
bioInput.minLength = 8;
bioInput.maxLength = 50;

const bioError = document.createElement("p");
bioError.id = "bio-error";
bioError.textContent = "Bio must contain only lowercase letters, underscores, hyphens and 8 - 50 characters";

bioInputContainer.appendChild(bioP);
bioInputContainer.appendChild(bioInput);
bioInputContainer.appendChild(bioError);

const containerArr = [firstNameInputContainer, lastNameInputContainer, emailInputContainer, passwordInputContainer, telephoneInputContainer, bioInputContainer];

containerArr.forEach(container => {
    container.className = "input-container";
    container.children[0].className = "input-title";
    container.children[1].className = "form-input";
    container.children[2].classList.add("error-message", "invisible");

    container.children[1].addEventListener("input", e => {
        validateInput(container, e.target.value);
    });

    formContainer.appendChild(container);
});

telephoneInput.addEventListener("keydown", e => {
    const input = e.target;
    const key = e.key;
    const value = input.value;

    if (key === 'Backspace' && (value.length === 4 || value.length === 8)) {
        input.value = value.slice(0, -1); // Remove hyphen when backspacing
        e.preventDefault();
    }
});

const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";

const button = document.createElement("button");
button.id = "submit-button";
button.type = "submit";
button.textContent = "Submit";
button.disabled = true;

button.addEventListener("mousedown", () => {
    button.classList.add("clicked-button");
});
button.addEventListener("mouseup", () => {
    button.classList.remove("clicked-button");
});

buttonContainer.appendChild(button);

formContainer.appendChild(buttonContainer);

document.body.appendChild(formContainer);
//---------------------------------------------------------------------------

// Functions
//---------------------------------------------------------------------------
function validateInput(container, value) {
    let regex;
    const input = container.children[1];
    const errorMessage = container.children[2];

    switch (container.id.split("-")[0]) {
        case "first":
        case "last":
            regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/;
            if (!regex.test(value) || value.length < 3) {
                errorMessage.classList.remove("invisible");
                input.classList.remove("correct-input");
                input.classList.add("wrong-input");
            } else {
                errorMessage.classList.add("invisible");
                input.classList.remove("wrong-input");
                input.classList.add("correct-input")
            }
            break;
        case "email":
            regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regex.test(value)) {
                errorMessage.classList.remove("invisible");
                input.classList.remove("correct-input");
                input.classList.add("wrong-input");
            } else {
                errorMessage.classList.add("invisible");
                input.classList.remove("wrong-input");
                input.classList.add("correct-input")
            }
            break;
        case "password":
            regex = /^[a-zA-Z0-9@_-]+$/;
            if (!regex.test(value) || value.length < 6) {
                errorMessage.classList.remove("invisible");
                input.classList.remove("correct-input");
                input.classList.add("wrong-input");
            } else {
                errorMessage.classList.add("invisible");
                input.classList.remove("wrong-input");
                input.classList.add("correct-input")
            }
            break;
        case "telephone":
            regex = /^\d{3}-\d{3}-\d{4}$/;
            if (!regex.test(value) || value.length < 11) {
                errorMessage.classList.remove("invisible");
                input.classList.remove("correct-input");
                input.classList.add("wrong-input");
            } else {
                errorMessage.classList.add("invisible");
                input.classList.remove("wrong-input");
                input.classList.add("correct-input")
            }

            if (((value.length == 3 && value.length <= 6) || (value.length == 7 && value.length < 11)) && value[value.length - 1] != "-") {
                input.value += "-";
            }

            break;
        case "bio":
            regex = /^[a-z _-]+$/;
            if (!regex.test(value) || value.length < 8) {
                errorMessage.classList.remove("invisible");
                input.classList.remove("correct-input");
                input.classList.add("wrong-input");
            } else {
                errorMessage.classList.add("invisible");
                input.classList.remove("wrong-input");
                input.classList.add("correct-input")
            }
            break;
    }

    const validatedInputs = document.getElementsByClassName("correct-input");
    if (validatedInputs.length == 6) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}
//---------------------------------------------------------------------------

// Styles
//---------------------------------------------------------------------------
const stylesheet = document.createElement("style");
stylesheet.textContent = `
    body {
        color: #2f2f2f;
    }

    #header-container {
        display: inline-block;
        text-align: center;
        width: 100%;
        margin: 5px 0px;
    }

    #form-container {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        align-content: center;
        justify-content: center;
    }

    .name-container {
        display: flex;
        flex-direction: column;
    }

    .input-container {
        margin: -10px auto;
        width: 33%;
        text-align: left;
    }

    .input-title {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 12px;
    }

    .form-input {
        width: 100%;
        border: 1px solid #c6c6c6;
        border-radius: 5px;
        padding: 12px 15px;
        font-size: 22px;
        
    }

    .error-message {
        color: #f89b11;
        font-weight: 600;
        font-size: 17px;
        text-align: center;
        margin-top: 20px;
    }

    .invisible { 
        visibility: hidden;
        margin-top: 0;
        height: 0;
    }

    #button-container {
        display: inline-block;
        margin-top: 5px;
        text-align: left;
        width: 33%;
    }

    #submit-button {
        background-color: #35b86d;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        padding: 15px 50px;
        font-size: 22px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .clicked-button {
        background-color: #2e9c5b !important;
        transition: background-color 0.3s ease;
    }

    #submit-button:disabled {
        background-color: #3d3d3d;
        cursor: not-allowed;
        transition: background-color 0.3s ease;
    }

    .wrong-input {
        outline: none;
        border:1px solid rgb(255, 0, 0) !important;
        box-shadow: 0 0 5px rgb(255, 0, 0);
        transition: box-shadow 0.2s ease;
    }

    .correct-input {
        outline: none;
        border: 2px solid #35b86d !important;
    }
`;
document.head.appendChild(stylesheet);
//---------------------------------------------------------------------------
