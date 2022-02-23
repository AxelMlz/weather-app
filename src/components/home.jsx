import React, { Component } from 'react'
import {useState, useEffect} from "react";

function Home() {

const [cityWeather, setWeather] = useState("")
const [currentWeather, setCurrentWeather] = useState()

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityWeather},uk&APPID=ac4cb07e6f578cd6cb15563efd460410`)
.then((res)=>res.json())
.then((res)=>{
    setCurrentWeather(currentWeather.res);
    console.log(currentWeather);
})

    return (
      <div>
          <input type ="text" {...cityWeather} placeholder="Insert a city"></input>
          <button onChange={setWeather}></button>
          <p></p>
      </div>
    )
}

export default Home;