import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link, Title } from './Layout.styled';
import { Loader } from '../../components/Loader/Loader';
import { AiOutlineHome } from "react-icons/ai";
import { HiFilm } from "react-icons/hi";
import { BsCameraVideo } from "react-icons/bs";

export const Layout = () => {
  return (
    <Container>      
      <Header><Title><HiFilm />FindYourMovie</Title>
        <nav>
          <Link to="/"><AiOutlineHome/> Home</Link>
          <Link to="/movies"><BsCameraVideo/> Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};