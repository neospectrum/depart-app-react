import React, { FC, ReactNode } from 'react';
import './Title.scss';

interface TitleProps {
    children: ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => {
    return (
        <div className='title'>{ children }</div>
    );
};