import React from "react";

const SearchBar = ({ search, setSearch, placeholderText }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container mt-2">
      <div className="input-group">
        <span className="input-group-text">
          <i className="bi bi-search"></i>
        </span>
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder={placeholderText}
          className="form-control"
        />
      </div>
    </div>
  );
};

export default SearchBar;
