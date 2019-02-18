import React, {Component} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Body from "./body";

class Layout extends Component {

    render() {
        return (
            <div>
                {/*<Header/>*/}
                <Body>
                {this.props.children}
                </Body>
                <Footer/>
            </div>
        );
    }
}

export default Layout;