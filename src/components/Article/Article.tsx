import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IArticle } from '../../models/IArticle';

import './Article.scss';

interface ArticleProps {
    article: IArticle;
    isLoading: boolean
};

export const Article: FC<ArticleProps> = ({ article }) => {

    return (
        <div className="science__article article">
            <div className="article__content">
                <div  className="article__title">
                    <Link to={ article.link }>
                        { article.title }
                    </Link>
                </div>
                <div className="article__image">
                    <img src={ article.full_img_url } alt=""/>
                </div>
                {/* <div className="article__text" dangerouslySetInnerHTML={{ __html: article.text }}/> */}
            </div>
        </div>
    );
};