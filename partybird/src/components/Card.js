import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import styled from 'styled-components';

import "../Font.css";


const Card = () => {

    return (
        <Container>
            <EachCard ended={true}><img src={process.env.PUBLIC_URL + '/resources/IMS.jpg'}/></EachCard>
            <EachCard ended={true}><img src={process.env.PUBLIC_URL + '/resources/kakao.jpeg'}/></EachCard>
            <EachCard><img src={process.env.PUBLIC_URL + '/resources/dexter.jpg'}/></EachCard>
        </Container>
      );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: auto;
    display: flex;
`;
const EachCard = styled.div`
    width: 400px;
    height: 500px;
    border-radius: 40px;
    margin:auto;
    position: relative;
    
    >img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 40px;
        filter: ${props => props.ended && 'brightness(0.5)'};
    }
    :hover {
        filter: brightness(0.5);
        transition: filter .5s ease-out;
        cursor: pointer;
    }

    :hover::before {
        background-image: url('${process.env.PUBLIC_URL}/resources/dexter-logo.png');
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        object-fit: cover;
        opacity: 0.8;
        z-index: 9999;
      }
`

export default Card;