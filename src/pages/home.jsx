import React, {useState, useEffect, useContext, Component} from "react";
import "../App.css"
import CityWeatherCard from "../components/cityWeatherCard.jsx"
import { FavoriteContext} from '../context/FavoriteContext.jsx'


function Home() {

const contextType = useContext(FavoriteContext);
const [cityWeather, setWeather] = useState("Paris")
const [currentWeather, setCurrentWeather] = useState("")
const [weatherInfos, setWeatherInfos] = useState(<></>)

function updateCity(e){
   return setWeather(e.target.value)
}
const submitValue = () => {
    const weather = {
        'Insert a city' : cityWeather,
    }}

    
const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityWeather},fr&units=metric&APPID=${process.env.REACT_APP_APIKEY}`

    useEffect(()=> {fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            setCurrentWeather(res);
            console.log(res);
            console.log(cityWeather);
})},[])

    return (
     
      <div>
          <input type ="text" {...cityWeather} placeholder="Insert a city" onChange={updateCity()}/>

          <button type="button" class="btn btn-outline-danger" onClick={submitValue}>
              Search
          </button>
{/*           
        //   return(<p>{(currentWeather?.main?.temp) }°C</p>
        //   <button >Add to Favorites</button>))
        //   */}
      </div>
    )
}

export default Home;