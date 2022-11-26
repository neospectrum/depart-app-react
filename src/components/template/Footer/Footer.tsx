import {     motion, useWillChange } from 'framer-motion';
import React from 'react';
import { Container } from '../../containers/Container';
import './Footer.scss';

const footerVariants = {
    hidden: {
        y: '100vh',
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y: '0',
        transition: { type: 'tween' }
    },
    exit: {
        y: '100vh',
    }
}

export const Footer = () => {
    return (
        <motion.footer className="footer"
            variants={ footerVariants }
            initial={ 'hidden' }
            animate={ 'visible' }
            exit={ 'exit' }
        >
            <Container>
            </Container>
        </motion.footer>
    );
};