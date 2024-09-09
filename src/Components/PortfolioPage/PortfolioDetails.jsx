import * as React from 'react';
import { useParams } from 'react-router-dom';
import { ProductList } from '../../ProductList';
import AllBtn from '../AllBtn';
import HOC from '../HOC';

function PortfolioDetails() {

    const productId = useParams();
    const id = productId.id

    const product = ProductList.find(item => item.id == id);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className="container">
                <div className="product-page pt-5">
                    <div className="product-container py-5 mt-5 row align-items-center justify-content-center">
                        <div className="product-gallery col-lg-6 col-10 mb-lg-0 mb-5">
                            <div className="col-lg-12 col-md-8 mx-auto">
                                <img src={product.img} alt="Main product" className="img-fluid shadow-lg" />
                            </div>
                        </div>
                        <div className="product-info col-lg-6 col-11 mx-auto shadow-lg py-5 px-lg-5 px-3">
                            <h1 className="product-title">{product.heading2}</h1>
                            <div className="product-rating">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span key={star} className={`star ${star <= 4 ? 'filled' : ''}`}>★</span>
                                ))}
                                <span className="rating-count">(87 reviews)</span>
                            </div>
                            <p className="product-price">
                                <span className="current-price">{product.price}₹</span>
                            </p>
                            <p className="product-description">
                                {product.line}
                            </p>
                            <div className="product-options">
                                <div className="size-options">
                                    <h3>Size:{product.price}</h3>

                                </div>
                            </div>
                            <a href={`https://wa.me/7048313227?text=Hello,%20I'm%20interested%20in%20${product.heading2}.%20Could%20you%20please%20provide%20more%20information?`} data-aos="fade-left" data-aos-duration="2000" target='_blank'>
                                <AllBtn text='Get Quote' />
                            </a>
                            <div className="product-meta">
                                <p><strong>SKU:</strong>{product.heading2}</p>
                                <p><strong>Tags:</strong> Eco-friendly, Recyclable, Shipping</p>
                            </div>
                            <div className="product-details">
                                <h2>Product Details</h2>
                                <ul className="feature-list">
                                    <li>Made from 100% recycled cardboard</li>
                                    <li>Sturdy construction for secure packaging</li>
                                    <li>Customizable with printing options available</li>
                                    <li>Easy to assemble with pre-scored fold lines</li>
                                    <li>Suitable for various industries and uses</li>
                                    <li>Biodegradable and compostable</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default HOC(PortfolioDetails)