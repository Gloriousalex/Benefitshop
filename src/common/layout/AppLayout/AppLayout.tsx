import { FC, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Loader } from 'components';
import Footer from './Footer';
import Header from './Header';

const AppLayout: FC = () => {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader isLoading />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </>
  );
};

export default AppLayout;
