import React, { useState, useEffect } from "react";
import { registerUser } from "../../services/apiCalls";
import { errorCheck } from "../../services/errorManage";
import Footer from "../Footer/Footer";
import "./Register.scss";

const Register = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
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
        console.log(user);
    };

    const registerAttempt = () => {
        try {
            registerUser();
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
            <div className="registerSquare">
                <p className="registerTitleDesign">Register</p>
                <div>Name</div>
                <input
                    type="text"
                    name="name"
                    className="inputDesign"
                    onChange={inputHandler}
                    onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
                />
                <div>Surname</div>
                <input
                    type="text"
                    name="surname"
                    className="inputDesign"
                    onChange={inputHandler}
                    onInput={(e) => errorHandler(e.target.name, e.target.value, "text")}
                />
                <div>Email</div>
                <input
                    type="email"
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
                    {userError.nameError}
                    <br />
                    {userError.surnameError}
                    <br />
                    {userError.emailError}
                    <br />
                    {userError.passwordError}
                    <br />
                </div>
                <div className="submitDesign" onClick={registerAttempt}>
                    Submit!
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
