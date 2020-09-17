import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

// function round(value, decimals) {
//     return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
// }
class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            tempData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [{
                label: 'Temperature("F)',
                data: [
                    Math.floor(Math.random() * 40 + 60),
                    Math.floor(Math.random() * 40 + 60),
                    Math.floor(Math.random() * 40 + 60),
                    Math.floor(Math.random() * 40 + 60),
                    Math.floor(Math.random() * 40 + 60),
                    Math.floor(Math.random() * 40 + 60)
                ]
                ,backgroundColor: 'rgba(255, 99, 132, 0.6)'
                }
                ]
            },
            humidityData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [{
                label: 'Temperature("F)',
                data: [
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100),
                    Math.floor(Math.random() * 100)
                ]
                ,backgroundColor: 'rgba(50, 50, 255, 0.6)'
                }
                ]
            }
    }
}

    render(){
        return (
            <div className="feed" height="150" width="400">
                <Line
                    data={this.state.tempData}
                    options={{
                        //responsive: true,
                        maintainAspectRatio: true
                    }}
                    />
                <Line
                    data={this.state.humidityData}
                    options={{
                        // responsive: true,
                        maintainAspectRatio: true
                    }}
                    />
            </div>
        )
    }
}

export default Feed;

