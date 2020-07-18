import React from 'react';
import history from './history';
import { Router, Route, Switch } from 'react-router-dom';
import Home from '../components/HomeScreen/Home'
import Login from '../components/Login/Login'
import Game from '../components/GameStart/Game'

const RouterApp = () => {
    return (
        <div>
            <Router history={history}>
            <Switch> 
                    <Route path="/Home" component={Home} />
                    <Route path="/Login" component={Login} /> 
                    <Route path="/GameStart" component={Game} />                            
            </Switch>
        </Router>
       </div>
    )
}

export default RouterApp;