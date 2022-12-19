import { FC, Suspense } from 'react';
import { Loader } from 'components';
import Dashboard from './DashBoard';

const AppLayout: FC = () => {
  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <Dashboard />
      </Suspense>
    </>
  );
};

export default AppLayout;
