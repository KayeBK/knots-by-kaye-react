import React from "react";
import { Link } from "react-router-dom";
import kbklogobasic from "./pages/img/kbklogobasic.png";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
 return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand navbar-title"><img src={kbklogobasic} alt="Simple Logo with a K" class="navbar-img" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/updates" className="nav-link">Updates</Link>
      <Link to="/shop" className="nav-link">Shop</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/" className="nav-link disabled">Cart</Link>
      </div>
    </div>
  </div>
</nav>

 );
}