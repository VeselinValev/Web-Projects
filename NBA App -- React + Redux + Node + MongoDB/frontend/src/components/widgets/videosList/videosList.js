import React, {Component} from 'react';
import axios from 'axios';
import styles from './videosList.module.css';
import { URL } from '../../../config/config'
import Button from "../buttons/buttons";
import VideosListTemplate from "./videosListTemplate";

class VideosList extends Component {

    state = {
        teams: JSON.parse(sessionStorage.getItem('teams')),
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
        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    videos: [...this.state.videos, ...response.data],
                    start,
                    end
                });

            })
    };

    loadMore(){
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }

    render() {
        return (
            <div className={styles.videosList_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                <Button type='loadmore' cta='Load More Videos' loadMore={() => this.loadMore()}/>
            </div>
        );
    }
}

export default VideosList;