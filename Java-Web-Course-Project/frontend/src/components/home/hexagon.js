import React, {Component} from 'react';
import styles from "./home.module.css";

class Hexagon extends Component {
    render() {
        return (
            <div className={styles.inside}>
                {this.props.children}
            </div>
        );
    }
}

export default Hexagon;