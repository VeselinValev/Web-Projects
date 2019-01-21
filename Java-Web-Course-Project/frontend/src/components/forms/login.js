import React, {Component} from 'react';
import styles from "./forms.module.css"
import {Link} from 'react-router-dom';

class LoginForm extends Component {
    render() {
        return (
            <div className={styles.loginForm}>
                <form>
                    <h1 className={styles.textPrimary}>Sign in</h1>
                    <label>
                        <div className={styles.field}>
                            <h4 className={styles.textSecondary}>Username</h4>
                            <input type="text"/>
                        </div>
                    </label>
                    <label>
                        <div className={styles.field}>
                            <h4 className={styles.textSecondary}>Password</h4>
                            <input type="password"/>
                        </div>
                    </label>
                    <input type="submit" value="Login"/>
                    <Link to='/recovery'>
                        <h4 className={styles.forgottenPass}>Forgotten password</h4>
                    </Link>
                </form>
            </div>
        );
    }
}

export default LoginForm;