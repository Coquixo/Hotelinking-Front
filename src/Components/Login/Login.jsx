import React, { useState, useEffect } from "react";
import { loginUser } from "../../services/apiCalls";
import Footer from "../Footer/Footer";
import "./Login.scss"


const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""

    });

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
        console.log(user)
    };

    const loginAttempt = () => {
        try {
            loginUser(user)
        } catch (error) {
            return error;
        }
    }



    return (
        <div className="mainSquare">
            <div className="loginSquare">
                <p className="loginTitleDesign">Login</p>
                <div>Email:</div>
                <input type="text" name="email" className="inputDesign" onChange={inputHandler} />
                <div>Password</div>
                <input type="password" name="password" className="inputDesign" onChange={inputHandler} />
                <div className="submitDesign" onClick={loginAttempt}>LogIn</div>

                <Footer />

            </div>
        </div>
    )
}

export default Login;