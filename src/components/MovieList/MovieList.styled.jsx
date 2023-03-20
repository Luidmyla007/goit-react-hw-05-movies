import styled from 'styled-components';

export const ListWrapper = styled.ul` 
padding: 15px 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  list-style-type: none; 

`
export const MovTitle = styled.p` 
 font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: rgba(9, 60, 61, 1);
   text-shadow: 2px 2px 4px rgba(143, 199, 201, 1);
margin: 0;
`
export const MovItem = styled.li` 
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
`  
  
 ;