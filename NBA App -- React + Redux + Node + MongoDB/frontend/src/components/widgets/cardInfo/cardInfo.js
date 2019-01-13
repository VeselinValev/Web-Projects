import React from 'react';
import styles from './cardInfo.module.css';
import FontAwesome from 'react-fontawesome';

const CardInfo = (props) => {
    const team = props.teams.find(team => team.id === props.teamId);
    return (
        <div className={styles.cardNfo}>
            <span className={styles.teamName}>
                {team.name}
            </span>
            <span className={styles.date}>
                <FontAwesome name='clock-o'/>
                {props.date}
            </span>
        </div>
    );
};

export default CardInfo;