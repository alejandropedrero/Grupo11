validateRegister();

function validateRegister() {
  document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register-form");
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const nameInput = document.getElementById("name-input");
    const errorContainer = document.getElementById("error-container");
    const modal = new bootstrap.Modal(document.getElementById("registerModal"));

    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault(); //Corta la ejecución, evitando que finalice el registro sin comprobar el if primero.

      const email = emailInput.value;
      const password = passwordInput.value;
      const name = nameInput.value;

      if (!email || !password || !name) {
        errorContainer.innerHTML = "Debes completar todos los campos";
        return;
      }

      console.log("emailInput:", emailInput);

      try {
        const response = await fetch("http://localhost:3000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, name }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log(data.message);
          modal.show(); //Modal con mensaje de registro exitoso
          setTimeout(function () {
            window.location.href = "./login.html";
          }, 2000);
        } else {
          console.log(data.error);
          errorContainer.innerHTML = data.error;
        }
      } catch (error) {
        console.error(error);
        errorContainer.innerHTML = "Error de conexión";
      }
    });
  });
}
