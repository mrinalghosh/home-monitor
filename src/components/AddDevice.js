import React from 'react'

export default function AddDevice() {
    return (
        <div>
            {/* Component to add/delete and store location, name, type, baudrate... of device (for user) */}
            <form action="/action_page.php">
                {/* on click takes to action... need to use firestore instead */}

                <h1>Add Home Sensor</h1>
                <label for="sensor">Sensor Type:</label>
                <select name="sensor" id="sensor">
                    <option value="humidity">Humidity</option>
                    <option value="temperature">Temperature</option>
                </select>
                <br /><br />

                <label>Location</label>
                {/* TODO: have dropdown list with all sensor locations + 'other' */}
                <input></input>
                <br /><br />

                <label>Nickname</label>
                <input placeholder="Sensei"></input>
                <br /><br />

                <label>Baud Rate</label>
                <input placeholder="9600"></input>
                <br /><br />

                <button type="submit">Send</button>
            </form>
        </div>
    )
}
