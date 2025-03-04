import { Link } from "react-router-dom";
import "../style/shop-front.scss";

export default function ShopFrontImages() {
    const products = [
        { img: "/bf029828-229a-4482-9eae-32be26ef58cd.jpg", alt: "debut", link: "/hifi-shop-category-list", text: "SHOP BY BRAND" },
        { img: "/amplifiers.jpg", alt: "creek", link: "/hifi-shop-category-list?category=amplifiers", text: "AMPLIFIERS" },
        { img: "/beskaaret.jpg", text: "SPEAKERS" },
        { img: "/f2c4d551-8e3d-4ad3-a4db-321e54c9a6f0.jpg", alt: "mahi1", link: "/hifi-shop-category-list?category=turntables", text: "TURNTABLES" },
        { img: "/e17bb5a8-0d1b-4226-bcc0-d84df7347004.jpg", alt: "neoclassic300b", link: "/hifi-shop-category-list?category=cd-players", text: "CD PLAYERS" },
        { img: "/7f02750d-5e2f-401b-acd2-e20e83e6f304.jpg", alt: "haloa23", link: "/hifi-shop-category-list?category=streamers", text: "STREAMERS" },
        { img: "/1aec6810-830d-4780-ab2a-c018203b7e2c.jpg", alt: "creekclassic", link: "/hifi-shop-category-list?category=cables", text: "CABLES" },
        { img: "/bf029828-229a-4482-9eae-32be26ef58cd.jpg", alt: "snapper", link: "/hifi-shop-category-list?category=furniture", text: "FURNITURE" },
        { img: "/headphones.jpg", alt: "epos", link: "/hifi-shop-category-list?category=headphones", text: "HEADPHONES" },
        { img: "/homecinema.jpg", alt: "p3es2", link: "/hifi-shop-category-list", text: "HOME CINEMA" },
        { img: "/96127d43-21d2-417b-ac99-6fece1243ee2.jpg", alt: "evo", link: "/hifi-shop-category-list", text: "OUTLET - SAVE UP TO 50%" },
        { img: "/c8778ea2-cbe9-47d5-ae8f-9ae54114cd70.jpg", alt: "m5", link: "/hifi-shop-category-list", text: "EBAY SHOP" },
        { img: "/56a71763-8d9f-4303-9fb6-869876c36714.jpg", alt: "rpm5", link: "/hifi-shop-category-list", text: "CEILING SPEAKERS" },
        { img: "/d8111856-9128-443a-9320-afb9900a2090.jpg", alt: "202", link: "/hifi-shop-category-list", text: "TVS" },
        { img: "/0c5a771b-9ea8-40b4-b996-a14c7a563bc2.jpg", alt: "302", link: "/hifi-shop-category-list", text: "VINYL LPS" }
    ];

    return (
        <main className="shop__frontpage__gallery">
            {products.map((product, index) => (
                <section key={index} className="shop__frontpage__gallery__section">
                    <img src={product.img} alt={product.alt} className="shop__frontpage__gallery__section__image" />
                    <Link to={product.link} className="shop__frontpage__gallery__section__link">{product.text}</Link>
                </section>
            ))}
            <section className="shop__frontpage__gallery__section">
                <Link to="/hifi-shop-category-list" className="shop__frontpage__gallery__section__button">SHOP NOW</Link>
            </section>
        </main>
    );
}
