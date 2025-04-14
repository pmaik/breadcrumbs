import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [trendingProduct, setTrendingProduct] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();

                setTrendingProduct(data.products.slice(0, 8));
            } catch (error) {
                setTrendingProduct([]);
                console.error("Error fetching products", error);
            }
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Home Page</h2>

            <span>Trending Products</span>
            {trendingProduct.length ? (
                <div className="product-grid">
                    {trendingProduct?.map((prod) => (
                        <div className="product-card">
                            <Link to={`/products/${prod.id}`}>
                                <img src={prod.thumbnail} alt={prod.title} />
                                <h3>{prod.title}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ margin: "20px 0px" }}>Loading....</div>
            )}

            <Link to="/products">
                <button
                    style={{ padding: 10, width: "100%", cursor: "pointer" }}
                >
                    View All Products
                </button>
            </Link>
        </div>
    );
};

export default Home;
