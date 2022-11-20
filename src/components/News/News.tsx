import './News.scss';
import React, { useEffect } from 'react';

import {  useFetchAllNewsQuery, useFetchOneNewsQuery } from '../../services/news';
import axios from 'axios';
import { PageTitle } from '../PageTitle/PageTitle';
import { NewsItem } from '../NewsItem';
import { Button } from '../Button/Button';
import { Error } from '../Error/Error';

export const News = () => {
    const { data: news, error, isLoading } = useFetchAllNewsQuery('');
    const { data: oneNew } = useFetchOneNewsQuery(0);
    console.log(oneNew)

    return (
        <div className="news">
            <PageTitle>Новости</PageTitle>
            <div className="news__posts">
                <ul className="news__list">
                    { isLoading && <h1>Loading</h1>}
                    { error && <Error>Произошла ошибка при загрузке новостей</Error>}
                    { news && news.map((item, index) => {
                        return  <li key={ index }>
                                    <NewsItem newsItem={ item }/>
                                </li>
                    }) }
                </ul>
                <Button>Все новости</Button>
            </div>  
        </div>
    );
};

