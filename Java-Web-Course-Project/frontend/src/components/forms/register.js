import React, {Component} from 'react';
import styles from "./forms.module.css"

class RegisterForm extends Component {
    render() {
        return (
            <div className={styles.form}>

                <form>
                    <h1 className={styles.textPrimary}>Register</h1>
                    <label>
                        <div className={styles.field}>
                            <h4 className={styles.textSecondary}>Your Name</h4>
                            <input type="text"/>
                        </div>
                    </label>
                    <label>
                        <div className={styles.field}>
                            <h4 className={styles.textSecondary}>Username</h4>
                            <input type="text"/>
                        </div>
                    </label>
                    <label>
                        <div className={styles.field}>
                            <h4 className={styles.textSecondary}>Email</h4>
                            <input type="email"/>
                        </div>
                    </label>
                    <label>
                        <div className={styles.field}>
                            <h4 className={styles.textSecondary}>Password</h4>
                            <input type="password"/>
                        </div>
                    </label>
                    <label>
                        <div className={styles.field}>
                            <h3 className={styles.textSecondary}>Confirm Password</h3>
                            <input type="password"/>
                        </div>
                    </label>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        );
    }
}

export default RegisterForm;