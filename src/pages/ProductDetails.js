import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/ProductDetails.css';
import Sidebar from './Sidebar';
import Footer from './home/Footer';
import { useCart } from '../pages/CartProvider';
import productsData from './ProductData'; // Adjust the import path as needed

function ProductDetail() {
    const { addToCart } = useCart();
    const { productId } = useParams(); // Custom ID from the URL
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        const fetchProductData = () => {
            // Combine all products into a single array
            const allProducts = [...productsData.kits, ...productsData.bots];

            // Find the selected product
            const selectedProduct = allProducts.find((item) => item.id === parseInt(productId, 10));

            if (selectedProduct) {
                setProduct(selectedProduct);

                // Determine the category dynamically
                const categoryProducts = productsData.kits.some((item) => item.id === selectedProduct.id)
                    ? productsData.kits
                    : productsData.bots;

                // Filter products from the same category but exclude the selected product
                const similar = categoryProducts.filter((item) => item.id !== selectedProduct.id);
                setSimilarProducts(similar);
            }
        };

        fetchProductData();
    }, [productId]);

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <>
            <div className="details-container">
                <Sidebar />
                <div className="product-detail-main">
                    <div className="product-detail-centered">
                        <div className="product-detail">
                            <div className="product-image-box">
                                <img src={product.image} alt={product.name} className="product-detail-image" />
                            </div>
                            <div className="product-detail-info">
                                <h1>{product.name}</h1>
                                <h2>{product.inline}</h2>
                                <p>{product.description}</p>
                                <p>Price: ₹{product.price}</p>
                                <button
                                    className="add-to-cart"
                                    onClick={() => window.open('https://forms.gle/88eatftsZRqovRDc9', '_blank')}
                                >
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="similar-products">
                        <h2>Similar Products</h2>
                        <div className="similar-products-grid">
                            {similarProducts.map((similarProduct) => (
                                <Link
                                    to={`/product/${similarProduct.id}`}
                                    key={similarProduct.id}
                                    className="similar-product-card"
                                >
                                    <img
                                        src={similarProduct.image}
                                        alt={similarProduct.name}
                                        className="similar-product-image"
                                    />
                                    <h3>{similarProduct.name}</h3>
                                    <p>Price: ₹{similarProduct.price}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
