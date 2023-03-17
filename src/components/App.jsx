import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Pages/Layout/Layout';

const Home = lazy(() => import('Pages/Home/Home'));

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>      
    </Routes>
  );
};
