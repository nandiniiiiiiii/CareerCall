import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components" //helps in styling 
// import './Searchbar.css';

function NavBar() {
  return (
    <Container>
      <nav>
        <h1 id="logo">Career Call</h1>
        <div className="topnav">
          <Link className="active btn" to="/"><b>Home</b></Link>
          <Link className="btn" to="/about"><b>About</b></Link>
          <Link className="btn" to="/contact"><b>Contact</b></Link>
        </div>
        <div className="topnav-right">
          <Link className="login" to="/signin">Login</Link>
          <Link className="register" to="/signup">Register</Link>
        </div>
      </nav>
    </Container>
  )
}

const Container = styled.div`
  h1{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: darkcyan;
    font-size: 35px;
    text-align: center;
    transform: translate(0%,-70%);
  }
  nav{
    height: 70px;
    display:flex;
    flex-direction: row;
    gap: 150px;
    justify-content: center;
    aligin-items: center;
    background-color:red;
  }
  .topnav {
    overflow: hidden;
    display:flex;
    flex-direction: row;
    a {
      float: left;
      color: black;
      text-align: center;
      padding: 5px 20px 5px 20px;
      text-decoration: none;
      font-size: 17px;
      margin-top: 20px;
    }
    a:hover {
      background-color: #ddd;
      color: black;
    }
  }
  .topnav-right{
    float: right;
    padding-right: 55px;
    display:flex;
    flex-direction: row;
    gap: 20px;
    a {
      float: left;
      text-align: center;
      padding: 2px 20px 2px 20px;
      text-decoration: none;
      font-size: 17px;
      margin-top: 20px;
      height: 25px;
    }
  }
  .login{
    color:darkcyan;
    background-color: white;
    border: 2px solid darkcyan ;
    border-radius: 6px;
  }
  .register{
    color: White;
    background-color: purple;
    border: 2px solid darkcyan;
    border-radius: 6px;
}
`;

export default NavBar
