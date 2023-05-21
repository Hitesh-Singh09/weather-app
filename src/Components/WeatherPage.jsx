import React, { useEffect, useState } from 'react'
import './WeatherPage.css'
import RightSide from './RightSide';

const WeatherPage = () => {


    const [searchvalue, setSearchValue] = useState("Bilaspur");
    const [tempInfo, setTempInfo] = useState({})


    
    const getWeatherinfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=49617565c232a0e35ff5aef7e1bd865d`
            let res = await fetch(url);
            let data = await res.json();
            console.log(data)
            const { temp, humidity, pressure, temp_max, temp_min } = data.main;
            const { main: weathermood } = data.main;
            const { name } = data;
            const { speed, gust } = data.wind;
            const { country, sunset, sunrise } = data.sys;
            const { visibility } = data;
            const { description,icon} = data.weather[0]


            const myNewWeatherInfo = {
                temp, humidity, weathermood, icon,description, name, speed, pressure, gust, country, sunset, sunrise, visibility, temp_max, temp_min

            };
            setTempInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getWeatherinfo();
    }, [])


    return (
        <>
            <div className="container">
                <div className="wrapper ">

                    <div className="left" >

                        <div className="search">
                            <input type='search'
                                placeholder='Enter your city here'
                                autoFocus
                                id='search'
                                value={searchvalue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className='searchterm' />
                            <button className='searchbutton' type='button' onClick={getWeatherinfo}>Search</button>
                        </div>
<div className="icons flex">
<img src={`http://openweathermap.org/img/wn/${tempInfo.icon}@2x.png`} alt="weathericons" style={{width:200,height:200}} />
</div>


                        <div className="contentInfo" >
                            <h1 className='temperature'>{tempInfo.temp}°C</h1>
                            <h3 className='weathermood'>{tempInfo.description}</h3>
                            <h1 className='place'>{tempInfo.name}, {tempInfo.country}</h1>
                            <span className="date">{new Date().toLocaleString()}</span>
                        </div>

                    </div>
                    <div className="right">
                        <RightSide tempInfo={tempInfo} />
                    </div>

                </div>
            </div>

        </>
    )
}
export default WeatherPage;
