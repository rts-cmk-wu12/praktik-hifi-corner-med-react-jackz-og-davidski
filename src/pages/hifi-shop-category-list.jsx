import HifiShopList from "../componets/hifi-shop-list";
import "../style/shop-category-list.scss";
import CategoryNavbar from "../componets/category-navbar";
import NavBar from "../componets/navbar"

function HifiShopCategoryList() {
    return (
        <div>
            <CategoryNavbar />
            <NavBar />
            <main>
                <HifiShopList />
            </main>
        </div>
    );
}

export default HifiShopCategoryList;
