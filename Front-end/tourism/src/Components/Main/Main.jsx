import React, {useEffect} from 'react'
import './main.scss'
import img from '../../Assets/img.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'hello word',

    id:2,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'hello word',
  },
]

const Main = () => {

  // hook to add a scroll animation...
  useEffect(() =>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className='main container section'>
      
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {/* use high ordfer array method(map). use list of obj in one array,  
        create an array named data and from that shall .map() array to fetch each destination*/}
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos ="fade-up" className="singleDestination">
                {/* picture and title */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                {/* cardInfor */}
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>
                        {fees}
                      </h5>
                    </div>                  
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILs <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }

{
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos ="fade-up" className="singleDestination">
                {/* picture and title */}
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                {/* cardInfor */}
                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                  </h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>

                    <div className="price">
                      <h5>
                        {fees}
                      </h5>
                    </div>                  
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILs <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main