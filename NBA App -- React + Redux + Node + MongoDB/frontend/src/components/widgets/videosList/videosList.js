import React, {Component} from 'react';
import axios from 'axios';
import styles from './videosList.module.css';

import { URL } from '../../../config/config'
import Button from "../buttons/buttons";
import VideosListTemplate from "./videosListTemplate";

class VideosList extends Component {

    state = {
        teams: [],
        videos: [],
        start: this.props.start,
        amount: this.props.amount,
        end: this.props.start + this.props.amount
    };

    renderVideos(){
        let template = null;
        switch (this.props.type) {
            case 'card':
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>
                break;
            default:
                template = null;
        }
        return template;
    }

    renderTitle(){
        return this.props.title ? <h3><strong>NBA</strong> Videos</h3> : null;
    }

    componentWillMount() {
        this.request(this.state.start, this.state.end);
    }

    request = (start, end) => {
        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`).then(response => {
                this.setState({
                    teams: response.data
                })
            })
        }
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    videos: [...this.state.videos, ...response.data]
                });

            })
    };

    render() {
        return (
            <div className={styles.videosList_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                <Button type='link' cta='More Videos'/>
            </div>
        );
    }
}

export default VideosList;