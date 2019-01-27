import React, {Component} from 'react';
import styles from './chat.module.css';

class Chat extends Component {
    render() {
        return (
            <div className={styles.chat}>
                <div><h2>Project chat</h2></div>
                <div className={styles.chatWindow}></div>
                <input type="text"/>
                <button>Send</button>
            </div>
        );
    }
}

export default Chat;