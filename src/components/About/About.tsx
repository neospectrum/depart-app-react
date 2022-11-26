import React from 'react';

import { Container } from '../containers/Container';

import './About.scss';
import { Canvas } from './Canvas/Canvas';

export const About = () => {
    return (
        <section className="about">
            <Canvas/>
            <div className="about__body">
                <Container>
                    <div className="about__content">
                    <h1 className='about__title'>ИУК2 "Информационные <span>системы и сети"</span></h1>
                    <h2 className='about__text'>Краткая информация о кафедре</h2>
                    </div>
                </Container>
            </div>
        </section>
    );
};