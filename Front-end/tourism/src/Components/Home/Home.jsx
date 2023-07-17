import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";

import video from "../../Assets/video1.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FaTripadvisor } from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  // Search
  // const [data, setData] = useState({});
  // const [location, setLocation] = useState("");
  // useEffect(() => {
  //   axios
  //     .get()
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // });

  // const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search`;

  // const searchLocation = (event) => {
  //   if (event.key === "Click") {
  //     axios.get(url).then((Response) => {
  //       setData(Response.data);
  //       console.log(Response);
  //     });
  //     searchLocation("");
  //   }
  // };

  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={video} muted autoPlay loop type="video1/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            hello
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>

            <label htmlFor="city">Search your Hotel:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here..." />
              <GrLocation className="icon" />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your day:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter name here..." />
            </div>

            <label htmlFor="date">Select your day:</label>
            <div className="input flex">
              <input type="date" placeholder="Enter name here..." />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total"> $5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>

            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total"> $5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <button
              className="btn"
              // value={location}
              // onChange={(event) => setLocation(event.target.value)}
              // onKeyPress={searchLocation}
            >
              SEARCH
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <BsInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
