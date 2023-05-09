checkAuth();
fetchCurrentUser();
fetchFriends();

function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../views/login.html";
  }
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

function fetchFriends() {
  const nameElements = document.querySelectorAll(".friend-name");
  const emailElements = document.querySelectorAll(".friend-email");

  const userId = localStorage.getItem("userId");

  fetch(`http://localhost:3000/friends`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "x-user-id": localStorage.getItem("userId"),
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      const friends = data.map((result) => ({
        name: result.name,
        email: result.email,
        profile_picture: result.profile_picture,
      }));

      const container = document.querySelector(".row");

      friends.forEach((friend) => {
        const html = `
          <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div class="card">
              <img src="../img/${friend.profile_picture}" class="card-img-top w-25 h-25 rounded-circle mx-auto object-fit-cover mt-3" alt="...">
              <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title persona-name">${friend.name}</h5>
                <p class="persona-email">${friend.email}</p>
                <a href="#" class="btn btn-light" id="add-friend-btn">Eliminar amigo</a>
              </div>
            </div>
          </div>
        `;
        container.insertAdjacentHTML("beforeend", html);
      });

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
    })
    .catch((error) => console.log(error));
}
