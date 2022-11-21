import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { useFetchOneNewsQuery, useLazyFetchOneNewsQuery } from '../../services/news';
import { Container } from '../containers/Container';
import { LatestPosts } from '../LatestPosts/LatestPosts';
import { PageTitle } from '../PageTitle/PageTitle';

export const NewsPost = () => {
    const { id } = useParams();

    const [ fetchNew, { data: news }] = useLazyFetchOneNewsQuery();

    useEffect(() => {
        fetchNew(Number(id));
    }, []);

    return (
        <Container>
            <PageTitle></PageTitle>
            { news &&
                <div className='post'>
                    <div className="post__title">
                        <div className='title'>Заголовок новости</div>
                    </div>
                    <div className="post__image">
                        <img src={ news.full_img_url } alt="Изображение новости" />
                    </div>
                    <div className="post__text" >
                        <p>
                            Цифровизация невозможна без разработки и сопровождения информационных, в том числе информационно-вычислительных систем. Вы научитесь разрабатывать программное обеспечение, базы данных, веб-ресурсы, сетевые и мобильные приложения, аппаратные платформы информационных систем, что обеспечит Вам после освоения программы интересную профессиональную деятельность, достойную заработную плату и динамично развивающуюся карьеру.
                        </p>                        
                    </div>
                </div>
            }
            <LatestPosts/>
        </Container>
    );
};