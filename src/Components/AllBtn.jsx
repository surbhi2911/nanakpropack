import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
function AllBtn({ text }) {
    return (
        // <Button className="custom-button">
        //     {text}
        // </Button>
        // <div class="buttons">
        //     <button class="blob-btn">
        //         {text}
        //         <span class="blob-btn__inner">
        //             <span class="blob-btn__blobs">
        //                 <span class="blob-btn__blob"></span>
        //                 <span class="blob-btn__blob"></span>
        //                 <span class="blob-btn__blob"></span>
        //                 <span class="blob-btn__blob"></span>
        //             </span>
        //         </span>
        //     </button>
        //     <br />
        //     <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        //         <defs>
        //             <filter id="goo">
        //                 <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
        //                 <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
        //                 <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
        //             </filter>
        //         </defs>
        // </div>
        //     </svg>

        <button class="bn-32 bn32">{text} <span><AiOutlineDoubleRight className="FaLeftLongd" /></span></button>
    )
}

export default AllBtn