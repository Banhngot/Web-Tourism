import "./hotel.css";
import { getPlaceData } from "../../api";
import { useEffect, useState } from "react";
import Home from "../../Components/Home/Home";

const Hotel = () => {
  const [data, setData] = useState([]);
  const [place, setPlace] = useState("");

  useEffect(() => {
    getPlaceData().then((data) => {
      console.log(data);
      setPlace(data);
    });
  }, []);
  //cap nhat
  return <Home />;
};

export default Hotel;
