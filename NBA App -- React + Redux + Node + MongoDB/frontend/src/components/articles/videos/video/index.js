import React, {Component} from 'react';
import styles from '../../articles.module.css';
import axios from "axios";
import {URL} from "../../../../config/config";
import Header from "./header";
import RelatedVideos from "../../../widgets/videosList/relatedVideos/relatedVideos";

class VideoArticle extends Component {

    state = {
        article: [],
        team: [],
        related: [],
        teams: JSON.parse(sessionStorage.getItem('teams'))
    };

    componentWillMount() {
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`).then(response => {
            let article = response.data[0];
            axios.get(`${URL}/teams?id=${article.team}`).then(response => {
                this.setState({
                    article,
                    team: response.data
                });
                this.getRelatedVideos();
            })
        })
    }

    getRelatedVideos(){
        axios.get(`${URL}/videos?q=${this.state.team[0].city}&_limit=3`).then(response => {
            this.setState({related:response.data});
        })
    }

    render() {
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div>
                <Header teamData={team[0]}/>
                <div className={styles.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe src={`https://www.youtube.com/embed/${article.url}`}
                            title='videoplayer'
                            width='100%'
                            height='300px'/>
                </div>
                <RelatedVideos teams={this.state.teams} data={this.state.related}/>
            </div>
        );
    }
}

export default VideoArticle;