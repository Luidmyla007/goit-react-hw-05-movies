import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Pages/Layout/Layout';

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<Layout />}></Route>      
    </Routes>
  );
};
