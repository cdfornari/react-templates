import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../lazyLoad/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: JSXComponent | LazyExoticComponent<JSXComponent>;
    name: string;
}

const LazyLayout = lazy(() => import(/*webpackChunkName:"LazyLayout"*/  '../lazyLoad/layout/LazyLayout'))

export const routes: Route[] = [
    {
        to: '/lazyload',
        path: 'lazyload/*',
        Component: LazyLayout,
        name: 'Lazy-Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-Lazy'
    }
];