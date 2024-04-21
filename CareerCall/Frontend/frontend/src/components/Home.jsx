import React from 'react'
import SearchBar from './SearchBar';
import Content from './Content';
import styled from "styled-components" //helps in styling 

function Home() {
    return (
        <Container>
            <SearchBar />
            <Content/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Home
