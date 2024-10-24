import React from 'react';
import Slider from 'react-slick';
import { TitleHead } from '../TitleHead';
import { MdFormatQuote } from 'react-icons/md';

const teamMembers = [
    {
        name: "Vin Diesel",
        message: 'The packaging exceeded our expectations in durability and design. Truly impressed with their attention to detail.',
        position: "Outstanding Quality!",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "John Doe",
        message: 'Their team was responsive and professional, delivering exactly what we needed, on time and within budget.',
        position: "Exceptional Service!",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Jane Smith",
        message: 'Their custom solutions helped us enhance our brand’s image. We couldn’t be happier with the results.',
        position: "Highly Recommended!",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Vin Diesel",
        message: 'We appreciate their commitment to sustainability without compromising on quality. A trusted partner for our packaging needs.',
        position: "Eco-Friendly and Effective!",
        src: "https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "John Doe",
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur est quis molestias ducimus enim porro corrupti iusto dolores distinctio!',
        position: "Project Manager",
        src: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Jane Smith",
        position: "UI/UX Designer",
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur est quis molestias ducimus enim porro corrupti iusto dolores distinctio!',
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "John Doe",
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur est quis molestias ducimus enim porro corrupti iusto dolores distinctio!',
        position: "Project Manager",
        src: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Jane Smith",
        message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur est quis molestias ducimus enim porro corrupti iusto dolores distinctio!',
        position: "UI/UX Designer",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
];

function Hometestimonial() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,

    };
    return (
        <>
            <div className='HomeTest py-5 overflow-x-hidden'>
                <div className='container-lg my-5 pb-5'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-6 col-11 px-0 order-md-1 order-2' data-aos="fade-up" data-aos-duration="2000">
                            <div className="h-100" id="footer_slick">
                                <Slider {...settings} className="p-0 m-0 text-white text-center pt-2 ">
                                    {teamMembers.map((x, i) => {
                                        return (

                                            <div className='slickback p-5' key={i}>
                                                <div>
                                                    <div className='my-2' style={{ textAlign: 'justify' }}><MdFormatQuote className='lemon fs-3' /> {x.message} <MdFormatQuote className='lemon fs-3' /> </div>
                                                    <h4 className='text-end my-2'>— {x.name} </h4>
                                                    <p className='text-end text-light my-2'>{x.position}</p>
                                                </div>
                                            </div>

                                        );
                                    })}
                                </Slider>

                            </div>
                        </div>
                        <div className="pt-3 col-md-6 col-11 order-md-2 order-1">
                            <div className="col-12 mx-auto">
                                <TitleHead text1='Our' text2='Client Said' line1='Satisfied Customers' line2='Are Our Best Ads' />
                                <p className='text-light py-3 lh-lg' data-aos="fade-left" data-aos-duration="2000">Discover why our clients love us—read their stories of satisfaction, quality, and exceptional service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hometestimonial