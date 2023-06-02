import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarAlt from "../components/NavbarAlt";
import SearchBar from "../components/SearchBar";
import "../App.css";

const SearchUsers = () => {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);
  const [buttonStatuses, setButtonStatuses] = useState([]);

  const fetchData = async () => {
    try {
      const peopleResponse = await fetch("http://localhost:3001/people", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": localStorage.getItem("userId"),
        },
      });
      const peopleData = await peopleResponse.json();

      const peopleWithProfilePictures = await Promise.all(
        peopleData.map(async (person) => {
          const userProfileResponse = await fetch(
            `http://localhost:3001/users/${person.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const userProfileData = await userProfileResponse.json();
          return {
            ...person,
            profile_picture: userProfileData.profile_picture,
          };
        })
      );

      setPeople(peopleWithProfilePictures);

      const friendsResponse = await fetch("http://localhost:3001/friends", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": localStorage.getItem("userId"),
        },
      });
      const friendsData = await friendsResponse.json();
      const newButtonStatuses = peopleData.map((person) => {
        const friend = friendsData.find(
          (friend) => friend.name === person.name
        );
        return friend ? "added" : "unadded";
      });
      setButtonStatuses(newButtonStatuses);
    } catch (error) {
      console.error(error);
    }
  };

  const results = !search
    ? people
    : people.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddFriend = async (person, index) => {
    try {
      const response = await fetch("http://localhost:3001/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": localStorage.getItem("userId"),
        },
        body: JSON.stringify({ name: person.name }),
      });

      if (response.status === 200) {
        const newButtonStatuses = [...buttonStatuses];
        newButtonStatuses[index] = "added";
        setButtonStatuses(newButtonStatuses);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavbarAlt />
      <SearchBar
        search={search}
        setSearch={setSearch}
        placeholderText="Encuentra usuarios"
      />

      <div className="container mt-4">
        <div className="row justify-content-center">
          {results.map((person, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={person.id}>
              <div className="card mb-4">
                <div className="card-body d-flex flex-column align-items-center">
                  <img
                    src={person.profile_picture}
                    alt="Person"
                    className="card-img-top rounded-circle img-thumbnail w-25 h-25 mb-3"
                  />
                  <Link
                    to={`/profile-user/${person.id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <h5 className="card-title mb-3">{person.name}</h5>
                  </Link>
                  <button
                    className={`btn ${
                      buttonStatuses[index] === "added"
                        ? "btn-success"
                        : "btn-light"
                    }`}
                    onClick={() => handleAddFriend(person, index)}
                    disabled={buttonStatuses[index] === "added"}
                  >
                    {buttonStatuses[index] === "added"
                      ? "Añadido"
                      : "Añadir amigo"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchUsers;
