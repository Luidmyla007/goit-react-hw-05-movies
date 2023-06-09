import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackWrapper = styled.div`
width: 115px;
  padding: 0 150px;
  margin-bottom: 5px;
`;

export const Link = styled(NavLink)`
display: flex;
align-items: center;
gap: 5px;
  padding: 5px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: rgba(9, 60, 61, 1);
  font-weight: 500;
  transform: scale(1);
  box-shadow: none;
  border: 1px solid grey;
  background-color: #fff;
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid rgba(9, 60, 61, 1);
    box-shadow: 0px 12px 8px 4px #0b78474d;
  }
  &.active {
    color: color: rgba(9, 60, 61, 1);
    background-color: #fff;
    &:hover,
    &:focus {
     border: 1px solid rgba(9, 60, 61, 1);
      color: inherit;
    }
  }
`;

export const WrapperMovie = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;
  padding: 30px 150px;
`;

export const MovieDataWrapper = styled.div`
  padding: 0 24px;
  font-size: 18px;
`;

export const MoviePic = styled.img`
  border-radius: 5px;
  box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const OverviewContent = styled.p`
  text-align: justify;  
`;

export const MovieList = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding-left: 0;  
`;

export const MovieInfo = styled.div`
  height: auto;
  background-color: rgba(204, 224, 224, 1);
  background-image: linear-gradient(to right, rgba(204, 224, 224, 1), rgba(48, 56, 56, 1));
  padding: 10px 150px;
  
`;

export const Genres = styled.ul`
 
  margin-left: 0;
  padding-left: 0;
  list-style-type: none;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700; 
  color: rgba(9, 60, 61, 1);
  text-shadow: 2px 2px 4px rgba(143, 199, 201, 1);
  margin: 0;
  margin-top: 0;
`;

export const SubTitle = styled.h3`  
  letter-spacing: 1.7;
  margin-bottom: 20px;
  margin-top: 0px;
  font-size: 20px;
  font-weight: 500px;
  color: rgba(47, 56, 56, 1);
`;

export const CustomLink = styled(NavLink)`
  font-size: 18px;
  background-color: #fff;
  color: rgba(9, 60, 61, 1); 
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;
  transform: scale(1);
  box-shadow: none;
  &:first child{
  margin-right: 30px;
  }
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid rgba(41, 126, 128, 1);;
    box-shadow: 0px 8px 8px 4px rgba(30, 46, 46, 1);
  }
  &.active {  
    background-color: rgba(48, 136, 138, 1);
    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
`;