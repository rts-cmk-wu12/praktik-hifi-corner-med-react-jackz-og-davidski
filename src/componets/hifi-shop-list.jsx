import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/shop-category-list.scss";

export default function HifiShopList() {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState(""); // State for sortering
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
    }, [category, navigate]);

    // Funktion til at sortere produkter baseret på den valgte option
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
        setProducts(sortedProducts);
    };

    // Håndter ændring af sorteringsoption
    const handleChangeSort = (e) => {
        setSortOption(e.target.value);
        handleSort(e.target.value);
    };

    return (
        <div className="shop-category-list">
            <h1>Hifi Shop</h1>

            {/* Sorteringsboks */}
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

            <ul>
                {products.map((product) => (
                    <Link key={product.id} to={`/details/${product.id}`}>
                        <li>
                            <img src={product.photo} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>Pris: {product.price} DKK</p>
                            <p>Mærke: {product.manufacturer}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
