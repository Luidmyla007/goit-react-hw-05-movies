import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieCast from 'Fetch/getMovieCast.jsx';
import No_photo from '../../Images/No_photo.png';
import {ActorList, ActorCard, ActorPhoto } from './Cast.styled';

const Cast = () => {
    const {id} = useParams();
    const [credits, setCredits] = useState([]);  

    useEffect(() => {
        getMovieCast(id).then(setCredits);
    }, [id]);
    if (!credits) {
        return null;
    };

    return (
    <>
      {credits && credits.length > 0 ? (
        <ActorList>
          {credits.map(({ id, original_name, character, profile_path }) => {
            return (
              <ActorCard key={id}>
                {profile_path === null ? (
                  <ActorPhoto src={No_photo} alt={original_name} width="200px" height="302px" />
                ) : (
                  <ActorPhoto
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={original_name}
                  />
                )}
                <h4>{original_name}</h4>
                <p>Character: {character}</p>
              </ActorCard>
            );
          })}
        </ActorList>) : (<p>Sorry, there is no information about this movie cast.</p>)}
        </>
  );  
};
export default Cast;