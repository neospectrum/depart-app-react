import { ICourse } from './../models/ICourse';
import { serverApi } from './api';

export const courseApi = serverApi.injectEndpoints({
    endpoints: (build) => ({
        fetchAllCourses: build.query<ICourse[], number>({
            query: () => ({
                url: '/plans',
            }),
            providesTags: result => ['Courses']
        }),
    })
});

export const {
    useFetchAllCoursesQuery
} = courseApi;