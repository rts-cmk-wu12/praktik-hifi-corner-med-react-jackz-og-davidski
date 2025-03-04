import { useEffect, useState } from "react";

export default function HifiShopList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/db.json")
            .then((response) => response.json())
            .then((data) => {
                console.log("Hentede produkter:", data.items);
                setProducts(data.items);
            })
            .catch((error) => console.error("Fejl ved hentning:", error));
    }, []);

    return (
        <div>
            <h1>Hifi Shop</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Pris: {product.price}</p>
                        <p>Mærke: {product.brand}</p>
                        <p>Kategori: {product.category}</p>
                        <img src={product.img} alt={product.name} width="200" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
