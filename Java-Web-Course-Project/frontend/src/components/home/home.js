import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./home.css";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            originalClasses: ["hex hex1", "hex hex2", "hex hex3", "hex hex4", "hex hex5", "hex hex6", "titleOuter"],
            classes: ["hex hex1", "hex hex2", "hex hex3", "hex hex4", "hex hex5", "hex hex6", "titleOuter"],
            moveAwayClasses: ["hex hex1 active away1", "hex hex2 active away2", "hex hex3 active away3",
                "hex hex4 active away4", "hex hex5 active  away5", "hex hex6 active  away6", "titleOuter moveAwayTitle"],
            dashBoardClasses: ["hex1 dash1", "hex2 dash2", "hex3 dash3", "hex4 dash4", "hex5 dash5", "hex6 dash6", "titleOuter moveAwayTitle"]
        }
    }
    tick() {
        let path = this.props.location.pathname;
        if (path === "/"){
            this.setState({classes: this.state.originalClasses})
        }else if (path === "/login" || path === "/register" || path === "/contact"){
            this.setState({classes: this.state.moveAwayClasses})
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onClick = () => {
        this.setState({
            classes: this.state.moveAwayClasses
        } );
    };

    render() {
        return (
            <div className="menuWrapper">
                <div className={this.state.classes[6]}>
                    <div className="title">
                        <h2 className="text textPrimary">The project house</h2>
                        <h4 className="text textSecondary">a simple organizer</h4>
                    </div>
                </div>
                <NavLink to="/login" onClick={this.onClick} className={this.state.classes[0]} activeClassName="active active1">
                    <div className="inside">
                        <div className="stripe stripe1"></div>
                        <h3 className="text">log in</h3>
                    </div>
                </NavLink>
                <NavLink to="/register" onClick={this.onClick} className={this.state.classes[1]} activeClassName="active active2">
                    <div className="inside">
                        <div className="stripe stripe2"></div>
                        <h3 className="text">register</h3>
                    </div>
                </NavLink>
                <NavLink to="/careers" onClick={this.onClick} className={this.state.classes[2]} activeClassName="active active3">
                    <div className="inside">
                        <div className="stripe stripe3"></div>
                        <h3 className="text">careers</h3>
                    </div>
                </NavLink>
                <NavLink to="/dashboard" onClick={this.onClick} className={this.state.classes[3]} activeClassName="active active4">
                    <div className="inside">
                        <div className="stripe stripe4"></div>
                        <h3 className="text">projects</h3>
                    </div>
                </NavLink>
                <NavLink to="/about" onClick={this.onClick} className={this.state.classes[4]} activeClassName="active active5">
                    <div className="inside">
                        <div className="stripe stripe5"></div>
                        <h3 className="text">about us</h3>
                    </div>
                </NavLink>
                <NavLink to="/contact" onClick={this.onClick} className={this.state.classes[5]} activeClassName="active active6">
                    <div className="inside">
                        <div className="stripe stripe6"></div>
                        <h3 className="text">contact us</h3>
                    </div>
                </NavLink>
            </div>
        );
    }
};

export default Home;