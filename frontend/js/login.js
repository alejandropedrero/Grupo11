const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token, userId } = await response.json();
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    window.location.href = "/index";
  } else {
    const errorMessage = await response.text();
    console.error(errorMessage);
  }
});
