import { Link } from "react-router-dom";
import "../style/navbar.scss";

export default function NavBar() {
    return (


        <nav className="main-navbar">
            <ul className="nav-links">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT US</Link></li>
                <li><Link to="/brands">BRANDS</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/contact">CONTACT US</Link></li>
            </ul>
        </nav>
    );
}
