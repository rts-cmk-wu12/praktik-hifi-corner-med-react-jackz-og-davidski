import { Link, useParams } from "react-router-dom";
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
            <div class="product-category-location" id="product-category-location">
            <Link to="/"className="shop__frontpage__gallery__section__link"><p>HOME /</p></Link>
            <Link to={`/hifi-shop-category-list?category/${product.category}`}className="shop__frontpage__gallery__section__link"><p>HOME /</p></Link>
            <Link to={product.link}className="shop__frontpage__gallery__section__link">HOME /</Link>
            </div>
            <img src="/sale_img.png" alt="sale" class="product_category_commersial-img"></img>
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






