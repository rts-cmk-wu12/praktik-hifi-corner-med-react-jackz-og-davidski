import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/details.scss";

export default function DetailsAgents() {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`/db.json`) 
            .then((response) => response.json())
            .then((data) => {
                const allProducts = Object.values(data).flat();
                const foundProduct = allProducts.find(item => item.id === parseInt(id));

                if (foundProduct) {
                    setProduct(foundProduct); 
                } else {
                    console.error("Product not found");
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!product) {
        return <p>Loading product details...</p>; 
    }

    return (
        <div className="hundred">

            <section className="details__section">
            <ul>
                <li key={product.id}>
                    <img src={`/${product.photo}`} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>Price: {product.price} DKK</p>
                    <p>Brand: {product.manufacturer}</p>
                </li>
            </ul></section>
        </div>
    );
}






    