import React from 'react'
import SearchBar from './SearchBar';
import Content from './Content';
import styled from "styled-components" //helps in styling 

function Home() {
    return (
        <Container>
            <div className='content'>
                <SearchBar />
                <div className='item'>
                    <Content />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export default Home
