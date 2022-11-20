import React from 'react';
import { Title } from '../Title/Title';

import './Person.scss';

export const Person = () => {
    const photo = 'https://kf.bmstu.ru/uploads/chairs/ff3171247f7cf320b0e8259b902256b4.jfif';
    return (
        <div className="person">
            <div className="person__info">
                <p className='person__zav'>
                    <Title>Заведующий кафедры</Title>
                </p>
                <p className="person__name">
                    Чухраев Игорь Владимирович
                </p>
                <p className="person__contact">
                    Тел: <span>+7 (991) 328-29-96</span>
                </p>
                <p className="person__contact">
                    Почта: <span>iuk2@bmstu.ru</span>
                </p>
            </div>
            <div className="person__image">
                <img src={ photo } alt=""/>
            </div>
        </div>
    );
};