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
            .catch((error) => console.error("Fejl ved hentning:", error));
    }, [id]);

    if (!product) {
        return <p>Indlæser ejendomsdetaljer...</p>; 
    }

    return (
        <section className="coworker__section">
            <ul>
                <li key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Pris: {product.price} DKK</p>
                    <p>Mærke: {product.manufacturer}</p>
                    <img src={product.photo} alt={product.name} />
                </li>
            </ul>
        </section>
    );
}





    