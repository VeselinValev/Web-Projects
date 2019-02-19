import React, {Component} from 'react';
import "./form.css";

class RegisterForm extends Component {
    render() {
        return (
            <div className="registerForm">
                <form>
                    <div className="fieldWrapper">
                    <label>
                        <div className="field">
                            <h4 className="textSecondary">Your Name</h4>
                            <input type="text"/>
                        </div>
                    </label>
                    <label>
                        <div className="field">
                            <h4 className="textSecondary">Username</h4>
                            <input type="text"/>
                        </div>
                    </label>
                    <label>
                        <div className="field">
                            <h4 className="textSecondary">Email</h4>
                            <input type="email"/>
                        </div>
                    </label>
                    <label>
                        <div className="field">
                            <h4 className="textSecondary">Password</h4>
                            <input type="password"/>
                        </div>
                    </label>
                    <label>
                        <div className="field">
                            <h3 className="textSecondary">Confirm Password</h3>
                            <input type="password"/>
                        </div>
                    </label>
                    </div>
                    <input type="submit" value="Register"/>
                </form>
            </div>
        );
    }
}

export default RegisterForm;