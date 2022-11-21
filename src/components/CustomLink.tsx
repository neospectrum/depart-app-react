import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom';

interface CustomLinkProps { 
    to: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void
}

export const CustomLink: FC<CustomLinkProps> = ({ children, to, className, onClick }) => {


    const scrollHandler = () => {
        window.scrollTo(0, 320)
        if (onClick) {
            onClick();
        };
    };

    return (
        <Link to={ to } className={ className } onClick={ scrollHandler }>
            { children }
        </Link>
    )
};
