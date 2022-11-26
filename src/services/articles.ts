import { IArticle } from './../models/IArticle';
import { serverApi } from './api';

export const articlesApi = serverApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllArticles: build.query<IArticle[], number>({
            query: (page_number = 1) => ({
                url: '/articles',
                params: {
                    page_number: 1
                }
            }),
            providesTags: result => ['Articles']
        }),
        fetchOneArticle: build.query<IArticle, number>({
            query: (id) => ({
                url: `/articles?id=${id}`,  
            }),
            providesTags: result => ['Articles']
        }),
    })
});

export const {
    useFetchAllArticlesQuery,
    useFetchOneArticleQuery
} = articlesApi;