import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="left-row">
                <h5>CONTACT US:</h5>
                <p>Email: Watch2Day@gmail.com</p>
                <p>Phone: +855 23 999 888</p>
                <p>Phone: +855 23 999 888</p>
                <p>Phone: +855 23 999 888</p>
            </div>
            <div className="footer-section middle-row">
                <img src="/images/Logo.png" alt="Logo" className="footer-logo" />
                <p>
                    “Movies are the art of storytelling, and we are the bridge that connects you to those unforgettable tales.”
                </p>
                <div className="copyright">
                    <p>Copyright © 2024 Watch2Day, All rights reserved.</p>
                </div>
            </div>
            <div className="right-row">
                <h5>Follow us on:</h5>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/footer/f1.png" alt="Watch2Day" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/footer/f2.png" alt="Watch2Day" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/footer/f3.png" alt="Watch2Day" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/footer/f4.png" alt="Watch2Day" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/images/footer/f5.png" alt="Watch2Day" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;