import React from 'react'
import { HiOutlineHandThumbUp } from 'react-icons/hi2'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { Sprout } from 'lucide-react'
import AllBtn from '../AllBtn'
import { TitleHeadLight } from '../TitleHead'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

const features = [
    {
        icon: <HiOutlineHandThumbUp className='text-white fs-1' />,
        title: 'Premium Quality',
        description: 'Lorem ipsum dolor sit amet.',
        delay: "200"
    },
    {
        icon: <MdOutlineSupportAgent className='text-white fs-1' />,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet.',
        delay: "200"
    },
    {
        icon: <Sprout className='text-white fs-1' />,
        title: 'Eco Friendly',
        description: 'Lorem ipsum dolor sit amet.',
        delay: "200"
    },
];
function AboutCompanyinfo() {
    return (
        <div className='overflow-y-hidden'>
            <div className='my-5'>
                <div className="container">
                    <div className='row d-flex justify-content-center align-items-center align-content-center'>
                        <div className='col-11 col-lg-4 maindiv col-md-12'>
                            <div className='py-5'>
                                <div className="py-5 pb-3">
                                    <TitleHeadLight textb1='About' textb2='Us' lineb1='Innovative Packaging for a ' lineb2='Sustainable Future' />
                                </div>
                                <div className='pb-3' style={{ textAlign: "justify" }} data-aos="fade-left" data-aos-duration='1500'>
                                    <span className='fw-bold'><RiDoubleQuotesL /> Transforming Packaging Into Branding <RiDoubleQuotesR /></span><br />
                                    Established in ----, boxiz expertise in all kinds of packaging. In a remarkably short time, we've emerged as a one-of-a-kind company. We not only meet your packaging needs but also help you in your design journey. Transforming basic products into branding portals that make your vision shine. <br />
                                </div>
                                <div data-aos="fade-left" data-aos-duration='1500'>
                                    <AllBtn text='Learn More' />
                                </div>
                            </div>
                        </div>
                        <div className='col-11 col-lg-4 maindiv col-md-6' data-aos="fade" data-aos-duration="1000" data-aos-delay='2000'>
                            <div style={{ borderRadius: "54% 46% 53% 47% / 84% 84% 16% 16%", backgroundColor: 'var(--orange--)' }}>
                                <img src={require('../../Assets/Images/mainImage/65130e8537387b319f593647_Shoe box - packm brand.png')} className='object-fit-cover w-100 h-100 rounded-5' alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 maindiv col-md-6' data-aos="fade-right" data-aos-duration='1500'>
                            <div className='py-4'>
                                {features.map((feature, index) => (
                                    <div className={`bg-dark d-flex p-3 rounded-pill ${index !== 0 ? 'my-3' : ''}`} key={index} data-aos="fade" data-aos-duration="1500" data-aos-delay={features.delay}>
                                        <div className='p-3 rounded-5'>
                                            {feature.icon}
                                        </div>
                                        <div className='text-white ms-3'>
                                            <h3 className='lemon fw-bold fs-3'>{feature.title}</h3>
                                            <div>{feature.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCompanyinfo