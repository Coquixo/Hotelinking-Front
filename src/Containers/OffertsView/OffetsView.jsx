import Footer from "../../Components/Footer/Footer";
import "./OffertsView.scss"
import React, { useEffect, useState } from "react";
import { generateCode, giveOfferts } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

const OffertsView = () => {

    const navigate = useNavigate();
    const [offert, setOffert] = useState([]);


    //Bring all Offerts
    useEffect(() => {

        if (offert.length === 0) {
            giveOfferts()
                .then((offert) => {
                    setOffert(offert);
                })
                .catch((error) => console.error(error));
        }
    }, []);


    //Click on offert
    const clickedMovie = (offert) => {
        generateCode();
        setTimeout(() => {
            navigate("/film");
        }, 750);
    };

    return (
        <div className="mainSquare">
            <div className="offertSquare">
                {/* //We map all offerts     */}
                {offert.map((offert, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => clickedMovie(offert)}
                            className="offertInput"></div>
                    );
                })}
            </div>

            <Footer />
        </div>
    )
}

export default OffertsView;