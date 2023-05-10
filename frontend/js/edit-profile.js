const currentUserId = localStorage.getItem("userId");

fetch(`http://localhost:3000/users/${currentUserId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-User-Id": currentUserId,
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const profileNameText = data.name;
    const profileEmailText = data.email;
    const profileNameElements = document.getElementById("profile-name");
    const profileEmailElements = document.getElementById("profile-email");

    profileNameElements.value = profileNameText;
    profileEmailElements.value = profileEmailText;
  })
  .catch((error) => {
    console.error("Error fetching profile data:", error);
  });

const editButton = document.getElementById("update-button");
editButton.addEventListener("click", editFuncion);

function editFuncion() {
  const profileNameElements = document.getElementById("profile-name");
  const profileEmailElements = document.getElementById("profile-email");

  const userInputData = {
    name: profileNameElements.value,
    email: profileEmailElements.value,
  };

  fetch(`http://localhost:3000/users/${currentUserId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": currentUserId,
    },
    body: JSON.stringify(userInputData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    })
    .catch((error) => {
      console.error("Error updating profile data:", error);
    });
  
  setTimeout(function () {
    window.location.href = "../views/profile.html";
  }, 500);
}
