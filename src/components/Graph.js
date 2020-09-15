import React from 'react';

class Graph extends React.Component {
    constructor(props){
        super(props);
        this.state={
            graphXValues: [],
            graphYValues: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        return Math.random();
    }

    render(){
        return (
            <div>
                <h1>Graph Page</h1>
            </div>
        )
    }
}

export default Graph;