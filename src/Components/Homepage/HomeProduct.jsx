import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { ProductList } from '../../ProductList';



function HomeProduct() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        swipe: true,
        arrows: false,
        pauseOnHover: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className='with-bg-size py-5'>
                {/* loader code https://codepen.io/skalanter/pen/mvxwyQ */}
                <div className="container-lg">
                    <div className="abouttwo  mt-3 ms-md-2 col-lg-5 col-md-6 col-sm-7 col-12">
                        <div class="two bg-light px-4 py-3">
                            <h1 className='h1'>Our <span className='orangecolor'>Featured Products</span>
                                <span className='span'>Featured Designs<span className='fw-semibold span'>for Exceptional Products</span></span>
                            </h1>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {ProductList.map((Item, index) => (
                            <div className="product-box" key={index} >
                                <div className="product-item text-decoration-none">
                                    <div className="product-item-image">
                                        <img src={Item.img} alt={`Product`} style={{ height: '150px', width: "190px", objectFit: 'contain', margin: 'auto' }} />
                                        <div className="product-item-image-hover"></div>
                                    </div>
                                    <div className="product-item-content">
                                        <div className="product-item-category">
                                            Item {index}
                                        </div>
                                        <div className="product-item-title">
                                            {Item.heading2}
                                        </div>
                                        <div className="product-item-price">
                                            {Item.price}
                                        </div>
                                        <div className="button-pill">
                                            <span>view</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}

export default HomeProduct