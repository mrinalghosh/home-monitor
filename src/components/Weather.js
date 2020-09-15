import React, { useState } from 'react';
import './Weather.css';

// primary resource: https://www.youtube.com/watch?v=GuA0_Z1llY

const api = {
    key: "083709b9fd44f49e323bbca16ff747df",
    base: "https://api.openweathermap.org/data/2.5/"
}

export default function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');

    const search = event => {
        if (event.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result.sys.country);
                });
        }
    }

    const dateConstruct = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }

    return (
        <div className={
            (typeof weather.main != "undefined") ?
                ((weather.main.temp > 75) ? 'weather-app hot' :
                    ((weather.main.temp > 60) ? 'weather-app warm' :
                        ((weather.main.temp > 45) ? 'weather-app cool' : 'weather-app cold'))) : 'weather-app'
        }>
            <main>
                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
                </div>

                <div className="location-box">
                    <div className="location">{weather ? weather.name : '............'} , {weather ? weather.sys.country : '...........'} </div>
                    <div className="date">{dateConstruct(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temperature">{weather ? weather.main.temp : '~.'}°F</div>
                    <div className="weather">{weather ? weather.weather[0].main : ''}</div>
                </div>
            </main >
        </div >
    )
}
