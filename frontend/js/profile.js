const currentUserId = localStorage.getItem("userId");

fetch(`http://localhost:3001/users/${currentUserId}`, {
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
    const profilePictureUrl = `../img/${data.profile_picture}`;
    const profileNameText = data.name;
    const profileEmailText = data.email;
    const profilePictureElements = document.getElementsByClassName(
      "card-img-top"
    );
    const profileNameElements = document.getElementById(
      "profile-name"
    );
    const profileEmailElements = document.getElementById(
      "profile-email"
    );
    for (const imgElement of profilePictureElements) {  //es como un forEach
      imgElement.src = profilePictureUrl;
    }
    profileNameElements.innerHTML = profileNameText;
    profileEmailElements.innerHTML = profileEmailElements.innerHTML + profileEmailText;
    
  })
  .catch((error) => {
    console.error("Error fetching profile data:", error);
  });
