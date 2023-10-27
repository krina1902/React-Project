import React, { useState,useEffect } from "react";
import Displayweather from "./Displayweather";

function Weather () {

    const APIKEY ='1a57238edcbeaff87a7c5f08fca39278'

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    const [data,setData] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
    
        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)

        const data =  fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${APIKEY}`).then((res) => res.json()).then((data) => {
        setData(data)    
        console.log(data)})
        
      }, [lat, long]);

    return ( 
        <>
        <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Displayweather weatherData={data}/>
      ): (
        <div></div>
      )}
      
    </div>
            

        </>
     );
}
 
export default Weather;
