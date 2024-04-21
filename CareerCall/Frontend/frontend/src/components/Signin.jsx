import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import styled from "styled-components" //helps in styling 
// import './signupandsignin.css';

function Signin() {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    username: "",
    password: "",
  });
  //creating error box
  const toastoptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate('/');
    }
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (handlevalidation()) {
      const { password, username } = value;
      const data = {
        username,
        password,
      }
      axios
        .post('http://localhost:8000/api/auth/login', data)
        .then(() => {
          navigate('/')
        })
        .catch((error) => {
          alert('an error occur please check console');
          console.log(error);
        })
    }
  }
  const handlevalidation = () => {
    const { password, username } = value;
    console.log(password, username);
    if (password === "" || username === "") {
      toast.error("All feilds are required", toastoptions);
      return false;
    } else if (username.length === "") {
      toast.error("username required", toastoptions);
      return false;
    } else if (password.length === "") {
      toast.error("password required", toastoptions);
      return false;
    }
    return true;
  }
  const handlechange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }
  return (
    <>
      <FormContainer>
        <form onSubmit={(e) => handleSubmit(e)} className='container'>
          <h1 className='title'>
            LOGIN
          </h1>
          <div className='box'>
            <input type='text'
              placeholder='Username'
              name='username'
              min = "5"
              onChange={(e) => handlechange(e)}
            />
            <input type='password'
              placeholder='Password'
              name='password'
              onChange={(e) => handlechange(e)}
            />
            <button type='submit'>Login</button>
            <span>Don't have an account ? <Link className='link' to="/signup">Signup</Link></span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  )
}

const FormContainer = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background-color: white;
border: 2px solid rgb(230, 228, 228);
height: 400px;
width: 350px;
transform: translate(130%,13%);
.container {
  height: 50vh; 
  width: 50vw;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  .title{
    color: rgb(42, 42, 242);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: 2px white solid;
    input{
      border-bottom: 2px solid rgb(42, 42, 242);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px;
      margin: 5px 0 9px 0;
      border: none;
      border-bottom: 2px solid rgb(95, 95, 245);
      background: #e7e6e6;
      width: 250px;
    }
    button{
      background-color: rgb(116, 116, 242);
      color: white;
      padding: 16px 20px;
      border: none;
      cursor: pointer;
      width: 280px;
      margin-bottom:17px;
      opacity: 0.8;s
      transition: 0.5s ease-in-out;
      &:hover{
        background-color: rgb(22, 22, 225);
        color: white;
      }
    }
  span{
    .link{
      text-decoration: none;
      color: blue;
    }
  }
}
`;

export default Signin
