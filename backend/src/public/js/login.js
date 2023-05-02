document.addEventListener("DOMContentLoaded", () => {
  const password = localStorage.getItem("password");
  if (password) {
    console.log("The password is:", password);
  } else {
    console.log("No password found in localStorage.");
  }
});
