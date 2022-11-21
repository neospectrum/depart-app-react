import React from 'react';
import { useMatch } from 'react-router';
import { Main } from '../components/containers/Main';
import { EventPost } from '../components/screens/EventsPost';
import { NewsPost } from '../components/screens/NewsPost';

export const PostPage = () => {
    const match = useMatch({ path: '/posts/events/:id'});
    console.log(match);
    return (
        <Main>
            { match ?
                <EventPost/>
                :
                <NewsPost/>
            }
        </Main>
    );
};

