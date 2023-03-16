import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './Layout.styled';
import { Loader } from '../../components/Loader/Loader';
import { AiOutlineHome } from "react-icons/ai";

export const StartPage = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/"><AiOutlineHome/> Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};