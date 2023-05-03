const imageElements = document.querySelectorAll(".persona-img");
const nameElements = document.querySelectorAll(".persona-name");
const usernameElements = document.querySelectorAll(".persona-username");

// Fetch the data from the API

fetch("https://randomuser.me/api/?results=7")
  .then((response) => response.json())
  .then((data) => {
    // Extract the required information from the API response
    const people = data.results.map((result) => ({
      imageUrl: result.picture.large,
      firstName: result.name.first,
      username: result.login.username,
    }));

    // Update the HTML elements with the extracted information
    people.forEach((person, index) => {
      imageElements[index].src = person.imageUrl;
      nameElements[index].textContent = person.firstName;
      usernameElements[index].textContent = person.username;
    });
  })
  .catch((error) => console.log(error));
