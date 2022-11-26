import React, { FC, ReactNode } from 'react';

import './Button.scss';

interface ButtonProps {
    children: ReactNode
    disabled?: boolean
    onClick?: () => void
};

export const Button: FC<ButtonProps> = ({ children, disabled, onClick }) => {
    return (
        <button className="btn" type='button' disabled={ disabled } onClick={ onClick }>
            { children }
        </button>
    );
};