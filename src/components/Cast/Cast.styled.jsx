import styled from 'styled-components'; 


export const ActorList = styled.ul` 
padding: 20px 150px;
display: flex;
flex-wrap: wrap;
gap: 30px;
justify-content: center;
list-style-type: none; 
`

export const ActorCard = styled.li` 
 width: calc((100%-300px) / 8);
 
`    
 export const ActorPhoto = styled.img` 
 border-radius: 5px;  
 box-shadow: 10px 10px 8px 2px rgba(0, 0, 0, 0.3);
`  
export const DefaultTitle = styled.p` 
margin-top: 80px;
font-size: 25px;
font-weight: 500;
text-align: center;
`      
;