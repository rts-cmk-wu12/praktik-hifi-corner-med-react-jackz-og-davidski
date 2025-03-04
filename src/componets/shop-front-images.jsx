import { Link } from "react-router-dom";
import "../style/shop-front.scss";

export default function ShopFrontImages() {
    const products = [
        { img: "Produktbilleder/int_forstaerkere/creek_a50I.jpg", alt: "creek", link: "/hifi-shop-category-list?category=amplifiers", text: "AMPLIFIERS" },
        { img: "Produktbilleder/pladespillere/Pro_ject_Debut_III_yellow_1.jpg", alt: "debut", link: "/hifi-shop-category-list", text: "SHOP BY BRAND" },
        { img: "Produktbilleder/hojtalere/epos_m5.gif", alt: "epos", link: "/hifi-shop-category-list?category=speakers", text: "SPEAKERS" },
        { img: "Produktbilleder/effektforstaerkere/manley_mahi.jpg", alt: "mahi1", link: "/hifi-shop-category-list?category=turntables", text: "TURNTABLES" },
        { img: "Produktbilleder/effektforstaerkere/manley_neoclassic300b.jpg", alt: "neoclassic300b", link: "/hifi-shop-category-list?category=cd-players", text: "CD PLAYERS" },
        { img: "Produktbilleder/effektforstaerkere/parasound_haloa23.jpg", alt: "haloa23", link: "/hifi-shop-category-list?category=streamers", text: "STREAMERS" },
        { img: "Produktbilleder/dvdafspillere/creek_classic.jpg", alt: "creekclassic", link: "/hifi-shop-category-list?category=cables", text: "CABLES" },
        { img: "Produktbilleder/int_forstaerkere/manley_snapper.jpg", alt: "snapper", link: "/hifi-shop-category-list?category=furniture", text: "FURNITURE" },
        { img: "Produktbilleder/hojtalere/epos_m5.gif", alt: "epos", link: "/hifi-shop-category-list?category=headphones", text: "HEADPHONES" },
        { img: "Produktbilleder/hojtalere/harbeth_p3es2.jpg", alt: "p3es2", link: "/hifi-shop-category-list", text: "HOME CINEMA" },
        { img: "Produktbilleder/cd_afspillere/creek_evo_cd.jpg", alt: "evo", link: "/hifi-shop-category-list", text: "OUTLET - SAVE UP TO 50%" },
        { img: "Produktbilleder/hojtalere/epos_m5.gif", alt: "m5", link: "/hifi-shop-category-list", text: "EBAY SHOP" },
        { img: "Produktbilleder/pladespillere/Pro_ject_rpm_5.jpg", alt: "rpm5", link: "/hifi-shop-category-list", text: "CEILING SPEAKERS" },
        { img: "Produktbilleder/roer_forstaerkere/jolida_JD202a.jpg", alt: "202", link: "/hifi-shop-category-list", text: "TVS" },
        { img: "Produktbilleder/roer_forstaerkere/jolida_JD302b.jpg", alt: "302", link: "/hifi-shop-category-list", text: "VINYL LPS" }
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
