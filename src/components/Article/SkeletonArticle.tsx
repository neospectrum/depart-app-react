import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '../../models/IArticle';

import './Article.scss';


export const SkeletonArticle: FC = () => {

    return (
        <div className="science__article article">
            <div className="article__content">
                <div  className="article__title skeleton">
                    <Link to={ '' }>
                        { '' }
                    </Link>
                </div>
                <div className="article__image skeleton">
                </div>
                <div className="article__text skeleton skeleton-text"/>
            </div>
        </div>
    );
};