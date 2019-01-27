import React, {Component} from 'react';
import styles from './navigation.module.css';
import {NavLink} from "react-router-dom";
import FontAwesome from "react-fontawesome";

class Navigation extends Component {
    render() {
        return (
            <div className={styles.navigation}>
                    <h2 className={styles.projectName}>project name</h2>
                    <NavLink activeStyle={{
                        "background-color": "#6e8bb7", color: "white"
                    }} to="/dashboard/addTask" className={styles.btn}><h4 className={styles.textSecondary}><FontAwesome style={{"margin": "0 2rem 0 2rem"}} name="plus"/>add Task</h4></NavLink>
                    <NavLink activeStyle={{
                        "background-color": "#6e8bb7", color: "white"
                    }} to="/dashboard/allTasks" className={styles.btn}><h4 className={styles.textSecondary}><FontAwesome style={{"margin": "0 2rem 0 2rem"}} name="list"/>All tasks</h4></NavLink>
                    <NavLink activeStyle={{
                        "background-color": "#6e8bb7", color: "white"
                    }} exact to="/about" className={styles.btn}><h4 className={styles.textSecondary}><FontAwesome style={{"margin": "0 2rem 0 2rem"}} name="bar-chart"/>Project stats</h4></NavLink>
                    <NavLink activeStyle={{
                        "background-color": "#6e8bb7", color: "white"
                    }} to="/dashboard/participants" className={styles.btn}><h4 className={styles.textSecondary}><FontAwesome style={{"margin": "0 2rem 0 2rem"}} name="group"/>participants</h4></NavLink>

            </div>
        );
    }
}

export default Navigation;