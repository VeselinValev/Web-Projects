import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Posts from "./components/posts";
import Home from "./components/home";
import Profile from "./components/profile";

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <Link to='/'>Home</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/profile'>Profile</Link>
                    <hr/>
                </header>
                <Route exact path='/posts' component={Posts}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/profile' component={Profile}/>
            </div>
        </Router>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));