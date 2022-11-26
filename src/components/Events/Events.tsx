import './Events.scss';
import React from 'react';

import { PageTitle } from '../PageTitle/PageTitle';
import { EventsItem } from './EventsItem';

import { Button } from '../Button/Button';
import { useFetchAllEventsQuery } from '../../services/events';
import { Error } from '../Error/Error';
import { SkeletonEventsItem } from './SkeletonEventsItem';

export const Events = () => {
    const { data: events, error, isLoading } = useFetchAllEventsQuery(1);
    const skeletonEvents = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
    
    return (
        <div className="events">
        <PageTitle>Мероприятия</PageTitle>
            <div className="events__posts">
                <ul className="events__list">
                { isLoading && skeletonEvents.map((skeleton, index) => {
                    return <SkeletonEventsItem key={ index }/>
                }) }
                { error && <Error>Произошла ошибка при загрузке мероприятий</Error>}
                { events && events.map((item, index) => {
                    return <li key={ item.id } className="events__item">
                                <EventsItem event={ item }/>
                        </li>
                        })}
                </ul>
                <Button disabled={ isLoading }>Все мероприятия</Button>
            </div>
        </div>
    );
};