import React, { useState, useEffect } from "react";
import NavbarAlt from "../components/NavbarAlt";
import SearchBar from "../components/SearchBar";
import "../App.css";

const SearchFriends = () => {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);
  const [buttonStatuses, setButtonStatuses] = useState([]);

  const showData = async () => {
    try {
      const friendsResponse = await fetch("http://localhost:3001/friends", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-User-Id": localStorage.getItem("userId"),
        },
      });
      const friendsData = await friendsResponse.json();

      const friendsWithProfilePictures = await Promise.all(
        friendsData.map(async (friend) => {
          const userProfileResponse = await fetch(
            `http://localhost:3001/users/${friend.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const userProfileData = await userProfileResponse.json();
          return {
            ...friend,
            profile_picture: userProfileData.profile_picture,
          };
        })
      );

      setPeople(friendsWithProfilePictures);
      setButtonStatuses(
        new Array(friendsWithProfilePictures.length).fill("unadded")
      );
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
    showData();
  }, [buttonStatuses]);

  const handleRemoveFriend = async (person, index) => {
    try {
      const response = await fetch(
        `http://localhost:3001/friends/${person.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "X-User-Id": localStorage.getItem("userId"),
          },
        }
      );

      if (response.status === 200) {
        const newButtonStatuses = [...buttonStatuses];
        newButtonStatuses[index] = "removed";
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
        placeholderText="Busca entre tus amigos"
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
                  <h5 className="card-title">{person.name}</h5>
                  <p className="card-text">{person.email}</p>
                  <button
                    className={`btn ${
                      buttonStatuses[index] === "removed"
                        ? "btn-danger"
                        : "btn-light"
                    }`}
                    onClick={() => handleRemoveFriend(person, index)}
                    disabled={buttonStatuses[index] === "removed"}
                  >
                    {buttonStatuses[index] === "removed"
                      ? "Eliminado"
                      : "Eliminar amigo"}
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

export default SearchFriends;
