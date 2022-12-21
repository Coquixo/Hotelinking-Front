import React, { useState, useEffect } from "react";
import "./Home.scss"
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const navigate = useNavigate();
    const loginClicked = () => {
        setTimeout(() => {
            navigate("/login");
        }, 250);
    }

    const registerClicked = () => {
        setTimeout(() => {
            navigate("/register")

        }, 250);
    }


    return (
        <div className="mainSquare">

            <h1 className="welcomeTitle">Welcome!</h1>

            <div className="navigateButton" onClick={loginClicked}> LogIn!</div>
            <div className="navigateButton" onClick={registerClicked}> SignIn!</div>


        </div>
    )
}

export default Home;