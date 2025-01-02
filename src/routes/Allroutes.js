import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { paths } from './Paths';  
import React, { Suspense, lazy } from 'react';
import Layout from '../layout/Layout';
import Dashboard from '../components/Dashboard';

const List = lazy(() => import('../components/List'));

const AllRoutes = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route path={paths.root} element={<Dashboard />} />
      <Route path={paths.dashboard} element={<Dashboard />} />

      <Route
        path={paths.list}
        element={
          <Suspense fallback={<div>Loading List...</div>}>
            <List />
          </Suspense>
        }
      />
    </Route>
  </>
);

export const routes = createBrowserRouter(AllRoutes);
