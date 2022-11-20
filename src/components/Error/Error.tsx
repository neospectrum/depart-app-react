import React, { FC, ReactNode } from 'react';

import './Error.scss';

interface ErrorProps {
    children: ReactNode
};

export const Error: FC<ErrorProps> = ({ children }) => {
    return (
        <div className={ 'error '}>
            { children }
        </div>
    );
};