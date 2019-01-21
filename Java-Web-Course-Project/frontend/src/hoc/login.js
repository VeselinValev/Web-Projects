import React, {Component} from 'react';
import Header from "../components/header/header";
import LoginForm from "../components/forms/login";
import Footer from "../components/footer/footer";

class Login extends Component {
    render() {
        return (
            <div>
                <Header/>
                <LoginForm/>
                <Footer/>
            </div>
        );
    }
}

export default Login;