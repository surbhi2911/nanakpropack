import React from 'react'
import { TitleHeadLight } from '../TitleHead'
import { Link } from 'react-router-dom';
import { IndustryData } from './IndustryData';

function IndustriesInfo() {
    return (
        <div className='container'>
            <div className='maindiv col-md-12 ps-sm-4 ps-0'>
                <div className='py-5'>
                    <div className="pt-5">
                        <TitleHeadLight textb1='Industries' textb2='We Serve' lineb1='Promote Transparency, Mitigate Risk ,' lineb2='Enhance Quality' />
                    </div>
                </div>
            </div>
            <div>
                <div className='row justify-content-center'>
                    {IndustryData.map((item, index) => {
                        return (
                            <>
                                <div className='col-lg-2 col-md-3 col-sm-4 col-5 p-2 text-center'>
                                    {/* <div className="display-1">
                                        {item.icon}
                                    </div>
                                    <h1>{item.title}</h1> */}

                                    <Link to={`/Contactus/${item.Id}`} className='text-center text-decoration-none'>
                                        <div className="darksoul-card2 mx-auto">
                                            <div className="circle2"></div>
                                            <div className='icon'>{item.icon}</div>
                                            <p className="content">{item.title}</p>
                                        </div>
                                    </Link>

                                </div >
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default IndustriesInfo