import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveContainer from './components/ResponsiveContainer';
import '../my-semantic-theme/semantic.less';

class Index extends React.Component {
    constructor ( props ) {
        super( props );

        this.state = {};

        this.loadtime = 1000 * 60;

        this.counter = 0;
    }

    render () {
        return <ResponsiveContainer />;
    }
}

ReactDOM.render( <Index />, document.getElementById( 'content' ) );
