import React from 'react'
import { IndustryData } from './IndustryData';
import { useParams } from 'react-router-dom';
import HOC from '../HOC';
import { TitleHead, TitleHeadLight } from '../TitleHead';
import AllBtn from '../AllBtn';

function Data() {
    const productId = useParams();
    const id = productId.id

    const product = IndustryData.find(item => item.Id == id);

    if (!product) {
        return <div>Product not found</div>;
    }
    return (

        <>
            <div>
                <div className='container my-5'>
                    <div className='row align-items-center justify-content-center align-content-between'>
                        <div className='col-lg-4 col-11 h-100 rounded-5 px-4 py-5' style={{ background: 'var(--orange--)' }}>
                            <h1 className='text-light ps-3'>{product.title}</h1>
                            <p className='py-3 text-light'>{product.content}</p>
                        </div>
                        <div className='col-lg-5 col-md-7 col-11'>
                            <div className="col-md-12 col-10 mx-auto my-4 text-center">
                                <div className="col-8 ms-auto">
                                    <img src={product.img} alt="" className='img-fluid border border-5 border-dark' style={{ borderRadius: '35% 65% 49% 51% / 73% 22% 78% 27%' }} />
                                </div>
                                <div className="col-8" style={{ marginTop: '-100px' }}>
                                    <img src={product.img} alt="" className='img-fluid border border-5 border-dark' style={{ borderRadius: '41% 59% 39% 61% / 46% 27% 73% 54%' }} />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-11'>
                            <p className='text-light py-5 px-3 rounded-5' style={{ background: 'var(--orange--)' }}>{product.para}</p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HOC(Data)