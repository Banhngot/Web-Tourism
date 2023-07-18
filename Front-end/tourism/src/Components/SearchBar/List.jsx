import React from "react";
import "./list.scss";
import Result from "./Result";

const List = ({ results }) => {
  return (
    <div className="results-lists">
      {results?.map((results, id) => {
        return <Result result={results} key={id} />;
      })}
    </div>
  );
};

export default List;
