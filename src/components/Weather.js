import React from 'react';
import './Weather.css';

// primary resource: https://www.youtube.com/watch?v=GuA0_Z1llY

const api = {
    key: "083709b9fd44f49e323bbca16ff747df",
    base: "https://api.openweathermap.org/data/2.5/"
}

export default function Weather() {

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
        <div className="weather-app">
            <main>
                <div className="search-box">
                    <input type="text" className="search-bar" placeholder="Search..." />
                </div>
                <div className="location-box">
                    <div className="location">Boston, MA</div>
                    <div className="date">{dateConstruct(new Date())}</div>
                </div>
                <div className="weather-box">
                    <div className="temperature">60°F</div>
                    <div className="weather">Windy</div>
                </div>
            </main>
        </div>
    )
}
