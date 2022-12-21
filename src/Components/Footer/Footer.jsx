import React from "react";
import { useNavigate } from "react-router-dom"
import "./Footer.scss"

const Footer = () => {


    const navigate = useNavigate();

    const homeClicked = () => {

        setTimeout(() => {
            navigate("/")
        }, 500);
    }


    return (
        <div className="footerDesign" onClick={homeClicked}>
            Back to Home
        </div>
    )

}


export default Footer;