import React, {Component} from 'react';
import NewsSlider from "../newsSlider/slider";
import axios from 'axios';
import { URL } from '../../../config/config'

class AllNews extends Component {

    state = {
        articles: []
    };

    componentWillMount(){
        axios.get(`${URL}/articles`).then(response => {
            this.setState({articles:response.data});
        })
    }

    render() {
        return (
            <div>
                <NewsSlider
                    type='featured'
                    start={0}
                    amount={3}/>
            </div>
        );
    }
}

export default AllNews;