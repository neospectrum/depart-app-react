import React, { FC, ReactNode } from 'react';

import './Button.scss';

interface ButtonProps {
    children: ReactNode
};

export const Button: FC<ButtonProps> = ({ children }) => {
    return (
        <div className="btn">
            { children }
        </div>
    );
};