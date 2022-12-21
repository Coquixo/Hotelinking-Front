import React from "react";
import "./Register.scss";


const Register = () => {


    return (
        <div className="mainSquare">
            <div className="registerSquare">

                <p className="registerTitleDesign">Register</p>
                <input type="text" className="inputDesign" />
                <input type="surname" className="inputDesign" />
                <input type="email" className="inputDesign" />
                <input type="password" className="inputDesign" />
                <div className="submitDesign">Submit!</div>

            </div>
        </div>
    )
}

export default Register;