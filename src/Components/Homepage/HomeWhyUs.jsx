import React from 'react'
import { AiOutlineTool } from 'react-icons/ai';
import { FaIcons, FaShieldAlt } from 'react-icons/fa';
import { GiRecycle } from 'react-icons/gi';
import { MdBuild } from 'react-icons/md';

function HomeWhyUs() {
    return (
        <>
            <div className='bg-dark text-light py-5'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 col-sm-12 col-10'>
                            <div class="two text-light">
                                <h1 className='h1'>Why <span className='orangecolor'>Choose Us</span>
                                    <span className='span'>Unmatched Quality, Innovative <span className='fw-semibold span'>Packaging Solutions</span></span>
                                </h1>
                            </div>
                        </div>
                        <div className='col-md-6 col-sm-12 col-10'>
                            <p className='fs-5 my-3 span'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias labore repellendus, qui porro illo sint in ratione assumenda quidem.</p>
                        </div>
                        <div className='col-lg-4 col-10 py-lg-5 py-2 my-md-2 my-1'>
                            <FaShieldAlt className='fw-light display-4 my-2' />
                            <h2 className='fw-light fs-3 my-2'>Durable <span className='fw-bold'>Materials</span></h2>
                            <p className='my-2'> Our packaging is crafted from high-quality materials for maximum strength and durability.</p>
                        </div>
                        <div className='col-lg-4 col-10 py-lg-5 py-2 my-md-2 my-1'>
                            <AiOutlineTool className='fw-light display-4 my-2' />
                            <h2 className='fw-light fs-3 my-2'>Custom <span className='fw-bold'>Solutions</span></h2>
                            <p className='my-2'> We provide tailored packaging designs to perfectly meet your unique business needs.</p>
                        </div>
                        <div className='col-lg-4 col-10 py-lg-5 py-2 my-md-2 my-1'>
                            <GiRecycle className='fw-light display-4 my-2' />
                            <h2 className='fw-light fs-3 my-2'><span className='fw-bold'>Eco-Friendly</span> Options</h2>
                            <p className='my-2'>Our sustainable packaging solutions help reduce your environmental footprint effectively.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomeWhyUs