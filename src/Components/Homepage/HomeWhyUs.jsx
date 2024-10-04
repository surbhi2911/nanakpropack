import React from 'react';
import { TitleHead } from '../TitleHead';
import { Search, Edit, Leaf, Package, Shield, Headphones, CheckCircle, Cpu, Truck, Tag, Award } from 'lucide-react';

function HomeWhyUs() {

    const choose = [
        // {
        //     name: "Durable",
        //     bname: " Materials",
        //     icon: <Shield size={34} />,
        //     pera: "Our packaging is crafted from high-quality materials for maximum strength and durability.",
        // },
        {
            name: "Custom ",
            bname: " Solutions",
            icon: <Edit size={34} />,
            pera: "We provide tailored packaging designs to perfectly meet your unique business needs.",
        },
        {
            name: "Eco-Friendly ",
            bname: " Options",
            icon: <Leaf size={34} />,
            pera: "Our sustainable packaging solutions help reduce your environmental footprint effectively.",
        },
        {
            name: "",
            bname: "Sourcing ",
            icon: <Search size={34} />,
            pera: "We ensure the best sourcing practices to provide top-quality materials.",
        },
        {
            name: "Custom Packeging",
            bname: " Design",
            icon: <Package size={34} />,
            pera: "We offer packaging designs tailored to your specific business requirements.",
        },
        {
            name: "Sustainable  ",
            bname: " Packaging",
            icon: <Leaf size={34} />,
            pera: "Our packaging helps reduce your environmental impact with sustainable materials.",
        },
        {
            name: "Protective   ",
            bname: " Packaging",
            icon: <Shield size={34} />,
            pera: "Our packaging solutions provide top-level protection for your products.",
        },
        {
            name: "Customer   ",
            bname: " Support",
            icon: <Headphones size={34} />,
            pera: "Our dedicated customer support team is here to assist with your packaging needs.",
        },
        {
            name: "Quality   ",
            bname: " Assurance",
            icon: <CheckCircle size={34} />,
            pera: "We guarantee high standards of quality across all packaging solutions.",
        },
        {
            name: "Innovative Packaging ",
            bname: "Technologies",
            icon: <Cpu size={34} />,
            pera: "Our cutting-edge technologies drive innovation in packaging solutions.",
        },
        {
            name: "Logistic And ",
            bname: "Fulfillment Support",
            icon: <Truck size={34} />,
            pera: "We offer logistics and fulfillment support for all your packaging needs.",
        },
        {
            name: "Brand ",
            bname: "Enhancement",
            icon: <Tag size={34} />,
            pera: "Our packaging solutions are designed to elevate and enhance your brand's image.",
        },
        {
            name: "Professional And",
            bname: "Ethics",
            icon: <Award size={34} />,
            pera: "We operate with professionalism and uphold high ethical standards in packaging.",
        },
    ];
    return (
        <>
            <div className='HomeWhyus text-light py-5 overflow-x-hidden'>
                <div className='container ps-lg-0 ps-4 mt-5 '>
                    <div className='row justify-content-start'>
                        <div className='col-lg-6 col-sm-11 col-11' data-aos='fade-up' data-aos-duration='1200'>
                            <TitleHead text1='why' text2='Choose Us' line1='Unmatched Quality, Innovative' line2='Packaging Solutions' />
                        </div>
                        <div className='col-lg-6 col-sm-11 col-11' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'>
                            <p className='fs-6 my-3 span lh-lg'>Choose NANAKPROPACK, for packaging that protects, promotes, and elevates your products.</p>
                        </div>
                        {
                            choose.map((x, i) => {
                                return (

                                    <div className='col-lg-3 col-11 px-1 py-2 my-md-2 my-1' data-aos='fade-right' data-aos-delay='300' data-aos-duration='1200' key={i}>
                                        <div className='fw-light display-4 my-2'>
                                            {x.icon}
                                        </div>
                                        <h2 className='fw-light fs-4 my-2 orangecolor' style={{ textTransform: "capitalize" }}>{x.name} <span className='fw-bold '>{x.bname}</span></h2>
                                        <p className='my-2'>{x.pera}</p>
                                    </div>

                                )
                            })
                        }
                        {/* <div className='col-lg-4 col-11 py-lg-5 py-2 my-md-2 my-1' data-aos='fade-up' data-aos-delay='400' data-aos-duration='1200'>
                            <AiOutlineTool className='fw-light display-4 my-2' />
                            <h2 className='fw-light fs-4 my-2 orangecolor'>Custom <span className='fw-bold'>Solutions</span></h2>
                            <p className='my-2'> We provide tailored packaging designs to perfectly meet your unique business needs.</p>
                        </div>
                        <div className='col-lg-4 col-11 py-lg-5 py-2 my-md-2 my-1' data-aos='fade-left' data-aos-delay='500' data-aos-duration='1200'>
                            <GiRecycle className='fw-light display-4 my-2' />
                            <h2 className='fw-light fs-4 my-2 orangecolor'><span className='fw-bold'>Eco-Friendly</span> Options</h2>
                            <p className='my-2'>Our sustainable packaging solutions help reduce your environmental footprint effectively.</p>
                        </div> */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default HomeWhyUs