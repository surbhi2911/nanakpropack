import React, { useState } from 'react'

function ProductDesignBox() {
    const [quantity, setQuantity] = useState(1);

    const handleQtyMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleQtyPlus = () => {
        setQuantity(quantity + 1);
    };
    return (
        <div className="container">
            <div className="heading-section">
                <h2>Product Details</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="item">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Product" className='img-fluid' />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="product-dtl">
                        <div className="product-info">
                            <div className="product-name">Variable Product</div>
                            <div className="reviews-counter">
                                <div className="rate">
                                    <input type="radio" id="star5" name="rate" value="5" />
                                    <label htmlFor="star5">5 stars</label>
                                    <input type="radio" id="star4" name="rate" value="4" />
                                    <label htmlFor="star4">4 stars</label>
                                </div>
                                <span>3 Reviews</span>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="size">Size</label>
                                <select id="size" name="size" className="form-control">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="color">Color</label>
                                <select id="color" name="color" className="form-control">
                                    <option>Blue</option>
                                    <option>Green</option>
                                    <option>Red</option>
                                </select>
                            </div>
                        </div>

                        <div className="product-count">
                            <label htmlFor="quantity">Quantity</label>
                            <div className="display-flex">
                                <div className="qtyminus" onClick={handleQtyMinus}>-</div>
                                <input type="text" name="quantity" value={quantity} readOnly className="qty" />
                                <div className="qtyplus" onClick={handleQtyPlus}>+</div>
                            </div>
                            <a href="#" className="round-black-btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDesignBox