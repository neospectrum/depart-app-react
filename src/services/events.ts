import { serverApi } from './api';
import { IEvent } from '../models/IEvent';

export const eventsApi = serverApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllEvents: build.query<IEvent[], number>({
            query: (page_number = 1) => ({
                url: '/events',
                params: {
                    page_number: 1
                }
            }),
            providesTags: result => ['Events']
        }),
        fetchOneEvent: build.query<IEvent, number>({
            query: (id) => ({
                url: `/event?id=${id}`,  
            }),
            providesTags: result => ['Events']
        }),
    })
});

export const {
    useFetchAllEventsQuery,
    useFetchOneEventQuery,
    useLazyFetchAllEventsQuery,
    useLazyFetchOneEventQuery
} = eventsApi;