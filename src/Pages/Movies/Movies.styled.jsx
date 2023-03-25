import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: rgba(184, 216, 217, 1);
`;

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const SearchMoviesList = styled.ul` 
padding: 15px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  list-style-type: none; 
`
export const SearchMovTitle = styled.p` 
 font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: rgba(9, 60, 61, 1);
   text-shadow: 2px 2px 4px rgba(143, 199, 201, 1);
   margin: 0;
`

  export const SearchMovItem = styled.li` 
 width: calc((100%-80px) / 5);
  transform: scale(1);
  border-radius: 12px;

  &:hover {
    transform: scale(1.01);
  }
  &:hover > p {
    opacity: 1;
  }
 
  img {  
    border-radius: 5px;
    box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
`;

export const MyLink = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  color: black;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    color: #e3811f;
    text-shadow: 0px 0px 20px 8px black;
  }
`;
