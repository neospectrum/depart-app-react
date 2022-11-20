import { motion } from 'framer-motion';
import React, { FC, ReactNode } from 'react';

import { mainVariants } from '../../constants/variants';

interface MainProps {
    children: ReactNode
};

export const Main: FC<MainProps> = ({ children }) => {
    return (
        <motion.section className={ 'main' }
            variants={ mainVariants }
            initial={ 'hidden' }
            animate={ 'visible' }
            exit={ 'exit' }
        >
            { children }
        </motion.section>
    );
};