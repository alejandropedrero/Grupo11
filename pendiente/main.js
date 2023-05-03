const users = [
  // El primer objeto del array sería el usuario actual
  {
    email: "apedrerovega@gmail.com",
    username: "alejandropedrero",
  },
  {
    email: "albegosu@gmail.com",
    username: "albegosu",
  },
];

function deleteAccount(callback) {
  users.shift();
  console.log(users);
  // Después se redirige a la página principal
  callback();
}

// Función que elimina los datos de las tarjetas
const deleteData = () => {
  // Obtener todas las tarjetas
    const cards = document.querySelectorAll(".datos2");

  // Eliminar contenido de cada tarjeta
    cards.forEach(card => {
    card.innerHTML = "";
    });
};

function redirectLoginPage() {
  window.open("login.html");
}

const deleteBtn = document.getElementById("deleteBtn");

deleteBtn.addEventListener("click", () => {
    if(confirm("¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.")) {
    deleteData();
    deleteAccount(redirectLoginPage);
  }
});
