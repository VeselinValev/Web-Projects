import React, {Component} from 'react';
import NewsSlider from "../newsSlider/slider";
import axios from 'axios';
import { URL } from '../../../config/config'
import NewsTemplate from "./newsTemplate";
import styles from './newsList.module.css';

class AllNews extends Component {

    state = {
        articles: [],
        teams: JSON.parse(sessionStorage.getItem('teams'))
    };

    componentWillMount(){
        axios.get(`${URL}/articles`).then(response => {
            this.setState({articles:response.data});
        })
    }

    render() {
        return (
            <div className={styles.newsWrapper}>
                <NewsSlider
                    type='featured'
                    start={0}
                    amount={3}/>
                <NewsTemplate data={this.state.articles} teams={this.state.teams}/>
            </div>
        );
    }
}

export default AllNews;