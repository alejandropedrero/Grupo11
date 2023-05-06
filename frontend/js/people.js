const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../views/login.html";
  }
};

checkAuth();

const nameElements = document.querySelectorAll(".persona-name");
const emailElements = document.querySelectorAll(".persona-username");

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
    const people = data.map((result) => ({
      name: result.name,
      email: result.email,
    }));

    people.forEach((person, index) => {
      nameElements[index].textContent = person.name;
      emailElements[index].textContent = person.email;
    });
  })
  .catch((error) => console.log(error));
