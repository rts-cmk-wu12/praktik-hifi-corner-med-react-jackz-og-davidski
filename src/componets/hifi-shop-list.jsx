import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/shop-category-list.scss";

export default function HifiShopList() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");


    useEffect(() => {
        fetch("/db.json")
            .then((response) => response.json())
            .then((data) => {
                let fetchedProducts = [];
                if (category) {
                    if (data[category] && data[category].length > 0) {
                        fetchedProducts = data[category];
                    }
                } else {
                    fetchedProducts = Object.values(data).flat();
                }
                setProducts(fetchedProducts);
            })
            .catch((error) => console.error("Fejl ved hentning:", error));
    }, [category]);


    const handleSort = (option) => {
        let sortedProducts = [...products];
        if (option === "price-asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option === "price-desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (option === "name-asc") {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (option === "name-desc") {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
        setSortOption(option);
        setProducts(sortedProducts);
    };

    const handleChangeSort = (e) => {
        setSortOption(e.target.value);
        handleSort(e.target.value);
    };


    const handleCategoryClick = (newCategory) => {
        navigate(newCategory ? `/hifi-shop-category-list?category=${newCategory}` : "/hifi-shop-category-list");
    };

    return (
        <div className="shop-category-list">
            <aside className="category-menu">
                <h2>Kategorier</h2>
                <ul>
                    <li onClick={() => handleCategoryClick("")} className={!category ? "active" : ""}>Alle</li>
                    <li onClick={() => handleCategoryClick("amplifiers")} className={category === "amplifiers" ? "active" : ""}>Amplifiers</li>
                    <li onClick={() => handleCategoryClick("speakers")} className={category === "speakers" ? "active" : ""}>Speakers</li>
                    <li onClick={() => handleCategoryClick("turntables")} className={category === "turntables" ? "active" : ""}>Turntables</li>
                    <li onClick={() => handleCategoryClick("cd-players")} className={category === "cd-players" ? "active" : ""}>CD Players</li>
                    <li onClick={() => handleCategoryClick("dvd-afspiller")} className={category === "dvd-afspiller" ? "active" : ""}>DVD Players</li>
                    <li onClick={() => handleCategoryClick("effektforstaerkere")} className={category === "effektforstaerkere" ? "active" : ""}>Power Amplifiers</li>
                    <li onClick={() => handleCategoryClick("int-forstaerkere")} className={category === "int-forstaerkere" ? "active" : ""}>Integrated Amplifiers</li>
                    <li onClick={() => handleCategoryClick("roser-forstaerkere")} className={category === "roser-forstaerkere" ? "active" : ""}>Tube Amplifiers</li>
                </ul>
            </aside>

            <main>
                <h1>Hifi Shop</h1>
                <div className="category_sort_box">
                    <p>SORT BY</p>
                    <select value={sortOption} onChange={handleChangeSort}>
                        <option value="">Select Sort Option</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A to Z</option>
                        <option value="name-desc">Name: Z to A</option>
                    </select>
                </div>

                <ul className="product-list">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <li key={product.id}>
                                <Link to={`/Details/${product.id}`}>
                                    <img src={product.photo} alt={product.name} />
                                    <h2>{product.name}</h2>
                                    <p>Pris: {product.price} DKK</p>
                                    <p>Mærke: {product.manufacturer}</p>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p>Ingen produkter fundet i denne kategori.</p>
                    )}
                </ul>
            </main>
        </div>
    );
}
