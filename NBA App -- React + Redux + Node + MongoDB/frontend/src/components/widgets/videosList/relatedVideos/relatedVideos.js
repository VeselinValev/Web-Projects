import React from 'react';
import styles from '../videosList.module.css';
import VideosListTemplate from "../videosListTemplate";

const RelatedVideos = (props) => {
    return (
        <div className={styles.relatedWrapper}>
            <VideosListTemplate data={props.data} teams={props.teams}/>
        </div>
    );
};

export default RelatedVideos;