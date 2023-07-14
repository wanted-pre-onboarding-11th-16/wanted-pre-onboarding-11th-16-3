import { Route, Routes } from 'react-router-dom';

import { PATH } from '@/constants/path';
import DetailPage from '@/pages/detail';
import MainPage from '@/pages/main';

const Router = () => {
  return (
    <Routes>
      <Route path={PATH.MAIN} element={<MainPage />} />
      <Route path={PATH.DETAIL} element={<DetailPage />} />
    </Routes>
  );
};

export default Router;
