import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { ProductList } from '../../ProductList';
import { TitleHeadLight } from '../TitleHead';



function HomeProduct() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        swipe: true,
        // speed: 30000000,
        arrows: false,
        pauseOnHover: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
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
            <div className='bg-body-secondary py-5'>
                {/* loader code https://codepen.io/skalanter/pen/mvxwyQ */}
                <div className="container-lg my-5">
                    <div className="col-11 ms-sm-0 ms-2 my-4">
                        <TitleHeadLight textb1='Our' textb2='Featured Products' lineb1='Featured Designs' lineb2='for Exceptional Products' />
                    </div>
                    <Slider {...settings}>
                        {ProductList.map((Item, index) => (
                            <div className="product-box" key={index}>
                                <div className="product-item mx-3 text-decoration-none">
                                    <div className="product-item-image">
                                        <img src={Item.img} alt={`Product`} style={{ height: '150px', width: "190px", objectFit: 'contain', margin: 'auto' }} />
                                        <div className="product-item-image-hover"></div>
                                    </div>
                                    <div className="product-item-content">
                                        <div className="product-item-category">
                                            Item {index}
                                        </div>
                                        <div className="product-item-title fs-6">
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