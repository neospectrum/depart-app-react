import { serverApi } from './api';
import { INew } from '../models/INew';

export const newsApi = serverApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllNews: build.query<INew[], string>({
            query: () => ({
                url: '/all_news',
                params: {
                }
            }),
            providesTags: result => ['News']
        }),
        fetchOneNews: build.query<INew[], number>({
            query: (id) => ({
                method: 'POST',
                url: '/news',
                body: {
                    id
                }
            }),
            providesTags: result => ['News']
        }),
    })
});

export const {
    useFetchAllNewsQuery,
    useFetchOneNewsQuery
} = newsApi;