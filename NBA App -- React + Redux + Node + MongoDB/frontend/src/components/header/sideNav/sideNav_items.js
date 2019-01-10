import React from 'react';
import style from './sideNav.module.css';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

const SideNavItems = () => {

    const items = [
        {
            type: style.option,
            link: '/',
            text: 'Home',
            icon: 'home'
        },
        {
            type: style.option,
            link: '/news',
            text: 'News',
            icon: 'file-text-o'
        },
        {
            type: style.option,
            link: '/videos',
            text: 'Videos',
            icon: 'play'
        },
        {
            type: style.option,
            link: '/sign-in',
            text: 'Sign in',
            icon: 'sign-in'
        },
        {
            type: style.option,
            link: '/sign-out',
            text: 'Sign out',
            icon: 'sign-out'
        }
    ];

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type}>
                <Link to={item.link}>
                    <FontAwesome name={item.icon}/>
                    {item.text}
                </Link>
            </div>
            )
        })
    };

    return (
      showItems()
    );
};

export default SideNavItems;