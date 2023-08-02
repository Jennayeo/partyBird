import React, { useEffect } from 'react';
import styled from 'styled-components';
import SwiperContainer from './components/swiper';

const FirstPage = (props) => {

      return (
        <Container>
            <SwiperContainer/>
        </Container>
      )
};

export default FirstPage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
`;
