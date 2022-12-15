import { ThemeProvider }  from '@mui/material';


import { lightTheme }     from './common/theme/theme';
import React, { FC }      from 'react';
import { Route, Routes }  from 'react-router';
import { Layout }         from './common/components/Layout';
// import HomePage from './pages/Homepage';
import BenefitsGuide from './pages/BenefitsGuide';
import NotFoundPage from './pages/NotFoundPage';
import { HomePage, ROUTES } from 'static/constants/routes';





const App: FC = () => {



  return (
    <>
      <ThemeProvider theme ={lightTheme}>
        <React.Suspense fallback={<div>Loading</div>}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Layout />}>
                <Route index element={<HomePage/>}/>

                <Route path={ROUTES.BenGuide} element={<BenefitsGuide/>}/>
              </Route>

              <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage/>}/>

            </Routes>
        </React.Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
