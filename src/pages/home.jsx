import React, {useState, useEffect, useContext, Component} from "react";
import "../App.css"
export const FavoriteContext = createContext(defaultValue);

function Home() {

const [cityWeather, setWeather] = useState("")
const [currentWeather, setCurrentWeather] = useState("")
const submitValue = () => {
    const weather = {
        'Insert a city' : cityWeather,
    }}
const url=`http://api.openweathermap.org/data/2.5/weather?q=${cityWeather},fr&units=metric&APPID=${process.env.REACT_APP_APIKEY}`
    // ${cityWeather}
    useEffect(()=> {fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            setCurrentWeather(res);
            console.log(res);
            console.log(cityWeather);
})},[])

    return (
        <FavoriteContext.Provider value={favorite}>
      <div>
          <input type ="text" {...cityWeather} placeholder="Insert a city" onChange={e => setWeather(e.target.value)}/>

          <button type="button" class="btn btn-outline-danger" onClick={submitValue}>
              Search
          </button>
          <p>{(currentWeather?.main?.temp) }°C</p>
         
      </div>
      </FavoriteContext.Provider>
    )
}

export default Home;