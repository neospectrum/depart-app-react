import React, { FC } from 'react';
import { Title } from '../Title/Title';

import './Course.scss';

interface CourseProps {
    numberOfCourse: number
    semesters: { 
        first: string
        second: string
    }
}

export const Course: FC<CourseProps> = ({ numberOfCourse, semesters }) => {
    return (
        <div className="course">
            <div className="course__title">
                <Title>
                    { numberOfCourse } Курс
                </Title>
            </div>
            <div className="course__semesters">
                <div className="course__semester semester">
                    <div className="semester__image">
                        <img src="http://kfbmstu.info/pages/09.03.01-iuk2/img/img_other_kaf.png" alt=""/>
                    </div>
                    <div className="semester__title">{ semesters.first } семестр</div>
                </div>
                <div className="course__semester semester">
                    <div className="semester__image">
                        <img src="http://kfbmstu.info/pages/09.03.01-iuk2/img/img_other_kaf.png" alt=""/>
                    </div>
                    <div className="semester__title">{ semesters.second } семестр</div>
                </div>
            </div>
        </div>
    );
};