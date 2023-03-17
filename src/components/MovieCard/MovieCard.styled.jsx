import styled from 'styled-components';

export const Item = styled.li`
  width: calc((100%-80px) / 6);
  transform: scale(1);
  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: rgba(9, 60, 61, 1);
  width: 300px;
  margin-bottom: 15px;
  
  }
`;

export const Poster = styled.img`
  width: 300px;
  margin-bottom: 15px;
 
  }
`;

export const VoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  
  }
`;

export const VoteAverage = styled.p`
  color: black;
`;

export const VoteCount = styled.p`
  color: black;
`;

export const Value = styled.span`
  font-weight: 700;
`;