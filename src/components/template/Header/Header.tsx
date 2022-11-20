import './Header.scss';
import React, { FC, useState } from 'react';

import { MotionValue, motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Container } from '../../containers/Container';

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
        window.scrollTo(0, 320)
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
                <Link to={ '/' } className="logo">
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
                </Link>
                <div className={ `header__menu menu ${active && 'active'}`}>
                    <div className="menu__body">
                    <ul className="menu__list">
                        <li><Link to={ '/' } onClick={ scrollHandler } className="menu__link">Новости</Link></li>
                        <li><Link to={ '/about' } onClick={ scrollHandler } className="menu__link">О нас</Link></li>
                        <li><Link to={ '/courses' } onClick={ scrollHandler } className="menu__link">Студентам</Link></li>
                        <li><Link to={ '/science' } onClick={ scrollHandler } className="menu__link">Наука</Link></li>
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
