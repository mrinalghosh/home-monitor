import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

// function round(value, decimals) {
//     return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
// }
class Graph extends Component {
    constructor(props){
        super(props);
        this.state = {
            graphData:{
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [{
                label: 'Population',
                data: [
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ]
                }
            ]
        }
    }
}

    render(){
        return (
            <div className="graph">
                <Line
                    data={this.state.graphData}
                    options={{
                        maintainAspectRatio: true
                    }}
                    />
            </div>
        )
    }
}

export default Graph;





// let myChart = document.getElementById('myChart').getContext('2d');
//     Chart.defaults.global.defaultFontFamily = 'Lato';
//     Chart.defaults.global.defaultFontSize = 18;
//     Chart.defaults.global.defaultFontColor = '#777';

//     let massPopChart = new Chart(myChart, {
//       type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
//       data: {
//         labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
//         datasets: [{
//           label: 'Population',
//           data: [
//             617594,
//             181045,
//             153060,
//             106519,
//             105162,
//             95072
//           ],
//           //backgroundColor:'green',
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.6)',
//             'rgba(54, 162, 235, 0.6)',
//             'rgba(255, 206, 86, 0.6)',
//             'rgba(75, 192, 192, 0.6)',
//             'rgba(153, 102, 255, 0.6)',
//             'rgba(255, 159, 64, 0.6)',
//             'rgba(255, 99, 132, 0.6)'
//           ],
//           borderWidth: 1,
//           borderColor: '#777',
//           hoverBorderWidth: 3,
//           hoverBorderColor: '#000'
//         }]
//       },
//       options: {
//         title: {
//           display: true,
//           text: 'Largest Cities In Massachusetts',
//           fontSize: 25
//         },
//         legend: {
//           display: true,
//           position: 'right',
//           labels: {
//             fontColor: '#000'
//           }
//         },
//         layout: {
//           padding: {
//             left: 50,
//             right: 0,
//             bottom: 0,
//             top: 0
//           }
//         },
//         tooltips: {
//           enabled: true
//         }
//       }
//     });