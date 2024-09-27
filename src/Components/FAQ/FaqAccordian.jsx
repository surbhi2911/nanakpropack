import React from 'react'
import { TitleHeadLight } from '../TitleHead'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

function FaqAccordian() {
    return (
        <>
            <div className='container'>
                <div className='row justify-content-center align-items-end'>
                    <div className='col-lg-4 col-11'>
                        <div className="row align-items-center">
                            <div className='display-4 fw-normal col-lg-12 col-sm-6 py-3'>

                                <TitleHeadLight textb1='Quick' textb2='Answers' lineb1='Answers' lineb2='to your packaging questions' />
                                {/* <p className='text-dark fw-normal lh-lg' style={{ fontFamily: 'serif' }}>Lorem ipsum dolor sit amet conse adipisicing elit. Hic, praesentium? Lorem ipsum dolor sit, amet conser adipisicing elit. Aperiam, repre henderit. Lorem ipsum dolor sit, amet consectetur adipisicing.</p> */}
                            </div>
                            <div className='col-lg-12 col-sm-6'>
                                <div className="col-12 text-center">
                                    <img src={require('../../Assets/Images/mainImage/corrugated-boxes (1).jpg')} alt="not Found" className='img-fluid object-fit-cover w-100 h-100' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-11">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        can I order customized box size?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        yes, we can make customized size.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        I do not know what print design to choose for my brand. can you help?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        yes, we do have a creative and professional team of experts in designing who can help you develop a box which is unique and is customized only for you.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        can I have my logo printed on the box?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        yes you can have your company logo or branding on the box.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        do you have minimum order size?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        yes, we do have a minimum order size for delivery. please get in touch with us for more information.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        How and whom to contact for order?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="contact-details">
                                            <p>For inquiries and placing orders, please contact us through the following:</p>
                                            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                                <li>
                                                    <Phone style={{ marginRight: '10px' }} />
                                                    <strong>Phone:</strong> <a href="tel:+1234567890" className='text-decoration-none text-dark'>+1 234 567 890</a>
                                                </li>
                                                <li>
                                                    <Mail style={{ marginRight: '10px' }} />
                                                    <strong>Email:</strong> <a href="mailto:xyz@gmail.com" className='text-decoration-none text-dark'>xyz@gmail.com</a>
                                                </li>
                                                <li>
                                                    <MapPin style={{ marginRight: '10px' }} />
                                                    <strong>Address:</strong> <a href="https://goo.gl/maps/xyz123" className='text-decoration-none text-dark' target="_blank" rel="noopener noreferrer">1234 Business Road, Suite 100, City, Country</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaqAccordian