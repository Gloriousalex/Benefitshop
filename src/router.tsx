import { Route,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Homepage } from './pages/Homepage';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
    </Route>
  )
)