const submitBtn = document.getElementById("submitBtn");
const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");
const passwordError = document.getElementById("passwordError");
const emailError = document.getElementById("emailError");

const usersEmails = ["apedrerovega@gmail.com", "albegosu@gmail.com"];

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (isPasswordValid() && isEmailValid()) {
    window.location.href = "index.html";
  }
});

function isEmailValid() {
  emailError.textContent = "";
  let isValid = true;

  if (!usersEmails.includes(inputEmail.value)) {
    emailError.textContent = "Usuario no encontrado.";
    isValid = false;
  }

  return isValid;
}

function isPasswordValid() {
  // Restablecer el mensaje de error
  passwordError.textContent = "";
  let isValid = true;

  // Validación del input de la contraseña
  // En este caso el único requisito es que tenga al menos 8 caracteres
  if (inputPassword.value.length < 8) {
    passwordError.textContent =
      "Recuerda que tu contraseña tiene como mínimo 8 caracteres.";
    isValid = false;
  }

  return isValid;
}
