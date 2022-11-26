import './Header.scss';
import React, { FC, useEffect, useState } from 'react';

import { MotionValue, motion, useTransform } from 'framer-motion';

import { Container } from '../../containers/Container';
import { CustomLink } from '../../CustomLink';

interface HeaderProps {
    offsetY: Array<number>
    scrollY: MotionValue<number>
};

export const Header: FC<HeaderProps> = ({ offsetY, scrollY }) => {
    const [ active, setActive ] = useState(false);

    const toggleHandler = () => {
        setActive(prev => !prev);
    }

    const fontSizes = {
        bigSubTitle: [ '0.9rem', '0.7rem' ],
        smallSubTitle: [ '0.7rem', '0.5rem' ],
        bigTitle: [ '1.8rem', '1.4rem' ],
        smallTitle: [ '1.4rem', '1rem' ]
    }

    const imageSizes = {
        big: [ 60, 50 ],
        small: [ 50, 40 ]
    }

    const heightSizes = {
        big: [ 104, 80 ],
        small: [ 80, 60 ]
    }

    const backgroundColorSize = [ 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)' ];
    const boxShadowSize = [ '0 0 5px rgba(116, 24, 48, 0)', '0 0 5px rgba(116, 24, 48, 1)' ];

    const backgroundColor = useTransform(scrollY, offsetY, backgroundColorSize);
    const boxShadow = useTransform(scrollY, offsetY, boxShadowSize);

    const bigHeaderHeight = useTransform(scrollY, offsetY, heightSizes.big);
    const smallHeaderHeight = useTransform(scrollY, offsetY, heightSizes.small);

    const bigLogoWidth = useTransform(scrollY, offsetY, imageSizes.big);
    const smallLogoWidth = useTransform(scrollY, offsetY, imageSizes.small);

    const bigSubTitleFontSize = useTransform(scrollY, offsetY, fontSizes.bigSubTitle);
    const smallSubTitleFontSize = useTransform(scrollY, offsetY, fontSizes.smallSubTitle);
    const bigTitleFontSize = useTransform(scrollY, offsetY, fontSizes.bigTitle);
    const smallTitleFontSize = useTransform(scrollY, offsetY, fontSizes.smallTitle);

    const windowWidth = (window.innerWidth > 767);
    
    const scrollHandler = () => {
        setActive(prev => !prev)
    }

    return (
        <motion.div>
            <motion.header
                className="header"
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: 'tween', duration: 0.2}}
                style={{ backgroundColor, boxShadow }}
            >
                <Container>
                    <motion.div className="header__body" style={{ height: windowWidth ? bigHeaderHeight : smallHeaderHeight }}>
                        <CustomLink to={ '/' } className="logo">
                            <div className="logo__image">
                                <motion.img src="https://kf.bmstu.ru/bmstu/img/logo.png" alt="" style={{ width: windowWidth ? bigLogoWidth : smallLogoWidth }}/>
                            </div>
                            <div className="logo__text">
                                <motion.div 
                                    className="logo__sub-title" 
                                    style={{ fontSize: windowWidth ? bigSubTitleFontSize : smallSubTitleFontSize }}
                                >
                                    КФ МГТУ им. Н.Э.Баумана
                                </motion.div>
                                <motion.div 
                                    className="logo__title" 
                                    style={{ fontSize: windowWidth ?  bigTitleFontSize : smallTitleFontSize }}
                                >
                                    кафедра ИУК2
                                </motion.div>
                            </div>
                        </CustomLink>
                        <div className={ `header__menu menu ${active && 'active'}`}>
                            <div className="menu__body">
                            <ul className="menu__list">
                                <li><CustomLink to={ '/' } onClick={ scrollHandler } className="menu__link">Новости</CustomLink></li>
                                <li><CustomLink to={ '/about' } onClick={ scrollHandler } className="menu__link">О нас</CustomLink></li>
                                <li><CustomLink to={ '/courses' } onClick={ scrollHandler } className="menu__link">Студентам</CustomLink></li>
                                <li><CustomLink to={ '/science' } onClick={ scrollHandler } className="menu__link">Наука</CustomLink></li>
                            </ul>
                            </div>
                        </div>
                        <div className={ `header__burger ${active && 'active'}`} onClick={ toggleHandler }>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </motion.div>
                </Container>
            </motion.header>
        </motion.div>
    );
};
