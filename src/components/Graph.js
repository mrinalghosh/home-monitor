import React from 'react';
import {Line} from 'react-chartjs-2';

// function round(value, decimals) {
//     return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
// }
class Graph extends React.Component {
    
constructor(props){
    super(props);
    this.state = {
        chartData:props.chartData
    }
    }

    static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
    }

    render(){
    return (
        <div className="graph">
    
        <Line
            data={this.state.chartData}
            options={{
            title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25
            },
            legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
            }
            }}
        />

        </div>
    )
    }
}

export default Graph;