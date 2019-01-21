import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./hoc/home";
import Register from "./hoc/register";
import Login from "./hoc/login";
import LoggedIn from "./hoc/loggedIn";
import About from "./hoc/about";
import Support from "./hoc/support";
import Contact from "./hoc/contact";
import Careers from "./hoc/careers";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/loggedIn" component={LoggedIn}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/careers" component={Careers}/>
        </Switch>
    )
};

export default Routes;