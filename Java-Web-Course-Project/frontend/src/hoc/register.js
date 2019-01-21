import React, {Component} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import RegisterForm from "../components/forms/register"

class Register extends Component {
    render() {
        return (
            <div>
               <Header/>
                <RegisterForm/>
                <Footer/>
            </div>
        );
    }
}

export default Register;