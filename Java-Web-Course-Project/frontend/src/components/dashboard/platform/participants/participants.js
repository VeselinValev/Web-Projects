import React, {Component} from 'react';
import styles from './participants.module.css';
import {NavLink} from 'react-router-dom';

class Participants extends Component {
    render() {
        return (
            <div>
                <NavLink to="/dashboard/participants/1" className={styles.box}>
                    <div className={styles.picture}></div>
                    <h3 className={styles.profileName}>Carlos Ramirez</h3>
                </NavLink>
                <NavLink to="/dashboard/participants/1" className={styles.box}>
                    <div className={styles.picture}>

                    </div>
                </NavLink>
                <NavLink to="/dashboard/participants/1" className={styles.box}>
                    <div className={styles.picture}>

                    </div>
                </NavLink>
            </div>
        );
    }
}

export default Participants;