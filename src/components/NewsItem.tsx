import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { INew } from '../models/INew';

interface NewsItemProps {
    newsItem: INew
}

export const NewsItem: FC<NewsItemProps> = ({ newsItem }) => {
    return (
        <Link to={ '/' } className="new">
            <div className="new__image">
                <img src={ `http://185.87.50.137:8080${ newsItem.img_url }` } alt="Новость"/>
            </div>
            <div className="new__title">{ newsItem.title }</div>
        </Link>
    );
};