import { serverApi } from './api';
import { INew } from '../models/INew';

export const newsApi = serverApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllNews: build.query<INew[], string>({
            query: () => ({
                url: '/all_news',
            }),
            providesTags: result => ['News']
        }),
        fetchOneNews: build.query<INew, number>({
            query: (id) => ({
                url: `/news?id=${id}`,  
            }),
            providesTags: result => ['News']
        }),
    })
});

export const {
    useFetchAllNewsQuery,
    useFetchOneNewsQuery,
    useLazyFetchOneNewsQuery
} = newsApi;