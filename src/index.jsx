import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
// import style from "../assets/styling/index.scss";
import NewsList from './components/NewsList';

const has = Object.prototype.hasOwnProperty;

class App extends React.Component {
    constructor ( props ) {
        super( props );

        this.state = {
            storyItem: [],
            loaded: false,
            loadString: <div> I am still Loading </div>
        };

        this.loadtime = 1000 * 60;
        this.counter = 0;

        this.getApiData1 = () => new Promise( ( resolve ) => {
            resolve( axios.get( 'https://hacker-news.firebaseio.com/v0/topstories.json' ) );
        } );

        this.isEmpty = ( obj ) => {
            Object.keys( obj ).map(
                key => has.call( obj, key )
            );
        };
    }

    componentDidMount () {
        const self = this;
        self.smartStateReload( 'storyItem' );
        this.interval = setInterval( () => { self.smartStateReload( 'storyItem' ); }, self.loadtime );
    }

    componentWillUnmount () {
        clearInterval( this.interval );
    }

    getApiData2 () {
        return this.getApiData1()
            .then( response => Promise.all( response.data.slice( 0, 30 ).map( itemId => axios.get( `https://hacker-news.firebaseio.com/v0/item/${ itemId }.json` ) ) ) );
    }

    setNewState ( name, value ) {
        const newState = Object.assign( {}, this.state, {
            [ name ]: value,
            loaded: true
        } );

        this.setState( newState );
    }

    smartStateReload ( name ) {
        const self = this;
        console.log( self.loadtime );
        self.getApiData2()
            .then( ( value ) => {
                const now = new Date();
                console.log( now.toString() );
                this.setNewState( name, value );
            } );
    }

    render () {
        const { loaded, storyItem, loadString } = this.state;

        if ( loaded ) {
            this.counter += 1;
            return <NewsList items={storyItem} renderCount={this.counter} />;
        }
        return loadString;
    }
}

ReactDOM.render( <App />, document.getElementById( 'content' ) );
