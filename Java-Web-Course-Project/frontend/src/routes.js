import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./hoc/Home";
import Register from "./hoc/register";
import Login from "./hoc/login";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/support" component={Home}/>
            <Route exact path="/about" component={Home}/>
        </Switch>
    )
};

export default Routes;