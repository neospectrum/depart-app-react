import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { Route, Routes, Navigate, useLocation  } from 'react-router-dom';
import { publicRoutes } from '../routes/routes';

export const AppRouter = () => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter initial={ false }>
            <Routes location={ location } key={ location.key }>
                { publicRoutes.map(route => {
                    return  <Route 
                                path={ route.path } 
                                element={ <route.component/> }
                                key={ route.path }
                            >
                            </Route>
                })}
                <Route path={ '*' } element={ <Navigate to='/' replace /> }></Route>
            </Routes>
        </AnimatePresence>
    );
};