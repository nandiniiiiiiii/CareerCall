import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import './Searchbar.css';

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
        <div>
            <p><b>Make a call to your career</b></p>
            <input
                type='text'
                placeholder='Search for the job..'
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={handleSearch}
            >Search</button>
        </div>
    )
}

export default SearchBar
