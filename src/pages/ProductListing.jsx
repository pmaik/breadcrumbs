import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();

                setProducts(data.products);
            } catch (error) {
                setProducts([]);
                console.error("Error fetching products", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Product Listing</h2>

            {products.length ? (
                <div className="product-grid">
                    {products?.map((prod) => (
                        <div className="product-card">
                            <Link to={`/products/${prod.id}`}>
                                <img src={prod.thumbnail} alt={prod.title} />
                                <h3>{prod.title}</h3>
                                <h3>${prod.price}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading....</div>
            )}
        </div>
    );
};

export default ProductListing;
