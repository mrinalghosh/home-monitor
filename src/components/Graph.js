import React from 'react';

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            scalar: 1,
            graphXValues: [],
            graphYValues: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        let graphXValueFunction = [];
        let graphYValueFunction = [];
        var i;

        var generate = (seed) => round(Math.sin(seed) + Math.random(), 2);
        // need to make local with weather

        for (i = 0; i < 10; i++) {
            graphXValueFunction.push(i);
            graphYValueFunction.push(generate(i));
        }

        this.setState({
            graphXValues: graphXValueFunction,
            graphYValues: graphYValueFunction
        })

        // console.log(graphXValueFunction);
        // console.log(graphYValueFunction);

        return 0;
    }

    render() {
        return (
            <div>
                <h1>Graph Page</h1>
                <p>x-values: {this.state.graphXValues}</p>
                <p>y-values: {this.state.graphYValues}</p>
            </div>
        )
    }
}

export default Graph;