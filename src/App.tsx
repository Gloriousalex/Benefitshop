import { ThemeProvider }  from '@mui/material';


import { lightTheme }     from 'common/theme/theme';
import React, { FC }              from 'react';
import { Route, Routes }  from 'react-router';
import { BenefitsGuide, HomePage, NotFoundPage, ROUTES } from 'static/constants/routes';
import { Layout }         from 'common/components/Layout';





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
