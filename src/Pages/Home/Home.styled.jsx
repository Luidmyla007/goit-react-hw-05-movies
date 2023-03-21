import styled from 'styled-components';

export const MainTitle = styled.h2`
text-align: center; 
color: rgba(9, 60, 61, 1);
padding: 0;
letter-spacing: 1.7;
margin-bottom: 20px;
font-size: 40px;
line-height: 50px;   
font-weight: 900;
position: relative;
background: white;
overflow: hidden;
text-transform: uppercase;
&:before {
    content: '';
    position: absolute;
    filter: blur(10px);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: screen;
    background-image: repeating-linear-gradient(-45deg, transparent, transparent 1em, rgba(9, 60, 61, 1) 1em, rgba(19, 231, 242, 1) 50%), repeating-linear-gradient(45deg, rgba(19, 231, 242, 1), rgba(19, 231, 242, 1) 1em, #FFF 1em, rgba(9, 60, 61, 1) 50%);
    background-size: 3em 3em, 2em 2em;
    animation-name: ani;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
@keyframes ani {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 100% 0;
    }
}

`;