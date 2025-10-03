import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content p-6 md:p-10 mt-5">
            <div className="flex flex-col sm:flex-wrap md:flex-row gap-8 justify-center">
                <nav className="flex-1 min-w-[200px]">
                    <h6 className="footer-title text-xl md:text-2xl">CS-Ticket System</h6>
                    <p className="mt-2 text-sm md:text-base">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </nav>

                <nav className="flex-1 min-w-[150px]">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a> <br />
                    <a className="link link-hover">Our Mission</a> <br />
                    <a className="link link-hover">Contact Sales</a>
                </nav>

                <nav className="flex-1 min-w-[150px]">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product & Services</a> <br />
                    <a className="link link-hover">Customer Stories</a> <br />
                    <a className="link link-hover">Download Apps</a>
                </nav>

                <nav className="flex-1 min-w-[150px]">
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a> <br />
                    <a className="link link-hover">Terms & Conditions</a> <br />
                    <a className="link link-hover">Join Us</a>
                </nav>

                <nav className="flex-1 min-w-[150px]">
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover">@CS-Ticket System</a><br />
                    <a className="link link-hover">@CS-Ticket System</a><br />
                    <a className="link link-hover">@CS-Ticket System</a><br />
                    <a className="link link-hover">support@cst.com</a>
                </nav>
            </div>

            <p className="text-center mt-10 border-t border-neutral/50 pt-5 text-xs md:text-sm">
                Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
        </footer>
    );
};

export default Footer;
