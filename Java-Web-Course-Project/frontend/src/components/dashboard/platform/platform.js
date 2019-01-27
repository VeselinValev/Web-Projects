import React, {Component} from 'react';
import styles from './platform.module.css';
import {Route} from "react-router-dom";
import AddTask from "./tasks/addTask";
import AllTasks from "./tasks/allTasks";
import Participants from "./participants/participants";

class Platform extends Component {
    render() {
        return (
            <div className={styles.platform}>
                <Route path="/dashboard/addTask" component={AddTask}/>
                <Route path="/dashboard/allTasks" component={AllTasks}/>
                <Route path="/dashboard/participants" component={Participants}/>
            </div>
        );
    }
}

export default Platform;