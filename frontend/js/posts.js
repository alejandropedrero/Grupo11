const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userId = localStorage.getItem("userId");
  const comment = document.getElementById("comment").value;

  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Id": userId,
    },
    body: JSON.stringify({
      comment,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const postContainer = document.getElementById("publicaciones-container");

      const postElement = document.createElement("div");
      postElement.classList.add("post");

      const postHeaderElement = document.createElement("div");
      postHeaderElement.classList.add("post-header");
      postHeaderElement.innerHTML = `
          <img
            src="http://example.com/profile/${data.username}.jpg"
            alt="${data.username}"
            class="user-profile-picture"
          >
          <h4>${data.username}</h4>
          <p>${data.timestamp}</p>
        `;
      postElement.appendChild(postHeaderElement);

      const postBodyElement = document.createElement("div");
      postBodyElement.classList.add("post-body");
      postBodyElement.innerHTML = `
          <p>${data.text}</p>
        `;
      postElement.appendChild(postBodyElement);

      postContainer.prepend(postElement);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error creating post:", error);
    });
});
