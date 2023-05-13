import React from "react";

export default function Footer() {
    return (
        <div className="Footer text-center">
            <div className="row footer-link">
                <div className="col-4">Website by Kaye Kinser.<div>Email: contact@knotsbykaye.com</div></div>
                <div className="col-8">
                    <div className="footer-title">Follow my socials for updates:</div>
                    <div className="footer-icons">
                    <a href="https://www.instagram.com/knotsbykaye/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://twitter.com/KnotsbyKaye" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://www.tiktok.com/@knotsbykaye" target="_blank" rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100090391507123" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    </div>             
                </div>
            </div>
        </div>
    )
}
