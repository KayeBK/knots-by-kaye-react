import React from "react";
import "./styles/updates.css";

export default function Updates() {
    return (
    <div className="Updates">
        <div className="container updates-title-container shadow">
            <h1 className="text-center">Recent Updates</h1>
            <p className="text-center updates-description">Shop listing dates as well as market dates I'll be attending will be posted here!</p>
        </div>

        <div className="container updates-container">
            <div className="row justify-content-center">
                <div className="col-lg-9 update-items shadow">
                    <div className="updates-date">5/10/2023</div>
                    <div className="updates-titles">Update #2:</div>
                    <p className="updates-text">I'll be at the Yellow Rose Artisan Market in downtown Seguin, TX on May 27th. Come stop by my booth to see my items!</p>
                </div>
                <div className="col-lg-9 update-items shadow">
                    <div className="updates-date">3/20/2023</div>
                    <div className="updates-titles">Update #1:</div>
                    <p className="updates-text">Site has been updated to include the separate pages!</p>
                </div>
            </div>
        </div>
    </div>
    );
};