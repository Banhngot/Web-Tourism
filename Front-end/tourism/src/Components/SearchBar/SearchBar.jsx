import React, { useState } from "react";

import "./searchbar.scss";

import { FaSearch } from "react-icons/fa";
import { json } from "react-router-dom";
import List from "./List";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase();
        });
        setResults(results);
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="search-bar-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(event) => handleChange(event.target.value)}
        />
      </div>
      {/* <List /> */}
    </div>
  );
};

export default SearchBar;
