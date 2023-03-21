import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import  getMovieById  from 'Fetch/getMovieById.jsx';
import { Loader } from '../../components/Loader/Loader';
import {
  GoBackLinkWrapper,
  WrapperMovie,
  MovieDataWrapper,
  MovieList,
  MovieInfo,
  MoviePic,
  OverviewContent,
  Genres,
  Title,
  SubTitle
  
} from './MovieParams.styled';


const MovieDetails = () => {
  const { id } = useParams();
  const [movieId, setMovieId] = useState(null);
  const location = useLocation(); 

  useEffect(() => {
    getMovieById(id).then(setMovieId);
  }, [id]);

  if (!movieId) {
    return null;
  }

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    genres,
    overview,
  } = movieId;

  return (
    <>
      <GoBackLinkWrapper>
        <Link to={location.state?.from ?? '/'} style={{color: "black"}}>Go back</Link>
      </GoBackLinkWrapper>
      <WrapperMovie>
        <MoviePic
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
          width="300"
        />
        <MovieDataWrapper>
          <Title>
            {original_title || original_name} (
            <span>{parseInt(release_date || first_air_date)}</span>)
          </Title>
          <OverviewContent>
            User Score: {`${Math.round(vote_average * 10)}%`}
          </OverviewContent>
          <SubTitle>Overview</SubTitle>
          <OverviewContent>{overview}</OverviewContent>
          <SubTitle>Genres</SubTitle>
          <Genres>
            {genres.map((genre, index) => (
              <li key={index} style={{ marginRight: '10px' }}>
                {genre.name}
              </li>
            ))}
          </Genres>
        </MovieDataWrapper>
      </WrapperMovie>
      <MovieInfo>
        <SubTitle>Additional Information</SubTitle>
        <MovieList>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>{' '}
          </li>
          <li>
            <Link to="review" state={location.state}>
              Reviews
            </Link>{' '}
          </li>
        </MovieList>
      </MovieInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;