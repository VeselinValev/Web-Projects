import React, {Component} from 'react';
import styles from '../../articles.module.css'
import {URL} from '../../../../config/config'
import axios from 'axios';
import Header from "./header";
import Body from "./body";


class NewsArticle extends Component {

    state = {
        article: [],
        team: []
    };

    componentWillMount() {
        axios.get(`${URL}/articles?id=${this.props.match.params.id}`).then(response => {
            let article = response.data[0];
            axios.get(`${URL}/teams?id=${article.team}`).then(response => {
                this.setState({
                    article,
                    team: response.data
                });
            })
        })
    }

    render() {
        const article = this.state.article;
        const team = this.state.team;
        return (
            <div className={styles.articleWrapper}>
                <Header teamData={team[0]} date={article.date} author={article.author}/>
                <Body title={article.title} image={article.image} text={article.body}/>
            </div>
        );
    }
}

export default NewsArticle;