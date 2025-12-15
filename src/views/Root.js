import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'routes/routes';
import { Provider } from 'react-redux';

import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import Notes from 'views/Notes';
import DetailsPage from 'views/DetailsPage';
import Login from 'views/LogIn';

import store from 'store';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path={routes.home} element={<Navigate to={routes.notes} replace />} />
          <Route path={routes.notes} element={<Notes />} />
          <Route path={routes.note} element={<DetailsPage />} />
          <Route path={routes.twitters} element={<Twitters />} />
          <Route path={routes.twitter} element={<DetailsPage />} />
          <Route path={routes.articles} element={<Articles />} />
          <Route path={routes.article} element={<DetailsPage />} />
          <Route path={routes.login} element={<Login />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
