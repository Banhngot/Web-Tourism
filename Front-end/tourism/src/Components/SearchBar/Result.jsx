import React from "react";

import "./result.scss";

const Result = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={(event) => alert(`you click on ${result}`)}
    >
      {result.name}
    </div>
  );
};

export default Result;
