import React, { useState, useEffect } from "react";
import "../App.css";

const SearchUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "http://localhost:3001/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? users
    : users.filter((user) =>
        user.name.toLowerCase().includes(search.toLocaleLowerCase())
      );

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Busca usuarios"
            className="form-control"
          />
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {results.map((user) => (
            <div className="col-md-6" key={user.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <button className="btn btn-light">Añadir amigo</button>
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
