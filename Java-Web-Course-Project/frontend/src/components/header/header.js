import React, {Component} from 'react';
import styles from './header.module.css';
import {Link, NavLink} from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav className={styles.navbarWrapper}>
                <Link to="/" className={styles.link}>
                    <div className={styles.navbarLeft}>
                        <h2 className={styles.textPrimary}>The project house</h2>
                        <h4 className={styles.textSecondary}>organize your work</h4>
                    </div>
                </Link>
                <div className={styles.navbarRight}>
                    <NavLink activeStyle={{
                        "background-color": "rgb(66, 134, 244)", color: "#eeeeee"
                    }} exact to="/about" className={styles.btn}><h4 className={styles.textSecondary}>About us</h4>
                    </NavLink>
                    <NavLink activeStyle={{
                        "background-color": "rgb(66, 134, 244)", color: "#eeeeee"
                    }} exact to="/careers" className={styles.btn}><h4 className={styles.textSecondary}>Careers</h4>
                    </NavLink>
                    <NavLink activeStyle={{
                        "background-color": "rgb(66, 134, 244)", color: "#eeeeee"
                    }} exact to="/contact" className={styles.btn}><h4 className={styles.textSecondary}>Contact</h4>
                    </NavLink>
                    <NavLink activeStyle={{
                        "background-color": "rgb(66, 134, 244)", color: "#eeeeee"
                    }} exact to="/support" className={styles.btn}><h4 className={styles.textSecondary}>Support</h4>
                    </NavLink>
                    <NavLink activeStyle={{
                        "background-color": "rgb(66, 134, 244)", color: "#eeeeee"
                    }} exact to="/register" className={styles.btn}><h4 className={styles.textSecondary}>Register</h4>
                    </NavLink>
                    <NavLink activeStyle={{
                        "background-color": "rgb(66, 134, 244)", color: "#eeeeee"
                    }} exact to="/login" className={styles.btn}><h4 className={styles.textSecondary}>Sign in</h4>
                    </NavLink>
                    <NavLink activeStyle={{
                        "background-color": "rgb(66, 134, 244)", color: "#eeeeee"
                    }} to="/dashboard" className={styles.btn}><h4 className={styles.textSecondary}>Dashboard</h4>
                    </NavLink>
                </div>
            </nav>
        );
    }
}

export default Header;