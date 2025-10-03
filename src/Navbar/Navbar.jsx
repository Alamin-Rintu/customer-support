import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 md:px-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-lg md:text-xl">CS — Ticket System</a>
            </div>
            <div className="flex-none hidden md:block">
                <ul className="menu menu-horizontal px-1 text-sm md:text-base">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="flex-none">
                <span className="btn btn-sm md:btn-md bg-[#7E45Ea] text-white">+ New Ticket</span>
            </div>
        </div>
    );
};

export default Navbar;
