import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
background-color: rgba(204, 224, 224, 1);
background-image: linear-gradient(to right, rgba(204, 224, 224, 1), rgba(48, 56, 56, 1));
margin-bottom: 36px;
padding: 50px; 
  > nav {
    max-height: 40px;
    display: flex;
    gap: 30px;
  }
`;

export const Link = styled(NavLink)`
display: flex;
gap: 5px;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transform: scale(1);
  box-shadow: none;
  &:hover,
  &:focus {
    transform: scale(1.1);
    border: 1px solid rgba(0, 128, 75, 0.7);
    box-shadow: 0px 8px 8px 4px #0b78474d;
  }
  &.active {  
    background-color: rgba(48, 136, 138, 1);
    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
  }
`;