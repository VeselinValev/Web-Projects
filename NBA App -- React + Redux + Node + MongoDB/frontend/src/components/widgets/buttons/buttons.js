import React from 'react';
import {Link} from 'react-router-dom';
import styles from './buttons.module.css';

const Button = (props) => {
    let template = null;
    switch (props.type) {
        case 'loadmore':
            template = (
                <div className={styles.blue_btn}
                onClick={props.loadMore}>
                    {props.cta}
                </div>
            );
            break;
        case 'link':
            template = (
                    <Link className={styles.blue_btn} to='/videos'>
                        {props.cta}
                    </Link>
            );
            break;
        default:
            template = null;
    }
    return template;
};

export default Button;