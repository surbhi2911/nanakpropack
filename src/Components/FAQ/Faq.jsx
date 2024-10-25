import React from 'react'
import HOC from '../HOC'
import { Layers, Package, User } from 'lucide-react'
import '../../Assets/Css/Faq.css'
import FaqAccordian from './FaqAccordian'
import FaqMain from './FaqMain'
function Faq() {

    return (
        <>
            <FaqMain />
            <div className='container my-5 py-5'>
                <div className='row justify-content-center align-items-center text-center'>
                    <div className='col-md-4 col-sm-6 col-11 p-5' data-aos="flip-left" data-aos-duration='1500' style={{ background: 'var(--lemon--)' }}>
                        <Layers size={34} className='text-dark' />
                        <h1 className='fw-normal text-dark'>Paper products</h1>
                        <p className='text-dark'>Offering quality work with resonable prices and about us</p>
                    </div>
                    <div className='col-md-4 col-sm-6 col-11 p-5 bg-light' data-aos="flip-up" data-aos-duration='1500' style={{ borderTop: '2px solid var(--orange--)', borderBottom: '2px solid var(--black--)' }}>
                        <div className="my-4">
                            <Package size={34} style={{ color: 'var(--orange--)' }} />
                            <h1 className='fw-normal'style={{ color: 'var(--orange--)' }}>Packaging</h1>
                            <p style={{ color: 'var(--orange--)' }}>We have an in house paint booth to ensure quick project turn around time</p>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-6 col-11 p-5' data-aos="flip-right" data-aos-duration='1500' style={{ background: 'var(--orange--)', borderLeft: '2px solid var(--orange--)' }}>
                        <User size={34} className='lemon' />
                        <h1 className='fw-normal lemon'>Sellers</h1>
                        <p className='lemon'>We work closely with the top vendors and supplies to ensure every project</p>
                    </div>
                </div>
            </div>
            <FaqAccordian />
        </>
    )
}

export default HOC(Faq)