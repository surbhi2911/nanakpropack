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
                    <div className='col-md-4 col- p-5' style={{ background: 'var(--black--)', borderRight: '2px solid var(--black--)' }}>
                        <Layers size={34} className='text-light' />
                        <h1 className='fw-normal text-light'>Paper products</h1>
                        <p className='text-light'>Offering quality work with resonable prices and about us</p>
                    </div>
                    <div className='col-4 p-5 bg-light' style={{ borderTop: '2px solid var(--orange--)', borderBottom: '2px solid var(--black--)' }}>
                        <div className="my-4">
                            <Package size={34} className='text-dark' />
                            <h1 className='fw-normal'>Packaging</h1>
                            <p>We have an in house paint booth to ensure quick project turn around time</p>
                        </div>
                    </div>
                    <div className='col-4 p-5' style={{ background: 'var(--orange--)', borderLeft: '2px solid var(--orange--)' }}>
                        <User size={34} className='text-light' />
                        <h1 className='fw-normal text-light'>Sellers</h1>
                        <p className='text-light'>We work closely with the top vendors and supplies to ensure every project</p>
                    </div>
                </div>
            </div>
            <FaqAccordian />
        </>
    )
}

export default HOC(Faq)