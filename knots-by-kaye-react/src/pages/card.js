import React from "react";

const Card = ({ item }) => {
    return (
        <>
        <div className="container-fluid">
            <div className="row justify-content-center">
                {item.map((Val) => {
                    return (
                        <div className="col-md-4 col-sm-6 card " key={Val.id}>
                            <div className="card-img-top text-center">
                                <img src={Val.img} alt={Val.title} className="w-75" />
                            </div>
                            <div className="card-body">
                                <div className="card-text">{Val.title} -- {Val.price}</div>
                                <div className="card-text">{Val.desc}</div>
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