import React from 'react'
import { TitleHeadLight } from '../TitleHead'

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
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        can I order customized box size?
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        yes, we can make customized size.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        I do not know what print design to choose for my brand. can you help?
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        yes, we do have a creative and professional team of experts in designing who can help you develop a box which is unique and is customized only for you.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        can I have my logo printed on the box?
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        yes you can have your company logo or branding on the box.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFour">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        do you have minimum order size?
                                    </button>
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        yes, we do have a minimum order size for delivery. please get in touch with us for more information.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingFive">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        how and whom to contact for order?
                                    </button>
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        For this you can give a link with our full contact details.
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