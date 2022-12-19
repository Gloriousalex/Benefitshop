import { FC, Suspense } from 'react';
import { Loader } from 'components';
import { DashBoard } from './DashBoard';

const AppLayout: FC = () => {
  return (
    <>
      <Suspense fallback={<Loader isLoading />}>
        <DashBoard />
      </Suspense>
    </>
  );
};

export default AppLayout;
