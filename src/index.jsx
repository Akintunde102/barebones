import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route } from 'react-router-dom';

import indexRoutes from './routes';

const index = indexRoutes();

ReactDOM.render(
    <HashRouter>
        <Route to="/" component={index.component} key={0} />
    </HashRouter>,
    document.getElementById( 'bola' )
);
