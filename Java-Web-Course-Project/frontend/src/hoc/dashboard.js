import React, {Component} from 'react';
import Platform from "../components/dashboard/platform/platform";
import Navigation from "../components/dashboard/navigation/navigation";
import stykes from './style.module.css';
import Participants from "../components/dashboard/participants/participants";
import Chat from "../components/dashboard/chat/chat";
import $ from 'jquery';

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