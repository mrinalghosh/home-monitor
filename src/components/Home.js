import React, {useState} from 'react'

export default function Home() {
    const [click, setClick] = useState(0);
    return (
        <div>
            <h3>{click}</h3>
            <button onClick={() => setClick(Math.floor(Math.random() * 100))}>Click here</button>
            {/* <button onClick={() => setClick(click + 1)}>Click here</button> */}
        </div>
    )
    
}
