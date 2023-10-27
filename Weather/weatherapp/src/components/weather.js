import React from "react";
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faWind ,faWater,faSun} from '@fortawesome/free-solid-svg-icons'


const Weather = () => {

    let apikey="1a57238edcbeaff87a7c5f08fca39278"

    const search =  async () => {
        const element = document.getElementsByClassName("city")
        if(element[0].value === ""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`
        let response = await fetch(url);
        let data = await response.json();
        let humi = document.getElementsByClassName("humidity")
        let wind = document.getElementsByClassName("wind")
        let temp = document.getElementsByClassName("temp")
        let location = document.getElementsByClassName("location")
        let country = document.getElementsByClassName("country")
        let sunrise = document.getElementsByClassName("sunrise")
        let sunset = document.getElementsByClassName("sunset")




        humi[0].innerHTML = data.main.humidity + "%"
        wind[0].innerHTML = data.wind.speed + "km/h"
        temp[0].innerHTML = data.main.temp + "°C"
        location[0].innerHTML = data.name
        country[0].innerHTML = data.sys.country
        sunrise[0].innerHTML =  new Date(data.sys.sunrise * 1000).toLocaleTimeString()
        sunset[0].innerHTML =  new Date(data.sys.sunset * 1000).toLocaleTimeString()






    }

    return ( 
        <>
        <div className="container">
            <div className="items">
                <div>
                <input  type="text" className="city" placeholder="Enter City Name"></input>
                <button className="button" onClick={()=> search()}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <div>
                    <div className="temp">0°C</div>
                    <div className="location">City</div>
                    <div className="country">Country</div>

                </div>
                <div>
                    <h4 className="hum"><FontAwesomeIcon icon={faWater} style={{color: "#f6f7f9",}} />&nbsp; Humidity = </h4>
                    <p className="humidity">0 %</p>
                </div>
                <div>
                    <h4 className="wi"><FontAwesomeIcon icon={faWind}  style={{color: "#f4f5f5",}} />&nbsp; Wind = </h4>
                    <p className="wind">0 km/h</p>
                </div>
                <div>
                    <h4 className="sunr"><FontAwesomeIcon icon={faSun} style={{color: "#e6970f"}} />&nbsp; Sunrise = </h4>
                    <p className="sunrise">00:00:00</p>
                </div>
                <div>
                    <h4 className="suns"><FontAwesomeIcon icon={faSun} style={{color: "#f7fb09",}} />&nbsp; Sunset = </h4>
                    <p className="sunset">00:00:00</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Weather;