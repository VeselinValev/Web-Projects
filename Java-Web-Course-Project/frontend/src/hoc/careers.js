import React, {Component} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import CareersContent from "../components/content/careersContent";

class Careers extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CareersContent/>
                <Footer/>
            </div>
        );
    }
}

export default Careers;