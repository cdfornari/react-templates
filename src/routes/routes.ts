interface Route {
    to: string;
    path: string;
    name: string;
}

export const routes: Route[] = [
    {
        to: '/home',
        path: 'home',
        name: 'Home'
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