import React from "react";
import Slider from "react-slick";
import { TitleHeadLight } from "./TitleHead";


function Logorun() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        swipe: false, // touch swipe
        arrows: false, //nex and previous button off
        pauseOnHover: false, // Set to false to continue autoplay on hover
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    let carddata = [
        {
            img: require('../Assets/Images/logos/Classmate_Logo.png'),
        },
        {
            img: require('../Assets/Images/logos/Crayola-Logo-1024x640.png'),
        },
        {
            img: require('../Assets/Images/logos/Faber-Castell-Logo.png'),
        },
        {
            img: require('../Assets/Images/logos/apsara-logo.jpg'),
        },
        {
            img: require('../Assets/Images/logos/bic .images.png'),
        },
        {
            img: require('../Assets/Images/logos/images-3.jpg'),
        }

    ];
    return (
        <>
            <div className="logorun_bck py-5 px-0 px-lg-5 ">
                <div className="container mb-5">
                    <div className='logorun'>
                        <div className="">
                            <TitleHeadLight textb2='Trusted by' lineb2='the world’s leading organizations' />
                        </div>
                        <div className="my-1 ">
                            <Slider {...settings}  >
                                {carddata?.map((x, i) => {
                                    console.log(x);
                                    return (
                                        <>
                                            <div className="bg-light m-3" style={{ height: '140px' }}>
                                                <div
                                                    className="p-3 p-lg-5 "
                                                >
                                                    <img
                                                        src={x.img}
                                                        alt=""
                                                        className="img-fluid h-100 w-100 object-fit-cover  "

                                                    />
                                                </div>
                                            </div>



                                        </>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logorun