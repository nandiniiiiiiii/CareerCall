import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import styled from "styled-components" //helps in styling 

function SearchBar() {
    const [value, setValue] = useState('');
    const handleSearch = async (e) => {
        const data = { value }
        console.log(data);
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/data', data);
            alert('Data submitted successfully!');
        }
        catch (error) {
            console.error('Error submitting data:', error);
            alert('Failed to submit data.');
        }
    }
    return (
        <Container>
            <div className='content'>
                <p><b>Make a call to your career</b></p>
                <div className='textcontent'>
                    <input
                        type='text'
                        placeholder='Search for the job..'
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button
                        className='btn'
                        onClick={handleSearch}
                    >Search</button>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        transform: translate(-20%,0%);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 44px;
        color: white;
        -webkit-text-stroke: 3px Black;
        position: absolute;
        top: 20%;
        bottom: 80%;
        left: 34%;
    }
    .textcontent{
        transform: translate(0%,300%);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        input{
            border-right: 2px;
            border-color: black;
            border-radius: 10px;
            text-align: center;
            font-size: 20px;
            width: 700px;    
            height: 50px;
        }
        .btn{
            border: 2px black solid;
            border-radius: 10px;   
            height: 50px;
        }
    }
}
`;

export default SearchBar
