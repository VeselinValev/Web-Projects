import React, {Component} from 'react';
import Header from "../components/header/header";
import LoginForm from "../components/forms/login";
import Footer from "../components/footer/footer";
import AboutContent from "../components/content/aboutContent";

class About extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AboutContent/>
                <Footer/>
            </div>
        );
    }
}

export default About;