import { Link } from "react-router-dom"; // Updated import for react-router-dom
import "../style/medier.scss";
import { FaBlogger } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

const socialMediaLinks = [
    {
        imgSrc: "/amplifiers.jpg",
        icon: <SiFacebook className="fa-brands" />,
        link: "/",
    },
    {
        imgSrc: "/headphones.jpg",
        icon: <FaBlogger className="fa-brands" />,
        link: "/", 
    },
    {
        imgSrc: "/turntable.jpg",
        icon: <AiFillTwitterCircle className="fa-brands" />,
        link: "/", 
    },
];

export default function Medier() {
    return (
        <div className="sociale-medier">
            {socialMediaLinks.map((item, index) => (
                <div className="sociale-medier-div" key={index}>
                    <img src={item.imgSrc} alt="" />
                    <Link to={item.link}>
                        {item.icon}
                    </Link>
                </div>
            ))}
        </div>
    );
}

