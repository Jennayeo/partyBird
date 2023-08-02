import React, {useEffect} from 'react';
import styled from 'styled-components';
import Card from './components/Card';

const SecondPage = (props) => {

    return (
        <Container currentPage={props.currentPage}>
            <Card/>
        </Container>
    )

};

export default SecondPage;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #333;
    > div{

        opacity: ${props=>props.currentPage==0? '0':'1'};
        transition: opacity 1s ease-out;
    }
`;

