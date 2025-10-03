import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CS — Ticket System</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Changelog</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Download</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="flex-none">
                <span className="btn bg-[#7E45Ea] text-white">+ New Ticket</span>
            </div>
        </div>
    );
};

export default Navbar;