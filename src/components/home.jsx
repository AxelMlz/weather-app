import React, { Component } from 'react'
import {useState, useEffect} from "react";

function Home() {

const [cityWeather, setWeather] = useState("")
const [currentWeather, setCurrentWeather] = useState("")
const submitValue = () => {
    const weather = {
        'Insert a city' : cityWeather,
    }
    // ${cityWeather}
useEffect(()=> {fetch(`http://api.openweathermap.org/data/2.5/weather?q=paris,fr&APPID=ac4cb07e6f578cd6cb15563efd460410`)
.then((res)=>res.json())
.then((res)=>{
    setCurrentWeather(res);
    console.log(res);
})})

    return (
      <div>
          <input type ="text" {...cityWeather} placeholder="Insert a city" onChange={e => setWeather(e.target.value)}/>

          <button onClick={submitValue}></button>
          <p>{currentWeather.main.temp}</p>
          <p>{currentWeather.weather.icon}</p>
      </div>
    )
}
}
export default Home;