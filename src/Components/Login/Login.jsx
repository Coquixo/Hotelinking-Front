import React, { useState, useEffect } from "react";
import { loginUser } from "../../services/apiCalls";
import { errorCheck } from "../../services/errorManage";
import Footer from "../Footer/Footer";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [userError, setUserError] = useState({
        nameError: "",
        surnameError: "",
        emailError: "",
        passwordError: "",
    });

    const inputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const loginAttempt = () => {
        try {
            loginUser(user);
            setTimeout(() => {
                navigate("/offers");
            }, 500);
        } catch (error) {
            return error;
        }
    };

    const errorHandler = (field, value, type) => {
        let error = "";
        error = errorCheck(value, type);
        setUserError((prevState) => ({
            ...prevState,
            [field + "Error"]: `${error}`,
        }));
    };

    return (
        <div className="mainSquare">
            <div className="loginSquare">
                <p className="loginTitleDesign">Login</p>
                <div>Email:</div>
                <input
                    type="text"
                    name="email"
                    className="inputDesign"
                    onChange={inputHandler}
                    onInput={(e) => errorHandler(e.target.name, e.target.value, "email")}
                />
                <div>Password</div>
                <input
                    type="password"
                    name="password"
                    className="inputDesign"
                    onChange={inputHandler}
                    onInput={(e) =>
                        errorHandler(e.target.name, e.target.value, "password")
                    }
                />
                <div className="errorDesign">
                    <br />
                    {userError.emailError}
                    <br />
                    {userError.passwordError}
                    <br />
                </div>
                <div className="submitDesign" onClick={loginAttempt}>
                    LogIn
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Login;
