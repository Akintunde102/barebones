import React from 'react';
import rd3 from 'react-d3-library';
import node from './heatmapcode';
import '../assets/styling/index.sass';

const RD3Component = rd3.Component;

export default class heatmap extends React.Component {
    constructor ( props ) {
        super( props );

        this.state = {
            d3: ''
        };
    }

    componentDidMount () {
        this.setState( { d3: node } );
    }

    render () {
        const { d3 } = this.state;
        return (
            <div className="container">
                <h1>Monthly Global Land-Surface Temperature</h1>
                <RD3Component data={d3} />
            </div>
        );
    }
}
