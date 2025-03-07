
import { FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcVisa, FaInstagram, FaYoutube } from "react-icons/fa";
import "../style/footer.scss"
import { SiVisa } from "react-icons/si";
import { TbBrandVisa } from "react-icons/tb";
import { PiPaypalLogo } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
export default function Footer() {



    return (
        <>


            <footer>
                <div className="footer__left">
                    <div>
                        <p>HI-Fi Corner</p>
                        <p>Edinburg 2 Joppa Road EH15 2EU</p>
                        <p>Falkrik 14 Cow Wynd FK1 1PU</p>
                    </div>
                    <div className="footer__link">
                        <a className="border-right" href="">Returns &amp; Refunds</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
                <div className="footer__right">
                    <div className="footer__payment-icons-container">
                        <i className="fa-brands fa-cc-mastercard" aria-hidden="true"></i>
                        <TbBrandVisa />
                        <FaCcMastercard />
                        <FaCcJcb />
                        <PiPaypalLogo /><FaCcPaypal />

                    </div>
                    <div className="footer__social-icons-container">
                        <div className="footer__social-icon">
                            <CiFacebook />
                        </div>
                        <div className="footer__social-icon">
                            <FaYoutube />
                        </div>
                        <div className="footer__social-icon">
                            <AiFillTwitterCircle />
                        </div>
                        <div className="footer__social-icon">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </footer>


        </>
    );
}