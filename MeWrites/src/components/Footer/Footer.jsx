import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="footer-left">
                    <h1>MeWrites</h1>
                    <p>Write novels, poems and quotes in one organized space</p>
                    <button className="footer-btn">Get Started</button>
                </div>

                <div className="footer-right">
                    <div className="footer-column">
                        <h4>Product</h4>
                        <a href="#">Features</a>
                        <a href="#">Writing</a>
                        <a href="#">Export</a>
                        <a href="#">Dark Mode</a>
                    </div>

                    <div className="footer-column">
                        <h4>Resources</h4>
                        <a href="#">Guides</a>
                        <a href="#">Writing Tips</a>
                        <a href="#">Community</a>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                        <a href="#">Privacy</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 MeWrites. All rights reserved.</p>
                <div className="socials">
                    <span>𝕏</span>
                    <span>🖂</span>
                    <span>ⓕ</span>
                </div>
            </div>

        </footer>
    )
}

export default Footer
