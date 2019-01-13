import React from 'react';
import { Link } from 'react-router-dom';
import styles from './videosList.module.css';
import CardInfo from "../cardInfo/cardInfo";

const VideosListTemplate = (props) => {
    return props.data.map((item, i) => {
        console.log(item);
        return <Link to={`/videos/${item.id}`} key={i}>
            <div className={styles.videosListItem_wrapper}>
                <div className={styles.left}
                     style={{
                         background: `url(/images/videos/${item.image})`
                     }}>

                    <div></div>
                </div>
                <div className={styles.right}>
                    <CardInfo teams={this.props.teams} teamId={item.team} date={item.date}/>
                    <h2>{item.title}</h2>
                </div>
            </div>
        </Link>
    })
};

export default VideosListTemplate;