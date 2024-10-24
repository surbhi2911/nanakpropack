import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider from 'react-slick';
import { FaArrowDownLong } from 'react-icons/fa6';
import { ProductList } from '../../ProductList';
import { Link } from 'react-router-dom';


// const data = [
//     {
//         h1: 'Mono Carton',
//         h6: "efficient product packaging.",
//         img: require('./Assets/Images/PNG Images/Laminated_Printed_Carton3-removebg-preview.png'),
//         bg: '#d1d3ca'
//     },
//     {
//         h1: 'Cake Boxes',
//         h6: 'cake boxes for transport',
//         img: require('../../Assets/Images/PNG Images/large-cake-boxes-removebg-preview.png'),
//          bg: '#d1d3ca'
//     },
//     {
//         h1: 'Corrugated Sheet',
//         h6: 'versatile packaging needs',
//         img: require('../../Assets/Images/Corrugated sheets/corrugated sheet1.jpg'),

//     },
//     {
//         h1: 'Duplex',
//         h6: 'superior packaging strength',
//         img: require('../../Assets/Images/PNG Images/duplex3-removebg-preview.png'),
//     }

// ]
function App() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        swipe: true,
        speed: 2500,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 766,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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
            <div className="" style={{ marginBottom: '100px' }}>
                <div className='swiperBg mb-5'>
                    <div className=''>
                        <div className='container text-center'>
                            <div style={{ padding: '180px 20px 20px 20px' }}>
                                <h1 className='display-1 fw-bold mb-2' style={{ letterSpacing: '8px' }}>
                                    <span className='text-light'>Nanak</span> <span className='orangecolor bg-light pb-1'>ProPack</span>
                                </h1>
                                <p className='text-light fw-semibold' style={{ letterSpacing: '3px', textTransform: 'uppercase' }}>Unbox Reliability with Every Package</p>
                                <FaArrowDownLong className='display-6 down-arrow orangecolor' />
                                <Slider {...settings} className='d-flex align-items-end'>
                                    {ProductList.map((Item, index) => {
                                        // const [firstWord, secondWord] = Item.h1.split(' ');
                                        return (
                                            <div key={index} className='mb-5'>
                                                {/* <div className='bg-light mx-5'>
                                                    <img src={Item.img} alt="" className='img-fluid mx-auto' style={{ height: '200px', width: 'auto' }} />
                                                </div> */}
                                                <Link to={'/product'}>
                                                    <div className={`text-dark m-4`} style={{
                                                        backgroundImage: `url(${Item.img})`,
                                                        backgroundColor: `${Item.bg}`,
                                                        backgroundSize: 'contain',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundPosition: 'center',
                                                    }}>
                                                        <div style={{ backdropFilter: 'blur(10px)' }}>
                                                            <div className="shadow-lg mx-5 py-5" style={{ background: 'rgb(48 56 73 / 63%)', position: "relative", top: '45px', border: '7px groove white' }}>
                                                                <img src={Item.img} alt="" className='img-fluid mx-auto' style={{ height: '120px', width: 'auto', filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 1))" }} />
                                                            </div>
                                                            <div style={{ fontSize: '20px' }} className='orangecolor fw-semibold'>{Item.h6}</div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

export default App;
