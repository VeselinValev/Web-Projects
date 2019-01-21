import React, {Component} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import ContactContent from "../components/content/contactContent";

class Contact extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContactContent/>
                <Footer/>
            </div>
        );
    }
}

export default Contact;