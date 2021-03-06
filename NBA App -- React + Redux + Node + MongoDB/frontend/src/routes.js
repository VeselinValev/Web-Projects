import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/home/home";
import Layout from "./hoc/layout/layout";
import NewsArticle from "./components/articles/news/posts";
import VideoArticle from "./components/articles/videos/video";
import AllNews from "./components/widgets/newsList/allNews";
import AllVideos from "./components/widgets/videosList/allVideos";

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/articles/:id" component={NewsArticle}/>
                    <Route exact path="/videos/:id" component={VideoArticle}/>
                    <Route exact path="/news" component={AllNews}/>
                    <Route exact path="/videos" component={AllVideos}/>
                </Switch>
            </Layout>
        );
    }
}

export default Routes;