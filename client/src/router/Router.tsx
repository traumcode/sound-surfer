import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter } from 'react-router-dom';
import { LoadingSpinner } from '~/components/LoadingSpinner';
import { NavBar } from '~/components/NavBar';
import Layout from '~/layout/Layout';


const Loading = () => <LoadingSpinner />;

const IndexScreen = lazy(() => import('~/screens/Index'));
const Page404Screen = lazy(() => import('~/screens/404'));
const SignUpScreen = lazy(() => import('~/screens/SignUp'));
const LogInScreen = lazy(() => import('~/screens/LogIn'));
const ExploreScreen = lazy(() => import('~/screens/Explore'));

function LayoutScreen() {
    return (
       <Layout/>
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
        },        {
            path: 'login',
            element: <LogInScreen />,
        },
        {
            path: '/',
            element: <LayoutScreen />,
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
