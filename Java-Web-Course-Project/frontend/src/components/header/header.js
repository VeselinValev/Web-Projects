import React, {Component} from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Header extends Component {

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.headerBackground}></div>
                <nav className={styles.navbarWrapper}>
                    <Link to="/home" className={styles.link}>
                        <div className={styles.navbarLeft}>
                            <h2 className={styles.textPrimary}>The company house</h2>
                            <h4 className={styles.textSecondary}>We work better together</h4>
                        </div>
                    </Link>
                    <div className={styles.navbarRight}>
                        <Link className="active" to="/about"><div className={styles.btn}><h4 className={styles.textSecondary}>About us</h4></div></Link>
                        <Link activeClassName="active" to="/careers"><div className={styles.btn}><h4 className={styles.textSecondary}>Careers</h4></div></Link>
                        <Link activeClassName="active" to="/contact"><div className={styles.btn}><h4 className={styles.textSecondary}>Contact</h4></div></Link>
                        <Link activeClassName="active" to="/support"><div className={styles.btn}><h4 className={styles.textSecondary}>Support</h4></div></Link>
                        <Link activeClassName="active" to="/register"><div className={styles.btn}><h4 className={styles.textSecondary}>Register</h4></div></Link>
                        <Link activeClassName="active" to="/login"><div className={styles.btn}><h4 className={styles.textSecondary}>Sign in</h4></div></Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;