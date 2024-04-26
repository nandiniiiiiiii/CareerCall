import React, { useEffect } from 'react'
import styled from "styled-components" //helps in styling 
import { useState } from 'react';
import Papa from 'papaparse';
// import job from 'C:\Users\Manoj\Dropbox\My PC (LAPTOP-DT2730KE)\Desktop\git1\CareerCall\CareerCall\CareerCall\Backend\jobs.csv';
//import job from './jobs.csv';

function Content() {
  const [data, setData] = useState([]);

  // const handlefileupload = (e) => {
  //   const file = e.target.files[0];
  //   Papa.parse(file, {
  //     header: true,
  //     complete: (result) => {
  //       setData(result.data)
  //     },
  //   })
  // }

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('C:\\Users\\Manoj\\Dropbox\\My PC (LAPTOP-DT2730KE)\\Desktop\\git1\\CareerCall\\CareerCall\\CareerCall\\Backend\\jobs.csv');
      // const response = await fetch(job);
      const response = await fetch('../Backend/jobs.csv');
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parseData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true
      }).data;
      setData(parseData)
    };
    fetchData();
  }, []);

  return (
    <>
      <Container>
        {/* <input type='file' accept='.csv' onChange={handlefileupload} /> */}
        {data.length ? (
          <div>
            {
              data.map((row, index) => (
                <div key={index}>
                  <h3>Job Title: {row.title}</h3>
                  <p>{row.company}</p>
                  <button onClick={() => { window.open(row.link, '_blank') }}>click</button>
                </div>
              ))
            }
          </div>
        ) : null}
      </Container>
    </>
  )
}

const Container = styled.div`
height: auto;
width: auto;
padding: 20px;
transform: translate(0%,10%);
display: flex;
div{
  border: 2px black solid;
  height: 200px;
  width: 200px;
  padding: 10px;
  background-color: white;
}
`;

export default Content
