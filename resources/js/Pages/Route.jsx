import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../Components/NavLink";
// import Footer from "../Components/Footer"
import BackToTop from "../Components/ButtonBackToTop";
import Home from "./page/Home";


export default function Routing() {

    return (
        <BrowserRouter>
            <div className="flex flex-col items-center min-h-screen">
                <Navbar />
                <BackToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="about" element={<About />} /> */}
                </Routes>
                {/* {useLocation().pathname == '/home' ? <Subscribe /> : null} */}
                {/* <Footer /> */}
            </div>
        </BrowserRouter>

    )
}