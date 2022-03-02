import { ShoppingPage } from '../component-patterns/pages/ShoppingPage';
interface Route {
    to: string;
    path: string;
    name: string;
    Component?: () => JSX.Element;
}

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        name: 'Shop',
        Component: ShoppingPage
    },
    {
        to: '/about',
        path: 'about',
        name: 'About'
    },
    {
        to: '/users',
        path: 'users',
        name: 'Users'
    },
];