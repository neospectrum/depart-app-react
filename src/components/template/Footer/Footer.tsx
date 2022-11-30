import './Footer.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../../containers/Container';

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
};

export const Footer = () => {
    return (
        <motion.footer className="footer"
            variants={ footerVariants }
            initial={ 'hidden' }
            animate={ 'visible' }
            exit={ 'exit' }
        >
            <Container>
                <div className="footer__body">
                    <div className="date">@2022</div>
                </div>
            </Container>
        </motion.footer>
    );
};