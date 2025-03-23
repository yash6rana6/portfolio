import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons
import FooterCSS from './../Footer/Footer.module.css';

function Footer() {
    return (
        <footer className={FooterCSS.footer}>
            <div className={FooterCSS.about}>
                <h1>Yash Deep Singh</h1>
                <p>Full Stack Developer | Passionate about building scalable web applications.</p>
                <div className={FooterCSS.social}>
                    <a href="https://www.linkedin.com/in/yash-deep-singh-17b012303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       aria-label="LinkedIn">
                        LinkedIn <FaLinkedin />
                    </a>
                    <a href="https://github.com/whitenight6" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       aria-label="GitHub">
                        GitHub <FaGithub />
                    </a>
                </div>
            </div>
            <div className={FooterCSS.links}>
                <h3>Useful Links</h3>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#services">Services</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
