import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Details from './components/details';
import Travels from './components/travels';

const router = (
    <BrowserRouter>
        <Switch>
            <Route path="/details/:id" component={Details} exact/>
            <Route path="/" component={Travels} exact/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(router, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
