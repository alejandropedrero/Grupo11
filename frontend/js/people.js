// Auth
const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../views/login.html";
  }
};

checkAuth();

// Fetch
const nameElements = document.querySelectorAll(".persona-name");
const emailElements = document.querySelectorAll(".persona-email");
const imgElements = document.querySelectorAll(".card-img-top");

const userId = localStorage.getItem("userId");

fetch(`http://localhost:3000/people`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-User-Id": userId,
  },
})
  .then((response) => response.json())
  .then((data) => {
    data.forEach((person, index) => {
      nameElements[index].textContent = person.name;
      emailElements[index].textContent = person.email;
      imgElements[index].src = `../img/${person.profile_picture}`;
    });
  })
  .catch((error) => console.log(error));

// Búsqueda
const searchInput = document.querySelector("#search-input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  cards.forEach((card) => {
    const personaName = card
      .querySelector(".persona-name")
      .textContent.toLowerCase();

    if (personaName.includes(searchTerm)) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
});

// Botón
const addFriendButtons = document.querySelectorAll(".btn.btn-light");

addFriendButtons.forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();

    const name =
      button.parentElement.querySelector(".persona-name").textContent;

    try {
      const response = await fetch("http://localhost:3000/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": userId,
        },
        body: JSON.stringify({ name }),
      });

      if (response.status === 200) {
        button.classList.remove("btn-light");
        button.classList.add("btn-success");
        button.textContent = "Añadido";
      }
    } catch (error) {
      console.error(error);
    }
  });
});
