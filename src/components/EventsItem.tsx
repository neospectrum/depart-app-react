import React, { FC } from 'react';
import { IEvent } from '../models/IEvent';

interface EventsItemProps {
    event: IEvent
}

export const EventsItem: FC<EventsItemProps> = ({ event }) => {
    const { address, link } = event;
    return (
        <div className='event'>
            <div className='event__header'>
                <div className='event__date'>{ event.start_date } - { event.end_date }</div>
                <div className='event__title'>{ event.title }</div>
            </div>
            <div className='event__body'>
                <div className='event__image'>
                    <img src={ `http://185.87.50.137:8080${event.img_url}` } alt="Мероприятие" />
                </div>
                <div className='event__text'>{ event.text }</div>
            </div>
        </div>
    );
};