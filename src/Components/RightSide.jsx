import React, { useEffect } from 'react'
import { useState } from 'react';
import './RightSide.css';
import {GiWindSlap}from 'react-icons/gi'
import {WiHumidity}from 'react-icons/wi'
import {FaTemperatureHigh,FaTemperatureLow}from 'react-icons/fa'
import {FiSunrise,FiSunset}from 'react-icons/fi'
import {CgCompressV}from 'react-icons/cg'
import {MdOutlineVisibility}from 'react-icons/md'


const RightSide = ({ tempInfo }) => {

  const { humidity, pressure, weathermood, speed, gust, description, visibility, sunset, sunrise, temp_max, temp_min } = tempInfo;

let sec =sunset;
let date =new Date(sec*1000);
let timeStr =`${date.getHours()}:${date.getMinutes()}`;

let sec1 =sunrise;
let date1 =new Date(sec1*1000);
let timeStr1 =`${date1.getHours()}:${date1.getMinutes()}`;


  return (
    <><div className="rightside">
      <h1 className='top'>Today's Highlights</h1>
     

      <div className="cards">

        <div className="card">
          <h2><span><GiWindSlap/></span> Wind Speed</h2>
          <h1>{speed}<span> km/h</span></h1>
          
        </div>
        <div className="card">
          <h2><span><FaTemperatureHigh/> </span>Temp-Max: <span>{temp_max}°C</span></h2>
          <h2><span><FaTemperatureLow/> </span>Temp-Min: <span>{temp_min}°C</span></h2>
        </div>
        <div className="card">
          <h2><span><FiSunrise/> </span>Sunrise: <span>{timeStr1} AM</span></h2>
          <h2> <span><FiSunset/>   </span>Sunset : <span>{timeStr} PM </span></h2>
          
       
         

        </div>
        <div className="card">
          <h2><span><WiHumidity/> </span>Humidity</h2>
          <h1>{humidity}%</h1>

        </div>
        <div className="card">
          <h2><span><CgCompressV/> </span>Pressure</h2>
          <h1>{pressure}</h1>




        </div>
        <div className="card">
          <h2><span><MdOutlineVisibility/> </span>Visibility</h2>
          <h1>{visibility} m</h1>

        </div>
        <div className="card1" style={{width:'25rem',height:'12rem'}}>
          
        <img src  ="info.png" alt="" className='weatherinfo '/>

        </div>
     
       
      </div>
    </div>
    </>
  )
}

export default RightSide;
