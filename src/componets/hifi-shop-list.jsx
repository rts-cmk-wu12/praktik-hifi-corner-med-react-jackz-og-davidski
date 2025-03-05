import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style/shop-category-list.scss";

export default function HifiShopList() {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get("category");

    useEffect(() => {
        fetch("/db.json")
            .then((response) => response.json())
            .then((data) => {
                if (category) {
                    if (data[category] && data[category].length > 0) {
                        setProducts(data[category]);
                    }
                } else {
                    setProducts(Object.values(data).flat());
                }
            })
            .catch((error) => console.error("Fejl ved hentning:", error));
    }, [category, navigate]);

    return (
        <div className="shop-category-list">
            <h1>Hifi Shop</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.photo} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Pris: {product.price} DKK</p>
                        <p>Mærke: {product.manufacturer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
