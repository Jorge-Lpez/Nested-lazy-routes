import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';


type JSXComponent = () => JSX.Element;


interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string;
}


const LazyLaout = lazy(() => import(/*WebpackChunkName: "LazyLayout*/ "../01-lazyload/layout/LazyLayout"));

//const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
// const Lazy1  = lazy( () => import(/*WebpackChunkName: "LazyPage1*/ "../01-lazyload/pages/LazyPage1"));
// const Lazy2  = lazy(() => import(/*WebpackChunkName: "LazyPage2*/ "../01-lazyload/pages/LazyPage2"));
// const Lazy3  = lazy(() => import(/*WebpackChunkName: "LazyPage3*/ "../01-lazyload/pages/LazyPage3"));


export const routes:Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLaout,
        name: "LazyLayout - Dash"
    },
    {
        to: "/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "No lazy"
    }
];