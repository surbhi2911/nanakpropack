import React from "react";
import AllBtn from "../AllBtn";
import { ImageList, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";

const HomeDesignBox = () => {
    const logos = [
        require('../../Assets/Images/mainImage/31OqIzJy8RL.jpg'),
        require('../../Assets/Images/mainImage/attachment_123096374.png'),
        require('../../Assets/Images/mainImage/top-bottom-packaging-box.jpg'),
        require('../../Assets/Images/mainImage/5491cb45125beafe3a10f335e9daee35.jpg'),
        require('../../Assets/Images/mainImage/5996c498a3f0d.jpg'),
        require('../../Assets/Images/mainImage/84cc3294087951.5e75c728ee656.jpg'),
        require('../../Assets/Images/mainImage/attachment_123096374.png'),
        require('../../Assets/Images/mainImage/APHzh_5083.jpg'),
        require('../../Assets/Images/mainImage/Boxes-and-Paper-Bags-600x600-px-Top-and-Bottom-Box.jpg'),
        require('../../Assets/Images/mainImage/DD000.jpg'),
        require('../../Assets/Images/mainImage/HC060---.jpg'),
        require('../../Assets/Images/mainImage/Free-Craft-Packaging-Shoe-Box-Mockup-Design.jpg'),
    ];

    return (
        <><div className="designbox">
            <div className="designBox2">
                <div className="container my-5" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    <div className="row">
                        <div className="col-lg-5 col-md-7 col-sm-9 col-11 m-auto" data-aos="fade-right" data-aos-duration='1500'>
                            <h1 className="display-4 fw-bold orangecolor text-capitalize my-5" style={{ textShadow: '1px 1px black' }}><span className="text-light" >Custom packaging</span> designed to <span className="text-light" >fit your business</span> </h1>
                            <p className="fs-6 text-light">Explore, design and order sustainable packaging your customers will love</p>
                            <Link to="/Product"><div className="fs-5"><AllBtn text="Design Your Box" /></div></Link>
                        </div>
                        <div className="partners-logo-slider col-lg-6 col-md-8 col-sm-10 col-11 my-lg-0 my-5 py-2 py-lg-5" data-aos="fade-left" data-aos-duration='1500'>
                            <ImageList variant="masonry" cols={2} gap={8} className='slide-track'>
                                {logos.concat(logos).map((item, index) => (
                                    <ImageListItem key={index} className='slide bg-light rounded-4'>
                                        <img
                                            srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item}?w=248&fit=crop&auto=format`}
                                            alt={index}
                                            loading="lazy"
                                            className="rounded-4"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default HomeDesignBox