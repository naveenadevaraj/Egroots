import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Footer from './home/Footer';
import './styles/ProductList.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useCart } from '../pages/CartProvider';
import productsData from './ProductData'; // Importing productsData

function ProductList() {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    // Initialize products from productsData
    useEffect(() => {
        // Combine kits and bots into one array
        const allProducts = [...productsData.kits, ...productsData.bots];
        setProducts(allProducts);
    }, []);

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);

        const sortedProducts = [...products];
        if (option === 'price-asc') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (option === 'price-desc') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (option === 'name') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        }

        setProducts(sortedProducts);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="container">
                {/* <Sidebar /> */}
                <div className="content" data-aos="fade-up">
                    <div className="header-container">
                        <h2>ALL PRODUCTS</h2>
                        <div className="header-right">
                            <label htmlFor="sort">Sort by </label>
                            <select
                                id="sort"
                                value={sortOption}
                                onChange={handleSortChange}
                                className="sort-dropdown"
                            >
                                <option value="">Select</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="name">Name</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-grid">
                        {products.map((product) => (
                            <div className="product-card" key={product.id}>
                                {/* <Link to={`/product/${product.id}`} className="product-card-link"> */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                    <div className="product-details">
                                        <h3 className="product-title">{product.name}</h3>
                                        <p className="product-price">{product.price}</p>
                                    </div>
                                {/* </Link> */}
                                <button
                                    className="add-to-cart"
                                    onClick={() => window.open('https://forms.gle/88eatftsZRqovRDc9', '_blank')}
                                >
                                    BUY NOW
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductList;
