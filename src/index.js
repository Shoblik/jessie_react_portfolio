import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './components/homepage';
import './assets/css/app.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={Homepage} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
