import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./form.css";

class LoginForm extends Component {
    render() {
        return (
            <div className="loginForm">
                <form>
                    <div className="fieldWrapper">
                    <label>
                        <div className="field">
                            <h4 className="textSecondary">Username</h4>
                            <input type="text"/>
                        </div>
                    </label>
                    <label>
                        <div className="field">
                            <h4 className="textSecondary">Password</h4>
                            <input type="password"/>
                        </div>
                    </label>
                    </div>
                    <input type="submit" value="Log in"/>
                    <Link to='/recovery'>
                        <h4 className="forgottenPass">Forgotten password</h4>
                    </Link>
                </form>
            </div>
        );
    }
}

export default LoginForm;