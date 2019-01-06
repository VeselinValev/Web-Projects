import React, {Component} from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import Header from "./components/layout/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/project/AddProject";
import Register from "./components/user/Register";
import Login from "./components/user/Login";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                    <Route exact path="/addProject" component={AddProject}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                </div>
            </Router>

        );
    }
}

export default App;
