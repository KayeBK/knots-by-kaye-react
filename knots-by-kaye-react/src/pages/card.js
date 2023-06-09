import React from "react";
import "./styles/card.css";

const Card = ({ item }) => {
    return (
        <>
        <div className="container-fluid card">
            <div className="row justify-content-center">
                {item.map((Val) => {
                    return (
                        <div className="col-md-3 card-items shadow" key={Val.id}>
                            <div className="card-img-top text-center img-card">
                            <a href={Val.img} target="_blank" rel="noreferrer">
                            <img src={Val.img} alt={`${Val.title} IMG COMING SOON`} className="w-100 card-img" /> </a>
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