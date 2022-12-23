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

export const MyBenefitsPage = lazy(
  () => import('pages/MyBenefitsPage' /* webpackChunkName: "MyBenefitsPage" */),
);

export const BenefitGuidePage = lazy(
  () =>
    import('pages/BenefitGuidePage' /* webpackChunkName: "BenefitGuidePage" */),
);

export const BenefitsMapPage = lazy(
  () =>
    import('pages/BenefitsMapPage' /* webpackChunkName: "BenefitGuidePage" */),
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.HOME} element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTES.MYBENEFITS} element={<MyBenefitsPage />} />
      <Route path={ROUTES.BENEFITS_GUIDE} element={<BenefitGuidePage />} />
      <Route path={ROUTES.BENEFITS_MAP} element={<BenefitsMapPage />} />
      <Route path={ROUTES.AUTH} element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />,
    </Route>,
  ),
);
