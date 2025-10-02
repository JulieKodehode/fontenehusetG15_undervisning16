/* 
ID-navn:
inputEmail
inputPassword
inputShowPassword
inputRememberUser
logInButton
displayResult
*/

const logInButton = document.querySelector("#logInButton");

function logInForm(event) {
    event.preventDefault(); // Ordet event er utgått men det funker
    console.log("Button clicked?");

    // Display Result
    const displayResult = document.querySelector("#displayResult");
    console.log(displayResult);

    // Input Email
    const inputEmail = document.querySelector("#inputEmail").value;
    console.log(inputEmail);
    const displayInputEmail = document.createElement("p");
    displayInputEmail.textContent = inputEmail;
    //displayResult.appendChild(displayInputEmail);

    // Input Password
    const inputPassword = document.querySelector("#inputPassword").value;
    console.log(inputPassword);
    const displayInputPassword = document.createElement("p");
    displayInputPassword.textContent = inputPassword;
    //displayResult.appendChild(displayInputPassword);

    // LogIn check
    const successfulLogIn = document.createElement("p");
    const failedLogIn = document.createElement("p");

    successfulLogIn.textContent = `Du har suksessfult logget inn på ${inputEmail}.`
    failedLogIn.textContent = "Epost eller passord er feil."

    if (inputEmail !== "" && inputPassword !== "") {
        displayResult.appendChild(successfulLogIn);
    } else {
        displayResult.appendChild(failedLogIn);
    }
}

logInButton.addEventListener("click", logInForm);