import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';
import { CustomLink } from './CustomLink';

interface EventsItemProps {
    event: IEvent
}

export const EventsItem: FC<EventsItemProps> = ({ event }) => {

    return (
        <div className='event'>
            <CustomLink to={ `/posts/events/${event.id}` } className='event__title'>Умник: Технологический конкурс для юных умов и всех прочих</CustomLink>
            <div className='event__date'>18 декабря-22 декабря 2022</div>
        </div>
    );
};