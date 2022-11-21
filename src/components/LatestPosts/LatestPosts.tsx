import React from 'react';
import './LatestPosts.scss';

export const LatestPosts = () => {
    return (
        <div className="latest-posts">
            <div className="latest-posts__title title">
                Последние новости
            </div>
            <ul className='latest-posts__list'>
                <li className="latest-posts__item">
                    <div className="latest-posts__image">
                        <img src="" alt="" />
                    </div>
                </li>
                <li className="latest-posts__item">
                    <div className="latest-posts__image">
                        <img src="" alt="" />
                    </div>
                </li>
                <li className="latest-posts__item">
                    <div className="latest-posts__image">
                        <img src="" alt="" />
                    </div>
                </li>
            </ul>
        </div>
    );
};
