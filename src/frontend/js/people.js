const nameElements = document.querySelectorAll(".persona-name");
const emailElements = document.querySelectorAll(".persona-username");

// Fetch the data from the local API

fetch("http://localhost:3000/users/")
  .then((response) => response.json())
  .then((data) => {
    // Extract the required information from the API response
    const people = data.map((result) => ({
      name: result.name,
      email: result.email,
    }));

    console.log(people);

    // Update the HTML elements with the extracted information
    people.forEach((person, index) => {
      nameElements[index].textContent = person.name;
      emailElements[index].textContent = person.email;
    });
  })
  .catch((error) => console.log(error));
