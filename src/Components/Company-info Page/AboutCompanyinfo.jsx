import React from 'react'
import { HiOutlineHandThumbUp } from 'react-icons/hi2'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { Sprout } from 'lucide-react'
import AllBtn from '../AllBtn'
import { TitleHeadLight } from '../TitleHead'

const features = [
    {
        icon: <HiOutlineHandThumbUp className='text-white fs-1' />,
        title: 'Premium Quality',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: <MdOutlineSupportAgent className='text-white fs-1' />,
        title: '24/7 Support',
        description: 'Lorem ipsum dolor sit amet.'
    },
    {
        icon: <Sprout className='text-white fs-1' />,
        title: 'Eco Friendly',
        description: 'Lorem ipsum dolor sit amet.'
    },
];
function AboutCompanyinfo() {
    return (
        <div>
            <div className='my-5'>
                <div className="container">
                    <div className='row d-flex justify-content-center align-items-center align-content-center'>
                        <div className='col-11 col-lg-4 maindiv col-md-12'>
                            <div className='py-5'>
                                <div className="py-5">
                                    <TitleHeadLight textb1='About' textb2='Us' lineb1='Innovative Packaging for a ' lineb2='Sustainable Future' />
                                </div>
                                <div className='pb-3' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consequatur ducimus, vero adipisci, ipsa porro tenetur illo aut expedita laudantium accusamus quibusdam deserunt facere eos fugiat. Ex nisi deleniti minus!</div>
                                <AllBtn text='Learn More' />
                            </div>
                        </div>
                        <div className='col-11 col-lg-4 maindiv col-md-6'>
                            <div style={{ borderRadius: "54% 46% 53% 47% / 84% 84% 16% 16%", backgroundColor: 'var(--orange--)' }}>
                                <img src={require('../../Assets/Images/mainImage/65130e8537387b319f593647_Shoe box - packm brand.png')} className='object-fit-cover w-100 h-100 rounded-5' alt="" />
                            </div>
                        </div>
                        <div className='col-12 col-lg-4 maindiv col-md-6'>
                            <div className='py-4'>
                                {features.map((feature, index) => (
                                    <div className={`bg-dark d-flex p-3 rounded-pill ${index !== 0 ? 'my-3' : ''}`} key={index}>
                                        <div className='p-3 rounded-5'>
                                            {feature.icon}
                                        </div>
                                        <div className='text-white ms-3'>
                                            <h3 className='orangecolor fs-3'>{feature.title}</h3>
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