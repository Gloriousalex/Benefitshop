import { ThemeProvider } from '@mui/material';
import { Layout } from 'common/components/Layout';

import { lightTheme }   from 'common/theme/theme';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BenefitsGuide, HomePage, ROUTES } from 'static/constants/routes';





function App():JSX.Element {



  return (
    <>
      <ThemeProvider theme ={lightTheme}>
        <React.Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Layout />}>
              <Route index element={<HomePage/>}/>
              <Route path={ROUTES.BenGuide} element={<BenefitsGuide/>}/>
            </Route>
          </Routes>
        </React.Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
