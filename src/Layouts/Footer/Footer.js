import React from 'react';
import {Link} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import './Footer.scss'
const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer">
                    <div>
                        <Link to='/'>
                            <h1 className="footer__title">BILET.KG</h1>
                        </Link>
                        <span className="footer__subtitle1">© 2022 ООО «Bilet.kg». Все права защищены.
                    </span>
                    </div>
                    <div>
                        <h3 className="footer__subtitle">Мы в соц. сетях</h3>
                        <FaWhatsapp className="footer__link"/>
                        <FaInstagram className="footer__link"/>
                        <FaFacebook className="footer__link"/>
                        <FaTwitter className="footer__link"/>
                    </div>
                    <div className="footer__tel">
                        <div className="footer__num">
                            <a href="tel:+996708125165" className="footer__subtitle">+ 996 708 125 165</a>
                        </div>
                        <div className="footer__num">
                            <a href="tel:+996777259187" className="footer__subtitle">+ 996 777 259 187</a>
                        </div>
                        <div className="footer__num">
                            <a href="/" className="footer__subtitle">bilet.kg@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
        ;
};
export default Footer;