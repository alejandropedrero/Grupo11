checkAuth();

function checkAuth() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../views/login.html";
  }
}

const formatDate = (dateString) => {
  const postDate = new Date(dateString);
  const formattedDate = postDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  return formattedDate;
};

const appendPost = (post) => {
  const container = document.getElementById("publicaciones-container");
  const postElement = document.createElement("div");
  postElement.className = "card my-2";
  postElement.innerHTML = `
    <div class="card-body">
      <p class="card-text">${post.text}</p>
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">${post.num_likes} likes</small>
        <small class="text-muted">${post.num_comments} comments</small>
        <small class="text-muted">${formatDate(post.post_date)}</small>
      </div>
    </div>
  `;
  container.appendChild(postElement);
};

const handlePost = async () => {
  const text = document.getElementById("comment").value;
  const response = await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-user-id": localStorage.getItem("userId"),
    },
    body: JSON.stringify({ text }),
  });
  if (response.ok) {
    const post = await response.json();
    appendPost(post);
  } else {
    console.error(response.statusText);
  }
};

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", handlePost);
