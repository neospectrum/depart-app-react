import React from 'react';

import { PageTitle } from '../PageTitle/PageTitle';
import { EventsItem } from '../EventsItem';

import './Events.scss';
import { Button } from '../Button/Button';
import { useFetchAllEventsQuery } from '../../services/events';

export const Events = () => {
    const { data: events, error, isLoading } = useFetchAllEventsQuery(1);
    
    return (
        <div className="events">
        <PageTitle>Мероприятия</PageTitle>
            <div className="events__posts">
                <ul className="events__list">
                { events && events.map((item, index) => {
                    return <li key={ index } className="events__item">
                                <EventsItem event={ item }/>
                            </li>
                        })}
                </ul>
                <Button>Все мероприятия</Button>
            </div>
        </div>
    );
};