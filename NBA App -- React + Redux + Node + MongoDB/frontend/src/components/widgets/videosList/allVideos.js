import React, {Component} from 'react';
import axios from 'axios';
import { URL } from '../../../config/config'
import styles from "../newsList/newsList.module.css";
import NewsSlider from "../newsSlider/slider";
import VideosListTemplate from "./videosListTemplate";

class AllVideos extends Component {

    state = {
        videos: [],
        teams: JSON.parse(sessionStorage.getItem('teams'))
    };

    componentWillMount(){
        axios.get(`${URL}/videos`).then(response => {
            this.setState({videos:response.data});
        })
    }
    render() {
        return (
            <div className={styles.newsWrapper}>
                <NewsSlider
                    type='featured'
                    start={0}
                    amount={3}/>
                <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>
            </div>
        );
    }
}

export default AllVideos;