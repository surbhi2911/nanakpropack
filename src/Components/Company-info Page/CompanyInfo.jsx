import React, { useState } from 'react'
import { Package, Leaf, Recycle, Award, Users, Phone, Mail, MapPin, Clock } from 'lucide-react'
import HOC from '../HOC'
import '../../Assets/Css/CompanyInfo.css'
import { TitleHead, TitleHeadLight } from '../TitleHead'
import AllBtn from '../AllBtn'
import CountUp from 'react-countup';

function CompanyInfo() {
    return (
        <>
            <div className="container my-5 px-0 px-lg-5">
                <div className="company-info">
                    <div className="py-5">
                        <TitleHeadLight textb1='EcoPack' textb2='Solutions' lineb1='Innovative Packaging for a ' lineb2='Sustainable Future' />
                    </div>

                    <div className="info-grid">
                        <div className="info-card">
                            <h2><Package size={24} /> Custom Packaging</h2>
                            <p>We create tailored packaging solutions that perfectly fit your product needs while minimizing environmental impact.</p>
                        </div>
                        <div className="info-card">
                            <h2><Leaf size={24} /> Eco-Friendly Materials</h2>
                            <p>Our packaging is made from sustainable, biodegradable materials that reduce your carbon footprint.</p>
                        </div>
                        <div className="info-card">
                            <h2><Recycle size={24} /> Circular Economy</h2>
                            <p>We design our packaging with recyclability in mind, supporting a circular economy and reducing waste.</p>
                        </div>
                        <div className="info-card">
                            <h2><Award size={24} /> Award-Winning Designs</h2>
                            <p>Our innovative packaging solutions have won multiple industry awards for sustainability and design excellence.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container my-5">
                <section className="productivity-section">
                    <div className="container">
                        <div className="content row justify-content-center align-items-center">
                            <div className="image-content  text-center col-md-6 col-11">
                                <img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNsZXY5c2Z4MXNlbzVoN2ZoNW0xeXRtdDdhN3BtOTJrazJ3OGxjZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/rminyWgjsI69peN5CO/giphy.webp' alt="Team collaborating on a project" />
                            </div>
                            <div className="text-content mx-auto col-md-6 col-11">
                                <div className="pb-5">
                                    <TitleHeadLight textb1='Help us improve' textb2='our productivity' lineb1="Together," lineb2=" Let's Achieve Greater Heights" />
                                </div>
                                <p>
                                    We're constantly striving to enhance our tools and processes to boost productivity.
                                    Your feedback is invaluable in helping us create solutions that truly meet your needs.
                                </p>
                                <ul>
                                    <li>Share your workflow challenges</li>
                                    <li>Suggest features that would save you time</li>
                                    <li>Participate in our user research studies</li>
                                </ul>
                                <div className="">
                                    <AllBtn text="Give Feedback" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <div className='happyclients py-5'>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="stat-item col-3 text-center m-3 paper-box shadow-lg">
                            <div className="stat-icon"><Users size={32} /></div>
                            <div className="stat-number text-light">
                                <CountUp
                                    start={0}
                                    end={500}
                                    duration={2.75}
                                    enableScrollSpy={true}
                                >
                                    500+
                                </CountUp></div>
                            <div className="stat-label  text-light">Happy Clients</div>
                        </div>
                        <div className="stat-item col-3 text-center m-3 paper-box">
                            <div className="stat-icon"><Package size={32} /></div>
                            <div className="stat-number text-light">
                                <CountUp
                                    start={0}
                                    end={1000}
                                    duration={2.75}
                                    enableScrollSpy={true}
                                >
                                    1000
                                </CountUp>
                            </div>
                            <div className="stat-label text-light">Packages Delivered</div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container my-5 pt-5">
                <section className="contact-details">
                    <div className="container">
                        <div className="py-4">
                            <TitleHeadLight textb1='Contact' textb2='Details' lineb1="We’re here" lineb2='help-—contact us!' />
                        </div>
                        <div className="info-grid">
                            <div className="info-item">
                                <a href="tel:7048313227" className='text-decoration-none'>
                                    <Phone className="icon" />
                                    <h3>Phone</h3>
                                    <p>+1 (555) 123-4567</p>
                                </a>
                            </div>
                            <div className="info-item">
                                <a href="mailto:info@packagingco.com" className='text-decoration-none'>
                                    <Mail className="icon" />
                                    <h3>Email</h3>
                                    <p>info@packagingco.com</p>
                                </a>
                            </div>
                            <div className="info-item">
                                <a href="" className='text-decoration-none'>
                                    <MapPin className="icon" />
                                    <h3>Address</h3>
                                    <p>123 Packaging St, Box City, PC 12345</p>
                                </a>
                            </div>
                            <div className="info-item">
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