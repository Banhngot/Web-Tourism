import React, { useState } from "react";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import List from "../../Components/SearchBar/List";

function Tour() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Navbar />
      <SearchBar setResults={setResults} />
      {/* <List /> */}
      <Main />
    </>
  );
}

export default Tour;
