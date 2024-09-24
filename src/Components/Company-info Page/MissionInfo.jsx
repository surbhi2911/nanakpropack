import { Target, ToggleLeft } from 'lucide-react'
import React from 'react'
import { FaCogs, FaEye, FaRecycle } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import { GiBrassEye } from 'react-icons/gi'
import { TbTargetArrow } from 'react-icons/tb'

function MissionInfo() {
    return (
        <div className='mission-section'>
            <section className=" py-5 row align-items-center justify-content-center p-1 m-1">
                <div className="col-lg-6 col-md-8 col-sm-10 col-11">
                    <div className='row justify-content-center align-items-center p-1 h-75 text-center'>
                        <div className='col-sm-6 col-7 bg-light text-dark h-100 pb-3' style={{ borderRadius: "12% 88% 16% 84% / 80% 8% 92% 20%" }}>
                            <div className="mb-4">
                                <div className="p-4 my-2 mx-auto rounded-circle" style={{ width: '40%', backgroundColor: 'var(--orange--)' }}>
                                    <TbTargetArrow strokeWidth={1.75} className='text-dark fs-2 text-center' />
                                </div>
                                <h1 className='text-dark fs-3 pt-2'>Our Mission</h1>
                                <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, ex?</p>
                            </div>
                        </div>
                        <div className='col-sm-6 col-7 bg-light text-dark h-100 pb-3' style={{ borderRadius: "12% 88% 16% 84% / 80% 8% 92% 20%" }}>
                            <div className="mb-4">
                                <div className="p-4 my-2 mx-auto rounded-circle" style={{ width: '40%', backgroundColor: 'var(--orange--)' }}>
                                    <GiBrassEye className='text-dark text-center fs-2' />
                                </div>
                                <h1 className='text-dark fs-3 pt-2'>Our Vision</h1>
                                <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, ex?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-10 ">
                    <div className="container">
                        {/* <p className="section-description mx-auto mb-4 display-1">
                            Our Mission
                        </p> */}
                        <h2 className="section-title text-light mb-4 text-start">Excellence In Printing And Packaging</h2>
                        <p className=" text-light section-description mx-auto mb-4 display-1 pb-5" style={{ borderBottom: '5px dotted  white' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <div className="mission-icons d-flex flex-wrap justify-content-center gap-4 mt-4">
                            <div className="icon-item">
                                <FaRecycle />
                                <p>Sustainability</p>
                            </div>
                            <div className="icon-item">
                                <FaShield />
                                <p>Protection</p>
                            </div>
                            <div className="icon-item">
                                <FaCogs />
                                <p>Innovation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default MissionInfo