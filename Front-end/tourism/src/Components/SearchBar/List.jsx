import React from "react";
import "./list.scss";

const List = ({ results }) => {
  return (
    <div className="results-lists">
      {results.map((results, id) => {
        return <div key={id}>{results.name}</div>;
      })}
    </div>
  );
};

export default List;
