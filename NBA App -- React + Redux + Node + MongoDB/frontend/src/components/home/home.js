import React, {Component} from 'react';
import NewsSlider from "../widgets/newsSlider/slider";
import NewsList from "../widgets/newsList/newsList";
import VideosLsit from "../widgets/videosList/videosList";
import axios from "axios";
import {URL} from "../../config/config";

class Home extends Component {

    componentWillMount(){
        if (JSON.parse(sessionStorage.getItem('teams')).left < 1){
            axios.get(`${URL}/teams`).then(function (result) {
                sessionStorage.setItem('teams', JSON.stringify(result.data));
            });
        }
    }

    render() {
        return (
            <div>
                <NewsSlider
                    type='featured'
                    start={0}
                    amount={3}/>
                <NewsList
                    type='card'
                    loadmore={true}
                    start={3}
                    amount={3}/>
                <VideosLsit
                    type='card'
                    title={true}
                    loadmore={false}
                    start={0}
                    amount={3}
                />
            </div>
        )
    }
}

export default Home;