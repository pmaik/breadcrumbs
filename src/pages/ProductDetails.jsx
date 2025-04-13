import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(
                    `https://dummyjson.com/products/${id}`
                );
                const data = await response.json();

                setProduct(data);
            } catch (error) {
                setProduct(null);
                console.error("Error fetching products", error);
            }
        }

        fetchProduct();
    }, [id]);

    return (
        <div>
            <h2>Product Details</h2>

            {product ? (
                <div style={{ display: "flex" }}>
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ height: "300px", border: "1px solid #ddd" }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            border: "1px solid #ddd",
                        }}
                    >
                        <h2>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            ) : (
                <div>Loading....</div>
            )}
        </div>
    );
};

export default ProductDetails;
