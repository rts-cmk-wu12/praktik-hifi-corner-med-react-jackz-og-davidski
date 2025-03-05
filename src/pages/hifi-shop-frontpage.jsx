import ShopFrontImages from "../componets/shop-front-images";
import SmallNavBar from "../componets/smallnavbar";
import NavBar from "../componets/navbar";
import Footer from "../componets/footer";

function HifiShopFrontpage() {
    return (
        <div className="'black">
            <SmallNavBar />
            <NavBar />

            <ShopFrontImages />
            <Footer />

        </div>
    );
}

export default HifiShopFrontpage;
