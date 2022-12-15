import { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AppLayout, AuthLayout } from 'common/layout';
import { ROUTES } from 'common/types/routes';

export const HomePage = lazy(
  () => import('pages/HomePage' /* webpackChunkName: "HomePage" */),
);

export const LoginPage = lazy(
  () => import('pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);

export const NotFoundPage = lazy(
  () => import('pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.AUTH} element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />,
    </Route>,
  ),
);
