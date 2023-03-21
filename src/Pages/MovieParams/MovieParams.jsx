import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import  getMovieById  from 'Fetch/getMovieById.jsx';
import { Loader } from '../../components/Loader/Loader';
import { 
  ButtonGoBack,
  Label,
  WrapperMovie,
  MovieDataWrapper,
  MovieList,
  MovieInfo,
  MoviePic,
  OverviewContent,
  Genres,
  Title,
  SubTitle,
  CustomLink
} from './MovieParams.styled';


const MovieDetails = () => {
  const { id } = useParams();
  const [movieId, setMovieId] = useState(null);
  const location = useLocation(); 
  const navigate = useNavigate();
  const subLocation = location.state.from;

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

    const onGoBack = () => navigate(location?.state?.from ?? '/');

  return (
    <>
      <ButtonGoBack type="button" onClick={onGoBack}>      
        <Label>Go back</Label>
      </ButtonGoBack>
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
            <CustomLink to="cast" state={{ from: subLocation }}>
               Cast
            </CustomLink>
          </li>
          <li>
            <CustomLink to="reviews" state={{ from: subLocation }}>
             Review
            </CustomLink>
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