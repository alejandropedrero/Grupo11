checkAuth();
fetchCurrentUser();
logOut();

function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "/login";
  }
}

function fetchCurrentUser() {
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

function logOut() {
  const logoutLink = document.querySelector(".log-out");
  logoutLink.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "../views/login.html";
  });
}
