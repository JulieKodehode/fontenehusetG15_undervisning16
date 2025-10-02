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

    // H
    const inputEmail = document.querySelector("#inputEmail").value;
    console.log(inputEmail);
    const inputPassword = document.querySelector("#inputPassword").value;
    console.log(inputPassword);
    // Sjekkboks sjekk vil ikke funke uten en betingelse-sjekk (if/else statement)
    //const inputShowPassword = document.querySelector("#inputShowPassword").value;
    //console.log(inputShowPassword);

    const displayResult = document.querySelector("#displayResult");
    console.log(displayResult);

    // L
    const displayInputEmail = document.createElement("p");
    const displayInputPassword = document.createElement("p");
    const successfulLogIn = document.createElement("p");
    const failedLogIn = document.createElement("p");

    // M
    displayInputEmail.textContent = inputEmail;
    displayInputPassword.textContent = inputPassword;
    successfulLogIn.textContent = "Du har suksessfult logget inn på " + inputEmail;
    failedLogIn.textContent = "Epost eller passord er feil."

    // M & S
    if (inputEmail !== "" && inputPassword !== " ") {
        displayResult.appendChild(successfulLogIn);
    } else {
        displayResult.appendChild(failedLogIn);
    }

    // S
    displayResult.appendChild(displayInputEmail);
    displayResult.appendChild(displayInputPassword);
}

logInButton.addEventListener("click", logInForm);