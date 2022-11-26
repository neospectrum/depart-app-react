import './News.scss';
import React, { useEffect, useState } from 'react';

import {  useFetchAllNewsQuery } from '../../services/news';
import { PageTitle } from '../PageTitle/PageTitle';
import { NewsItem } from './NewsItem';
import { Button } from '../Button/Button';
import { Error } from '../Error/Error';
import { SkeletonNewsItem } from './SkeletonNewsItem';
import { INew } from '../../models/INew';
import { AnimatePresence, motion } from 'framer-motion';
import { loadNewsVariants } from '../../constants/variants';

export const News = () => {
    const [ news, setNews ] = useState<INew[]>([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const { data: allNews, isLoading: allNewsIsLoading, error: allNewsError, refetch } = useFetchAllNewsQuery(currentPage);
    const skeletonNews = [ 1, 2, 3, 4, 5, 6 ];

    useEffect(() => {
        if (allNews) {
            setNews([ ...news, ...allNews ]);
        };
    }, [ allNews ]);

    const clickHandler = () => {
        setCurrentPage(page => page + 1);
        refetch();
    }

    return (
        <div className="news">
            <PageTitle>Новости</PageTitle>
            <div className="news__posts">
                <ul className="news__list">
                    <AnimatePresence>
                        { allNewsIsLoading && skeletonNews.map((skeleton, index) => {
                            return <SkeletonNewsItem key={ index }/>
                        })}
                        { allNewsError && <Error>Произошла ошибка при загрузке новостей</Error>}
                        { news.map((item, index) => {
                            return  <motion.li key={ item.id }
                                variants={ loadNewsVariants }
                                initial={ 'hidden' }
                                animate={ 'visible' }
                                exit={ 'exit' }
                            >
                                <NewsItem newsItem={ item }/> 
                            </motion.li>
                        }) }
                    </AnimatePresence>
                </ul>
                <Button onClick={ clickHandler } disabled={ currentPage > 3 }>Все новости</Button>
            </div>  
        </div>
    );
};

