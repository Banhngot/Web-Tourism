import React, { useEffect, useState } from "react";
import axios from "axios";
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
// import { Link } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";
// import HotelData from "../../utils/hotel";
import "./home.scss";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

// import video from "../../Assets/video1.mp4";
// import { GrLocation } from "react-icons/gr";
// import { HiFilter } from "react-icons/hi";
// import { FiFacebook } from "react-icons/fi";
// import { BsInstagram } from "react-icons/bs";
// import { FaTripadvisor } from "react-icons/fa";
// import { BsListTask } from "react-icons/bs";
// import { TbApps } from "react-icons/tb";
// import { HiLocationMarker } from "react-icons/hi";
// import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import Aos from "aos";
import "aos/dist/aos.css";

// const HotelCarousel = ({
//   city,
//   hotelImg,
//   rating,
//   country,
//   oldPrice,
//   newPrice,
// }) => {
//   return (
//     <article className="w-fit relative cursor-pointer hover:shadow-2xl hover:shadow-[#ffe7db] hotel-card transition-all">
//       <img src={hotelImg} alt="Random Hotel"></img>
//       <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md transition-all">
//         <div className="flex justify-between pb-2">
//           <h4 className="font-bold text-lg">{city}</h4>
//           <div className="flex items-center gap-2">
//             {/* <img src={star} alt="star icon" /> */}
//             <span className="text-text-light">{rating}</span>
//           </div>
//         </div>
//         <div className="flex justify-between text-text-light">
//           <p className="flex items-center gap-[0.1rem]">
//             <HiLocationMarker /> {country}
//           </p>
//           <p className="flex gap-2 items-center">
//             <span className="line-through">{oldPrice}</span>
//             <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
//               {newPrice}
//             </span>
//           </p>
//         </div>

//         <button className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl absolute top-[50%] left-[25%] hotel-btn">
//           <Link to="/login">Book Now</Link>
//         </button>
//       </div>
//     </article>
//   );
// };

// const Hotels = () => {
//   return (
//     <>
//       <section className="font-text lg:flex justify-center items-center hidden desktop-crsl">
//         <CarouselProvider isIntrinsicHeight={true} totalSlides={2}>
//           <Fade cascade triggerOnce direction="up" duration={2000}>
//             <Slider>
//               <Slide index={0} tabIndex="null">
//                 <div className="grid md:grid-cols-carousel lg:gap-3 xl:gap-8 justify-center">
//                   {HotelData.map((item, index) => (
//                     <HotelCarousel
//                       hotelImg={item.hotelImg}
//                       key={index}
//                       city={item.city}
//                       country={item.country}
//                       rating={item.rating}
//                       oldPrice={item.oldPrice}
//                       newPrice={item.newPrice}
//                     />
//                   ))}
//                 </div>
//               </Slide>
//               <Slide index={1}>
//                 <div className="grid md:grid-cols-carousel lg:gap-3 xl:gap-8 justify-center">
//                   {HotelData.map((item, index) => (
//                     <HotelCarousel
//                       hotelImg={item.hotelImg}
//                       key={index}
//                       city={item.city}
//                       country={item.country}
//                       rating={item.rating}
//                       oldPrice={item.oldPrice}
//                       newPrice={item.newPrice}
//                     />
//                   ))}
//                 </div>
//               </Slide>
//             </Slider>
//             <div className="flex justify-center gap-8 pt-10">
//               <ButtonBack>
//                 <div className="border-2 rounded-full text-gray-400 cursor-pointer w-8 h-8 flex justify-center items-center text-3xl ">
//                   <BsArrowLeftShort />
//                 </div>
//               </ButtonBack>
//               <ButtonNext>
//                 <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer w-8 h-8 flex justify-center items-center text-3xl">
//                   <BsArrowRightShort />
//                 </div>
//               </ButtonNext>
//             </div>
//           </Fade>
//         </CarouselProvider>
//       </section>

//       {/* for mobile */}
//       <section className="font-text lg:hidden flex justify-center items-center">
//         <CarouselProvider isIntrinsicHeight={true} totalSlides={2}>
//           <Slider>
//             <Slide index={0} tabIndex="null">
//               <div className="grid md:grid-cols-2 gap-8 justify-items-center">
//                 {HotelData.map((item, index) => (
//                   <HotelCarousel
//                     hotelImg={item.hotelImg}
//                     key={index}
//                     city={item.city}
//                     country={item.country}
//                     rating={item.rating}
//                     oldPrice={item.oldPrice}
//                     newPrice={item.newPrice}
//                   />
//                 ))}
//               </div>
//             </Slide>
//             <Slide index={1}>
//               <div className="grid md:grid-cols-2 gap-8 justify-items-center">
//                 {HotelData.map((item, index) => (
//                   <HotelCarousel
//                     hotelImg={item.hotelImg}
//                     key={index}
//                     city={item.city}
//                     country={item.country}
//                     rating={item.rating}
//                     oldPrice={item.oldPrice}
//                     newPrice={item.newPrice}
//                   />
//                 ))}
//               </div>
//             </Slide>
//           </Slider>
//           <div className="flex justify-center gap-8 pt-10">
//             <ButtonBack>
//               <div className="border-2 rounded-full text-gray-400 cursor-pointer w-8 h-8 flex justify-center items-center text-3xl ">
//                 <BsArrowLeftShort />
//               </div>
//             </ButtonBack>
//             <ButtonNext>
//               <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer w-8 h-8 flex justify-center items-center text-3xl">
//                 <BsArrowRightShort />
//               </div>
//             </ButtonNext>
//           </div>
//         </CarouselProvider>
//       </section>
//     </>
//   );
// };

const Home = () => {
  // hook to add a scroll animation...
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  useEffect(() => {
    axios
      .get()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search`;

  const searchLocation = (event) => {
    if (event.key === "Click") {
      axios.get(url).then((Response) => {
        setData(Response.data);
        console.log(Response);
      });
      searchLocation("");
    }
  };

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
