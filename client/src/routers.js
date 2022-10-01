import Admin from './pages/Admin';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Basket from './pages/Basket';
import Device from './pages/Device';
import Shop from './pages/Shop';

import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE
} from './utils/consts';

export const authRrouter = [
    { path: ADMIN_ROUTE, Component: <Admin/> },
    { path: BASKET_ROUTE, Component: <Basket/> },
];

export const publickRouter = [
    { path: LOGIN_ROUTE, Component: <Login/> },
    { path: REGISTRATION_ROUTE, Component: <Registration/> },
    { path: SHOP_ROUTE, Component: <Shop/> },
    { path: DEVICE_ROUTE + '/:id', Component: <Device/> },
];
