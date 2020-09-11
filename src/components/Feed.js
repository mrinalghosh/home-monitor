import React from 'react'

export default function Feed() {
    return (
        <div>
            <h3>See how humid your house is from anywhere !</h3>
            <h3>It might be warm too, but now you can know for sure !</h3>
            {/* plotly.js will be used to create live graphs - 
            these should be queried with whether a user has 
            temp/humidity sensors set up and render them*/}
        </div>
    )
}