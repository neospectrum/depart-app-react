import './Header.scss';
import React, { FC, useState } from 'react';

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

    const heightSizes = [ 104, 80 ];
    const imageSizes = [ 60, 50 ];
    const subTitleFontSizes = [ '0.9rem', '0.7rem' ];
    const titleFontSizes = [ '1.8rem', '1.4rem' ];

    const height = useTransform(scrollY, offsetY, heightSizes);
    const width= useTransform(scrollY, offsetY, imageSizes);
    const subTitleFontSize = useTransform(scrollY, offsetY, subTitleFontSizes);
    const titleFontSize = useTransform(scrollY, offsetY, titleFontSizes);

    const scrollHandler = () => {
        setActive(prev => !prev)
    }

    return (
        <>
            <motion.header
            className="header"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', duration: 0.2}}
        >
        <Container>
            <motion.div className="header__body" style={{ height }}>
                <CustomLink to={ '/' } className="logo">
                    <div className="logo__image">
                        <motion.img src="https://kf.bmstu.ru/bmstu/img/logo.png" alt="" style={{ width }}/>
                    </div>
                    <div className="logo__text">
                        <motion.div 
                            className="logo__sub-title" 
                            style={{ fontSize: subTitleFontSize }}
                        >
                            КФ МГТУ им. Н.Э.Баумана
                        </motion.div>
                        <motion.div 
                            className="logo__title" 
                            style={{ fontSize: titleFontSize }}
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
        </>
    );
};
