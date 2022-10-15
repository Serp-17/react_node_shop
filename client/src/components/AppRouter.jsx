import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Context } from '../';
import { authRrouter, publickRouter } from '../routers';

const AppRouter = () => {
    const { user } = useContext(Context);
    return (
        <Routes>
            {user.isAuth && authRrouter.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} />
            )}
            {publickRouter.map(({ path, Component }) =>
                <Route key={path} path={path} element={Component} />
            )}
            <Route
                path="/*"
                element={<Navigate to='/' />}
            />
        </Routes>
    )
};

export default AppRouter;