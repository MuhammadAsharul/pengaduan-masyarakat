import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../Assets/logoApk.png";

export default function index() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [navColor, setnavColor] = useState(false);

    document.addEventListener("click", (e) => {
        const target = e.target;
        if (isOpen == true && !target.closest(".btn-modal")) {
            setIsOpen(false);
        }

        if (isOpen2 == true && !target.closest(".menu-toggle")) {
            setIsOpen2(false);
        }
    });

    window.onscroll = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            setnavColor(true)
            console.log(navColor)
        }else{
            setnavColor(false);
        };
    }
    
    return (
        <div className={(navColor ? "lg:bg-[#01725C] lg:w-full lg:fixed" : "lg:bg-transparent lg:w-full lg:fixed")}>
            <div className="bg-transparent max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center h-16 w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            id="menu-toggle"
                            onClick={() => setIsOpen2(!isOpen2)}
                            type="button"
                            className="menu-toggle inline-flex items-center justify-center p-2 rounded-md gray-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <svg                          
                                className="menu-toggle block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <svg
                                className="menu-toggle hidden h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-between sm:items-stretch sm:justify-start w-full">
                        <div className="flex-shrink-0 flex items-center basis-1/5">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src={Logo}
                                alt="Workflow"
                            ></img>
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src={Logo}
                                alt="Workflow"
                            ></img>
                        </div>
                        <div className="flex hidden sm:block sm:ml-6 basis-4/5">
                            <div className="flex justify-center items-center space-x-4 gap-4">
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) => (isActive ? 'text-black px-3 py-2 rounded-md text-sm font-normal' : 'text-white hover:text-black px-3 py-2 rounded-md text-sm font-normal')}
                                >
                                    Home Page
                                </NavLink>

                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? 'text-black px-3 py-2 rounded-md text-sm font-normal' : 'text-white hover:text-black px-3 py-2 rounded-md text-sm font-normal')}
                                >
                                    Statistik
                                </NavLink>

                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? 'text-black px-3 py-2 rounded-md text-sm font-normal' : 'text-white hover:text-black px-3 py-2 rounded-md text-sm font-normal')}
                                >
                                    Tentang
                                </NavLink>

                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? 'text-black px-3 py-2 rounded-md text-sm font-normal' : 'text-white hover:text-black px-3 py-2 rounded-md text-sm font-normal')}
                                >
                                    Bantuan
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                {isOpen2 ? 
                    <div className="px-2 pt-2 pb-3 space-y-1">
                    <NavLink
                        to="/"
                        className=" text-black block px-3 py-2 rounded-md text-base font-medium"
                        aria-current="page"
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/"
                        className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Statistik
                    </NavLink>

                    <NavLink
                        to="/"
                        className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Tentang
                    </NavLink>

                    <NavLink
                        to="/"
                        className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Bantuan
                    </NavLink>
                    <NavLink
                        to="/"
                        className="text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Contact
                    </NavLink>
                </div> : null}
                
            </div>
        </div>
    );
}