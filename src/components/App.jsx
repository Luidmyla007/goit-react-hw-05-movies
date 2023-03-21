import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Pages/Layout/Layout';

const Home = lazy(() => import('Pages/Home/Home'));
const Movies = lazy(() => import('Pages/Movies/Movies'));
const MovieParams = lazy(() => import('Pages/MovieParams/MovieParams'));

export const App = () => {
  return (
    
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieParams />}></Route>
      </Route>      
    </Routes>
  );
};
