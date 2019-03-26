import React, { Component } from 'react';
import reactDom from 'react-dom';
import preloader from './components/preloader';
import header from './components/header';
import dropoff from './components/dropoff'
import './assets/styling/style.css';
import './assets/styling/responsive.css';


export default class index extends Component {
    render() {
        return (
            <div>
                <dropoff />
                <preloader />
                <header />
            </div>
        )
    }
}

reactDom.render( <index />, document.getElementById( 'content' ) );

