import { MdPlace } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import "../style/navbar.scss";

export default function SmallNavBar() {
    return (
        <nav className="smallnavbar">
            <ul className="smallnav-links">
                <li><MdPlace /></li>
                <li><CiPhone /></li>
                <li><IoIosMail /></li>
            </ul>
            <a href="#" className="subscribe-btn">Subscribe</a>
        </nav>
    );
}