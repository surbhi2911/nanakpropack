import React from 'react'
import AllBtn from '../AllBtn'
import { TitleHeadLight } from '../TitleHead'

function HomeAbout() {
    return (
        <div className='py-5 homeAbout'>
            <div className='container-lg my-5 pb-5'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-md-6 col-11 px-0'>
                        <div className="col-10 mx-auto mb-md-0 mb-sm-5 mb-0 h-100">
                            <img src={require('../../Assets/Images/HomeAbout.jpg')} alt=""
                                className='img-fluid imageback' />
                        </div>
                    </div>
                    <div className='col-md-6 col-11 mt-sm-0 mt-5 px-md-0 px-3 me-md-0 me-0 abouttwo'>
                        <div className="col-lg-11 col-md-12 col-11">
                            <TitleHeadLight textb1='About' textb2='Us' lineb1='Superior Quality, Pioneering ' lineb2='Packaging Innovations' />
                        </div>
                        <p className='text-spacing lh-lg my-3 ' style={{ fontFamily: "Open Sans, sans-serif", textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum rerum consequuntur
                            cupiditate cumque eos, animi impedit esse! Debitis, aspernatur?</p>
                        <AllBtn text="Learn More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout