import './Events.scss';
import React from 'react';

import { PageTitle } from '../PageTitle/PageTitle';
import { EventsItem } from '../EventsItem';

import { Button } from '../Button/Button';
import { useFetchAllEventsQuery } from '../../services/events';
import { Error } from '../Error/Error';

export const Events = () => {
    const { data: events, error, isLoading } = useFetchAllEventsQuery(1);

    return (
        <div className="events">
        <PageTitle>Мероприятия</PageTitle>
            <div className="events__posts">
                <ul className="events__list">
                { isLoading && <h1>Loading</h1>}
                { error && <Error>Произошла ошибка при загрузке новостей</Error>}
                { events && events.map((item, index) => {
                    return <>
                        <li key={ index } className="events__item">
                                <EventsItem event={ item }/>
                            </li>
                            <li key={ index } className="events__item">
                                <EventsItem event={ item }/>
                            </li>
                    </>
                        })}
                </ul>
                <Button>Все мероприятия</Button>
            </div>
        </div>
    );
};