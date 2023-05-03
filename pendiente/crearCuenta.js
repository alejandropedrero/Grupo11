const submitBtn = document.getElementById("submitBtn");
const inputPassword = document.getElementById("password");
const inputEmail = document.getElementById("email");
const inputUserName = document.getElementById("username");

const passwordError = document.getElementById("passwordError");
const userNameError = document.getElementById("userNameError");
const emailError = document.getElementById("emailError");

let userData = {
  email: "",
  username: "",
};

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (isPasswordValid() && isUserNameValid() && isEmailValid()) {
    userData.email = inputEmail.value;
    userData.username = inputUserName.value;

    window.location.href = "index.html";
  }
});

function isPasswordValid() {
  // Restablecer el mensaje de error
  passwordError.textContent = "";
  let isValid = true;

  // Validación del input de la contraseña
  // En este caso el único requisito es que tenga al menos 8 caracteres
  if (inputPassword.value.length < 8) {
    passwordError.textContent =
      "La contaseña tiene que tener como mínimo 8 caracteres.";
    isValid = false;
  }

  return isValid;
}

function isUserNameValid() {
  userNameError.textContent = "";
  let isValid = true;

  if (inputUserName.value.length < 4) {
    userNameError.textContent =
      "Tu nombre de usuario debe tener al menos 4 caracteres.";
    isValid = false;
  }

  return isValid;
}

function isEmailValid() {
  emailError.textContent = "";
  let isValid = true;

  if (!inputEmail.checkValidity()) {
    emailError.textContent = "Introduce un formato de email correcto.";
    isValid = false;
  }

  return isValid;
}
