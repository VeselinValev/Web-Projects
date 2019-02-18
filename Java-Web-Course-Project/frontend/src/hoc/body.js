import React, {Component} from 'react';
import styles from "./style.module.css";

class Body extends Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                {this.props.children}
            </div>
        );
    }
}

export default Body;