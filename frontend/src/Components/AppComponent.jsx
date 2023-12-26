import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import NotFoundPage from './NotFoundPage.jsx';

import { appPaths } from '../routes';

const App = () => (
  <BrowserRouter>
    <div className="d-flex flex-column h-100">

      <Routes>
        <Route path={appPaths.login} element={<LoginPage />} />
        <Route path={appPaths.notFound} element={<NotFoundPage />} />
      </Routes>

    </div>
  </BrowserRouter>
);

export default App;
