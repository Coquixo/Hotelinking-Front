import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import "./Register.scss";


const Register = () => {
    const [user, setUser] = useState({
        name: "",
        surname: "",
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


    return (
        <div className="mainSquare">
            <div className="registerSquare">

                <p className="registerTitleDesign">Register</p>
                <div>Name</div>
                <input type="text" name="name" className="inputDesign" onChange={inputHandler} />
                <div>Surname</div>
                <input type="text" name="surname" className="inputDesign" onChange={inputHandler} />
                <div>Email</div>
                <input type="email" name="email" className="inputDesign" onChange={inputHandler} />
                <div>Password</div>
                <input type="password" name="password" className="inputDesign" onChange={inputHandler} />
                <div className="submitDesign">Submit!</div>

            </div>
            <Footer />
        </div>
    )
}

export default Register;