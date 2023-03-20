import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <br />
        <Footer />
        </>
    );
};

export default Layout;