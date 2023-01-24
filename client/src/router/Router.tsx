import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import { LoadingSpinner } from '~/components/LoadingSpinner';
import { NavBar } from '~/components/NavBar';

const Loading = () => <LoadingSpinner />;

const IndexScreen = lazy(() => import('~/screens/Index'));
const Page404Screen = lazy(() => import('~/screens/404'));
const SignUpScreen = lazy(() => import('~/screens/SignUp'));
const ExploreScreen = lazy(() => import('~/screens/Explore'));

function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export const Router = () => {
    return (
        <BrowserRouter>
            <InnerRouter />
        </BrowserRouter>
    );
};

const InnerRouter = () => {
    const routes: RouteObject[] = [
        {
            path: 'register',
            element: <SignUpScreen />,
        },
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <IndexScreen />,
                },
                {
                    path: '*',
                    element: <Page404Screen />,
                },
                {
                    path: 'explore/*',
                    element: <ExploreScreen />,
                },
            ],
        },
    ];
    const element = useRoutes(routes);
    return (
        <div>
            <Suspense fallback={<Loading />}>{element}</Suspense>
        </div>
    );
};
