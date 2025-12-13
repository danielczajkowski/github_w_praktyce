import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import Notes from 'views/Notes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/twitters" element={<Twitters />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
