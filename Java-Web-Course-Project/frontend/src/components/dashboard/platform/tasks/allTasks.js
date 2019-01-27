import React, {Component} from 'react';
import styles from './tasks.module.css';

class AllTasks extends Component {
    render() {
        return (
            <div>
                <div style={{
                    "background-color" : "#e1e1e1", opacity: .7
                }} className={styles.category}><h2>Not started</h2></div>
                <div  style={{
                    "background-color" : "#ffff76", opacity: .7
                }} className={styles.category}><h2>In Progress</h2></div>
                <div  style={{
                    "background-color" : "#b0ecb0", opacity: .7
                }} className={styles.category}><h2>Completed</h2></div>
            </div>
        );
    }
}

export default AllTasks;