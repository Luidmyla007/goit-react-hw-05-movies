import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReview from 'Fetch/getMovieReview';

import {ReviewContainer, ReviewList, ReviewItem, Text, ReviewCancel, ReviewText } from './Reviews.styled';

const Review = () => {
    const { id } = useParams();
    const [results, setResults] = useState([]);

    useEffect(() => {
        getMovieReview(id).then(setResults);
    }, [id]);
    if (!results) {
        return null;
    };

    return (
        <ReviewContainer>
            {results && results.length > 0 ? (
                <ReviewList>
                    {results.map(({id, author, content}) => {
                    return (                        
                    <ReviewItem key={id}>
                        <Text>Author: {author}</Text>                       
                    <ReviewText>{content}</ReviewText> </ReviewItem>)
                         })}
                </ReviewList>)
                : (<ReviewCancel> We don't have any reviews for this movie </ReviewCancel>)}
        </ReviewContainer>
    );  
};

export default Review;

  