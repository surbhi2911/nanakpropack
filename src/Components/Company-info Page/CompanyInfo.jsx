import React, { useState } from 'react'
import { Smile, Package, PenTool, Leaf, Recycle, Award, Users, Phone, Mail, MapPin, Clock, Truck, Brush } from 'lucide-react'
import HOC from '../HOC'
import '../../Assets/Css/CompanyInfo.css'
import { TitleHead, TitleHeadLight } from '../TitleHead'
import AllBtn from '../AllBtn'
import CountUp from 'react-countup';
import CompanyInfoHome from './CompanyInfoHome'
import { Controls, Player } from '@lottiefiles/react-lottie-player'

function CompanyInfo() {
    return (
        <>
            <CompanyInfoHome />
            <div className="container my-5 px-3 px-lg-5 overflow-hidden">
                <div className="company-info">
                    <div className="py-5">
                        <TitleHeadLight textb1='EcoPack' textb2='Solutions' lineb1='Innovative Packaging for a ' lineb2='Sustainable Future' />
                    </div>

                    <div className="info-grid">
                        <div className="info-card" data-aos="fade-left" data-aos-duration="2000">
                            <Package className='orangecolor my-2' size={24} /><h2>Custom Packaging</h2>
                            <p>We create tailored packaging solutions that perfectly fit your product needs while minimizing environmental impact.</p>
                        </div>
                        <div className="info-card" data-aos="fade-up" data-aos-duration="2000">
                            <Leaf className='orangecolor my-2' size={24} /><h2>Eco-Friendly Materials</h2>
                            <p>Our packaging is made from sustainable, biodegradable materials that reduce your carbon footprint.</p>
                        </div>
                        <div className="info-card" data-aos="fade-down" data-aos-duration="2000">
                            <Recycle className='orangecolor my-2' size={24} /><h2>Circular Economy</h2>
                            <p>We design our packaging with recyclability in mind, supporting a circular economy and reducing waste.</p>
                        </div>
                        <div className="info-card" data-aos="fade-right" data-aos-duration="2000">
                            <Award className='orangecolor my-2' size={24} /><h2>Award-Winning Designs</h2>
                            <p>Our innovative packaging solutions have won multiple industry awards for sustainability and design excellence.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-5 overflow-hidden">
                <section className="productivity-section">
                    <div className="container">
                        <div className="content row justify-content-center">
                            <div className="image-content text-center col-md-6 col-11 player">
                                {/* <img src='https://img.freepik.com/free-photo/medium-shot-young-people-with-reviews_23-2149394417.jpg?w=900&t=st=1725945010~exp=1725945610~hmac=4a31e142e7309b30ed4cec5f2fb83f746d476ca534ee84f1dc30397aa4f464c1' alt="Team collaborating on a project" className='img-fluid' /> */}
                                <Player
                                    autoplay
                                    loop
                                    src="https://lottie.host/836ff731-3310-4c91-b905-37133e752e0f/v1uFgLSGGB.json"
                                    className='col-12 h-100 p-0 m-0 pt-5 mt-5'
                                >
                                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                </Player>
                            </div>
                            <div className="text-content mx-auto col-md-6 col-11">
                                <div className="pb-5">
                                    <TitleHeadLight textb1='Help us improve' textb2='our productivity' lineb1="Together," lineb2=" Let's Achieve Greater Heights" />
                                </div>
                                <p data-aos="fade-up" data-aos-duration="2000">
                                    We're constantly striving to enhance our tools and processes to boost productivity.
                                    Your feedback is invaluable in helping us create solutions that truly meet your needs.
                                </p>
                                <ul data-aos="fade-up" data-aos-duration="2000">
                                    <li>Share your workflow challenges</li>
                                    <li>Suggest features that would save you time</li>
                                    <li>Participate in our user research studies</li>
                                </ul>
                                <a href={`https://wa.me/7048313227?text=${encodeURIComponent('Hello, I would like to give my feedback: {YOUR_FEEDBACK_MESSAGE}')}`}
                                    data-aos="fade-left" data-aos-duration="2000" target='_blank'>
                                    <div className="" data-aos="fade-up" data-aos-duration="2000">
                                        <AllBtn text="Give Feedback" />
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <div className='happyclients py-5 overflow-hidden'>
                <div className="container">
                    <div className="Metrics">
                        <h1 className='text-light text-center '>Our Achievements in Numbers</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-6 col-sm-9 col-11 mt-lg-0 mt-5 text-center mx-auto">
                            <div className="stat-item col-10 text-center paper-box shadow-lg" data-aos="fade-left" data-aos-duration="2000">
                                <div className="stat-icon"><Smile size={32} /></div>
                                <div className="stat-number text-light">
                                    <CountUp
                                        start={0}
                                        end={500}
                                        duration={2.75}
                                        enableScrollSpy={true}
                                    />+
                                </div>
                                <div className="stat-label  text-light">Happy Clients</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-9 col-11 mt-lg-0 mt-5 text-center mx-auto">
                            <div className="stat-item col-10 text-center paper-box shadow-lg" data-aos="fade-left" data-aos-duration="2000">
                                <div className="stat-icon"><Truck size={32} /></div>
                                <div className="stat-number text-light">
                                    <CountUp
                                        start={0}
                                        end={1000}
                                        duration={2.75}
                                        enableScrollSpy={true}
                                    />+
                                </div>
                                <div className="stat-label text-light">Packages Delivered</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-9 col-11 mt-lg-0 mt-5 text-center mx-auto">
                            <div className="stat-item col-10 text-center paper-box shadow-lg" data-aos="fade-left" data-aos-duration="2000">
                                <div className="stat-icon"><Recycle size={32} /></div>
                                <div className="stat-number text-light">
                                    <CountUp
                                        start={0}
                                        end={95}
                                        duration={2.75}
                                        enableScrollSpy={true}
                                    />
                                    %</div>
                                <div className="stat-label  text-light">Eco-Friendly Products</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-9 col-11 mt-lg-0 mt-5 text-center mx-auto">
                            <div className="stat-item col-10 text-center paper-box shadow-lg" data-aos="fade-left" data-aos-duration="2000">
                                <div className="stat-icon"><Brush size={32} /></div>
                                <div className="stat-number text-light">
                                    +<CountUp
                                        start={0}
                                        end={10000}
                                        duration={2.75}
                                        enableScrollSpy={true}
                                    />
                                </div>
                                <div className="stat-label  text-light">Custom Designs Created</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container my-5 pt-5 overflow-hidden">
                <section className="contact-details">
                    <div className="container">
                        <div className="py-4">
                            <TitleHeadLight textb1='Contact' textb2='Details' lineb1="We’re here" lineb2='help-—contact us!' />
                        </div>
                        <div className="info-grid" data-aos="fade-left" data-aos-duration="2000">
                            <div className="info-item">
                                <a href="tel:7048313227" className='text-decoration-none'>
                                    <Phone className="icon" />
                                    <h3>Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </a>
                            </div>
                            <div className="info-item" data-aos="fade-up" data-aos-duration="2000">
                                <a href="mailto:info@packagingco.com" className='text-decoration-none'>
                                    <Mail className="icon" />
                                    <h3>Email</h3>
                                    <p>info@packagingco.com</p>
                                </a>
                            </div>
                            <div className="info-item" data-aos="fade-down" data-aos-duration="2000">
                                <a href="" className='text-decoration-none'>
                                    <MapPin className="icon" />
                                    <h3>Address</h3>
                                    <p>123 Packaging St, Box City, PC 12345</p>
                                </a>
                            </div>
                            <div className="info-item" data-aos="fade-right" data-aos-duration="2000">
                                <a href="" className='text-decoration-none'>
                                    <Clock className="icon" />
                                    <h3>Business Hours</h3>
                                    <p>Mon - Fri: 9AM - 5PM</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


        </>

    )
}
export default HOC(CompanyInfo)