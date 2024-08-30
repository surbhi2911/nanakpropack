import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
function AllBtn({ text }) {
    return (
        <button class="bn-32 bn32" style={{ width: '150px' }}>{text}
            <span><AiOutlineDoubleRight className="FaLeftLongd" /> <h1></h1></span>
        </button>
    )
}

export default AllBtn