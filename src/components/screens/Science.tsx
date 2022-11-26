import React from 'react';

import { Container } from '../containers/Container';
import { PageTitle } from '../PageTitle/PageTitle';
import { Article } from '../Article/Article';
import { Button } from '../Button/Button';
import { useFetchAllArticlesQuery } from '../../services/articles';
import { SkeletonArticle } from '../Article/SkeletonArticle';

export const Science = () => {
    const { data: articles, isLoading } = useFetchAllArticlesQuery(1);
    const array = [ 1, 2, 3, 4 ];
    return (
        <div className="science">
            <Container>
                <PageTitle>Научная деятельность</PageTitle>
                <div className="science__articles articles">
                    { !isLoading &&
                        <>
                            { articles?.map((article, index) => {
                                return <Article key={ index } article={ article } isLoading={ isLoading }/>
                            })}
                        </>
                    
                    }
                    { isLoading && 
                        <>
                            { array.map((item, index) => {
                                return <SkeletonArticle key={ index }/>
                            })}
                        </>         
                    }
                    <Button disabled={ isLoading }>Еще статьи</Button>
                </div>
            </Container>
        </div>
    );
};