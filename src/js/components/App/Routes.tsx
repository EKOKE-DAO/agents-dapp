import * as React from 'react';
import { Route as RouterRoute, Routes } from 'react-router-dom';

import { Route } from '../../utils/routes';
import SeoEngine from '../SeoEngine';
import Container from '../reusable/Container';

// pages
const Home = React.lazy(() => import('./pages/Home'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Privacy = React.lazy(() => import('./pages/Privacy'));

const AppRouter = () => (
  <>
    <SeoEngine />
    <Container.Container>
      <React.Suspense fallback={null}>
        <Routes>
          <RouterRoute path={Route.url(Route.HOME)} element={<Home />} />
          <RouterRoute path={Route.url(Route.COOKIES)} element={<Cookies />} />
          <RouterRoute path={Route.url(Route.PRIVACY)} element={<Privacy />} />

          {/* 404 */}
          <RouterRoute path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </Container.Container>
  </>
);

export default AppRouter;
