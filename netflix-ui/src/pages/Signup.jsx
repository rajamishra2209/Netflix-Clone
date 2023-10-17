import React from 'react'
import styled from "styled-components"
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
export default function Signup() {
 const Container = styled.div`
 position: relative;
 .content{
    position: absolute;
    top: 0;
    width: 0;
    background-color : rgba(0, 0 , 0 ,0.5);
    height:100vh;
    width:100wh;
    display : grid;
    grid-template-rows:15vh 85vh;
 }`;

  return (
    <Container>
        <BackgroundImage/>
        <div className="content">
        <Header/>
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, Tv shows and more </h1>
                <h4>Watch anywhere. Cancel anytime</h4>
                <h6>Ready to watch? Enter your email to create or restart your membership</h6>
            </div>
            <div className="form">
                <input type="email" placeholder="Email Address" name="email"/>
                <input type="password" placeholder="Enter your Password" name="password"/>
                <button>Get Started</button>
            </div>
            <button>Log In</button>
        </div>
        </div>
    </Container>
  )
}

