import React from 'react';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container } from '../containers/Container';
import { PageTitle } from '../PageTitle/PageTitle';
import { Course } from '../Course/Course';

const semesters = {
    first: '1',
    second: '2'
}



export const Courses = () => {

    return (<div className="courses">
        <Container>
            <PageTitle>Учебный план</PageTitle>
            <div className="courses__body">
                <Swiper
                    modules={[Pagination, FreeMode]}
                    spaceBetween={ 50 }
                    slidesPerView={ 1 }
                    loop={ true }
                    pagination={{ clickable: true, renderBullet(index, className) {
                        return `<span class='${className}'><div>${index + 1} Курс</div></span>`;
                    }, }}
                    freeMode={{ enabled: true, sticky: true, momentum: true }}
                >
                    <SwiperSlide>
                    <Course numberOfCourse={ 1 } semesters={ semesters }/>
                    </SwiperSlide>    
                    <SwiperSlide>
                    <Course numberOfCourse={ 2 } semesters={ semesters }/>
                    </SwiperSlide>    
                    <SwiperSlide>
                    <Course numberOfCourse={ 3 } semesters={ semesters }/>
                    </SwiperSlide>    
                    <SwiperSlide>
                    <Course numberOfCourse={ 4 } semesters={ semesters }/>
                    </SwiperSlide>    
                </Swiper>
            </div>
        </Container>
    </div>)
};
