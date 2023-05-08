// Auth
const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../views/login.html";
  }
};

checkAuth();

// Fetch
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
    console.log(response); // Add this line
    return response.json();
  })
  .then((data) => {
    const friends = data.map((result) => ({
      name: result.name,
      email: result.email,
      profile_picture: result.profile_picture, // Include the profile_picture property
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
  })
  .catch((error) => console.log(error));
