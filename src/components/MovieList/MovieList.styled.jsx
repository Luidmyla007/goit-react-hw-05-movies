import styled from 'styled-components';

export const ListWrapper = styled.ul` 
padding: 15px 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: space-around;
  list-style-type: none; 

`
export const MovTitle = styled.p` 
 font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: rgba(9, 60, 61, 1);

`
export const MovItem = styled.li` 
 width: calc((100%-80px) / 5);
  transform: scale(1);
  border-radius: 12px;
 
  img {  
    height: 100%;
    width: 100%;
`  
  
 ;