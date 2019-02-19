import React, {Component} from 'react';
import Platform from "../components/dashboard/platform/platform";
import Navigation from "../components/dashboard/navigation/navigation";
import Chat from "../components/dashboard/chat/chat";

class Dashboard extends Component {


    render() {
        return (
            <div>
                <Navigation/>
                <Platform/>
                <Chat/>
            </div>
        );
    }
}

export default Dashboard;