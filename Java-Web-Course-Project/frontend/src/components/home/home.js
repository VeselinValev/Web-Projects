import React, {Component} from 'react';
import styles from "./home.module.css";
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div className={styles.titleOuter}>
                    <div className={styles.title}>
                        <h2 className={styles.textPrimary}>The project house</h2>
                        <h4 className={styles.textSecondary}>a simple organizer</h4>
                    </div>
                </div>
                <Link to="/login" className={styles.hex1}>
                    <div className={styles.inside}>
                        <div className={styles.stripe1}></div>
                        <h3>log in</h3>
                    </div>
                </Link>
                <Link to="/register" className={styles.hex2}>
                    <div className={styles.inside}>
                        <div className={styles.stripe2}></div>
                        <h3>register</h3>
                    </div>
                </Link>
                <Link to="/careers" className={styles.hex3}>
                    <div className={styles.inside}>
                        <div className={styles.stripe3}></div>
                        <h3>careers</h3>
                    </div>
                </Link>
                <Link to="/contact" className={styles.hex4}>
                    <div className={styles.inside}>
                        <div className={styles.stripe4}></div>
                        <h3>projects</h3>
                    </div>
                </Link>
                <Link to="/about" className={styles.hex5}>
                    <div className={styles.inside}>
                        <div className={styles.stripe5}></div>
                        <h3>about us</h3>
                    </div>
                </Link>
                <Link to="/contact" className={styles.hex6}>
                    <div className={styles.inside}>
                        <div className={styles.stripe6}></div>
                        <h3>contact us</h3>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Home;