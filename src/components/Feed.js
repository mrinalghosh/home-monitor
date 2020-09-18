import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempData: {
                labels: [1, 2, 3, 4, 5, 6],
                datasets: [{
                    label: 'Sensor 1("F)',
                    data: [
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60)
                    ],
                    borderWidth: 2,
                    borderColor: 'red',
                    fill: false
                },
                {
                    label: 'Sensor 2("F)',
                    data: [
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60),
                        Math.floor(Math.random() * 40 + 60)
                    ],
                    borderWidth: 2,
                    borderColor: 'green',
                    fill: false
                }
                ]
            },
            humidityData: {
                labels: [1, 2, 3, 4, 5, 6],
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
                    , borderColor: 'blue',
                    fill: false
                }
                ]
            }
        }
    }

    render() {
        return (
            <div className="feed" height="150" width="400">
                <Line
                    data={this.state.tempData}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
                <Line
                    data={this.state.humidityData}
                    options={{
                        maintainAspectRatio: true
                    }}
                />
            </div>
        )
    }
}

export default Feed;