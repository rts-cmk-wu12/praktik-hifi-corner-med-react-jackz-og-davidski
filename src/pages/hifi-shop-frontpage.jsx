import ShopFrontImages from "../componets/shop-front-images";
import SmallNavBar from "../componets/smallnavbar"
import NavBar from "../componets/navbar"
import Footer from "../componets/footer"

function HifiShopFrontpage() {
    return (
        <div>
            <header>
                <SmallNavBar />
                <NavBar />
            </header>
            <ShopFrontImages />

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default HifiShopFrontpage;
