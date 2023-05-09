checkAuth();
fetchCurrentUser();
fetchPeople();
searchPeople();
addFriend();

function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../views/login.html";
  }
}

function fetchPeople() {
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
}

function searchPeople() {
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
}

function fetchCurrentUser() {
  // Obtener imagen de perfil del propio usuario en la navbar
  const userId = localStorage.getItem("userId");
  fetch(`http://localhost:3000/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": userId,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const profilePictureUrl = `../img/${data.profile_picture}`;
      const profilePictureElements = document.querySelectorAll(
        ".user-profile-picture"
      );
      for (const imgElement of profilePictureElements) {
        imgElement.src = profilePictureUrl;
      }
    })
    .catch((error) => {
      console.error("Error fetching profile:", error);
    });
}

function addFriend() {
  const addFriendButtons = document.querySelectorAll(".btn.btn-light");
  const userId = localStorage.getItem("userId");

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
}
