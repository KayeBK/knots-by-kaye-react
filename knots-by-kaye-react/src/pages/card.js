import React from "react";
import "./styles/card.css";

const Card = ({ item }) => {
    return (
        <>
        <div className="container-fluid">
            <div className="row justify-content-center">
                {item.map((Val) => {
                    return (
                        <div className="col-3 card" key={Val.id}>
                            <div className="card-img-top text-center img-card">
                                <img src={Val.img} alt={Val.title} className="w-75" />
                            </div>
                            <div className="card-body">
                                <div className="card-text card-title">{Val.title} | <span className="card-price">{Val.price}</span></div>
                                <div className="card-text card-desc">{Val.desc}</div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div> 
        </>
    );
};

export default Card;