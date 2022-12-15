import { FC } from 'react';
import { Outlet } from 'react-router';

const AuthLayout: FC = () => (
  <main>
    <Outlet />
  </main>
);

export default AuthLayout;
