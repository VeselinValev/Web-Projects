import React, {Component} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import SupportContent from "../components/content/supportContent";

class Support extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SupportContent/>
                <Footer/>
            </div>
        );
    }
}

export default Support;