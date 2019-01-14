import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../../config/config';
import styles from './newsList.module.css';
import Button from "../buttons/buttons";
import CardInfo from "../cardInfo/cardInfo";

class NewsList extends Component {
    state = {
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount,
        teams: JSON.parse(sessionStorage.getItem('teams'))
    };

    componentWillMount() {
        this.request(this.state.start, this.state.end);
    }

    request = (start, end) => {
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    items: [...this.state.items, ...response.data],
                    start,
                    end
                });
            })
    };


    renderNews = (type) => {
        return this.state.items.map((item, i) => {
            switch (type) {
                case 'card':
                    return (
                        <CSSTransition
                            classNames={{
                                enter: styles.newsList_wrapper,
                                enterActive: styles.newsList_wrapper_enter
                            }}
                            timeout={500}
                            key={i}>
                            <div>
                                <div className={styles.newsItem_item}>
                                    <CardInfo teams={this.state.teams} teamId={item.team} date={item.date}/>
                                    <Link to={`/articles/${item.id}`}>
                                        <h2>{item.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </CSSTransition>
                    );
                default:
                    return null;
            }
        })
    };

    loadMore() {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }

    render() {
        return (
            <div>
                <TransitionGroup
                    component='div'
                    className='list'>
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type='loadmore'
                    loadMore={() => this.loadMore()}
                    cta='Load More News'/>
            </div>
        );
    }
}

export default NewsList;