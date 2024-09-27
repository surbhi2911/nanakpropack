import React from 'react'

function TitleHead(props) {
    return (
        <>
            <div className='col-sm-11 col-11 overflow-x-hidden'>
                <div className="two text-light">
                    <h1 className='h1' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500'>{props.text1} <span className='orangecolor'>{props.text2}</span>
                        <span className='span' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500'>{props.line1} <span className='fw-semibold span' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500'>{props.line2}</span></span>
                    </h1>
                </div>
            </div>

        </>
    )
}



function TitleHeadLight(props) {
    return (
        <>
            <div className='col-sm-11 col-11 abouttwo overflow-x-hidden'>
                <div className="two text-dark">
                    <h1 className='h1' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500'>{props.textb1} <span className='orangecolor'>{props.textb2}</span>
                        <span className='span' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500'>{props.lineb1} <span className='fw-semibold span' data-aos='fade-left' data-aos-duration='1200' data-aos-delay='500'>{props.lineb2}</span></span>
                    </h1>
                </div>
            </div>
        </>
    )
}
export { TitleHead, TitleHeadLight }

