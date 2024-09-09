import React from 'react'
import AllBtn from '../AllBtn'
import { TitleHeadLight } from '../TitleHead'

function HomeAbout() {
    return (
        <div className='py-5 my-3 homeAbout overflow-x-hidden' data-aos='fade' data-aos-duration='2000'>
            <div className='container-lg my-5 pb-5'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-6 col-11 px-0 down-arrow2' data-aos='fade' data-aos-duration='1000' >
                        <div className="mx-auto mb-md-0 mb-sm-5 mb-0 h-100">
                            {/* <img src={require('../../Assets/Images/HomeAbout.jpg')} alt=""
                                className='img-fluid imageback' /> */}
                            <div class="gallery imageback">
                                <img src="https://picsum.photos/id/1040/200/200" alt="a house on a mountain" />
                                <img src="https://picsum.photos/id/106/200/200" alt="sime pink flowers" />
                                <img src="https://picsum.photos/id/136/200/200" alt="big rocks with some trees" />
                                <img src="https://picsum.photos/id/1039/200/200" alt="a waterfall, a lot of tree andgreat view from the sky" />
                                <img src="https://picsum.photos/id/110/200/200" alt="a cool landscape" />
                                <img src="https://picsum.photos/id/1047/200/200" alt="inside a town between twobuildings" />
                                <img src="https://picsum.photos/id/1057/200/200" alt="a great view of the sea abovemountain" />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-11 mt-sm-0 mt-5 px-md-0 px-3 me-md-0 me-0 abouttwo' data-aos='fade-left' data-aos-duration='2000' >
                        <div className="col-lg-11 col-md-12 col-11">
                            <TitleHeadLight textb1='About' textb2='Us' lineb1='Superior Quality, Pioneering ' lineb2='Packaging Innovations' />
                        </div>
                        <p className='text-spacing lh-lg my-3 ' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500' style={{ fontFamily: "Open Sans, sans-serif", textAlign: 'justify' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laborum rerum consequuntur
                            cupiditate cumque eos, animi impedit esse! Debitis, aspernatur?</p>
                        <a href="/CompanyInfo">
                            <AllBtn text="More About Us" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout