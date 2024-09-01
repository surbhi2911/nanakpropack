import React from 'react'

function TitleHead(props) {
    return (
        <>
            <div className='col-sm-11 col-11'>
                <div class="two text-light">
                    <h1 className='h1'>{props.text1} <span className='orangecolor'>{props.text2}</span>
                        <span className='span'>{props.line1} <span className='fw-semibold span'>{props.line2}</span></span>
                    </h1>
                </div>
            </div>

        </>
    )
}



function TitleHeadLight(props) {
    return (
        <>
            <div className='col-sm-11 col-11 abouttwo'>
                <div class="two text-dark">
                    <h1 className='h1'>{props.textb1} <span className='orangecolor'>{props.textb2}</span>
                        <span className='span'>{props.lineb1} <span className='fw-semibold span'>{props.lineb2}</span></span>
                    </h1>
                </div>
            </div>
        </>
    )
}
export { TitleHead, TitleHeadLight }

