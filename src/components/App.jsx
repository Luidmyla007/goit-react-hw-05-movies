import { Routes, Route } from 'react-router-dom';
import { StartPage } from '../Pages/Layout/Layout';

export const App = () => {
  return (
     <Routes>
      <Route path="/" element={<StartPage />}></Route>      
    </Routes>
  );
};
