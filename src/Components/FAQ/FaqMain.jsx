import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

function FaqMain() {
    return (
        <div className='Mainsec1'><div style={{ marginTop: '-62px' }} >
            <header className="header ">
                <div className="my-4">
                    <h1>FAQs</h1>
                    <nav>
                        <Link to="/" className="hover">Home</Link>
                        <span><MdKeyboardDoubleArrowRight /></span>
                        <span className="active">FAQ</span>
                    </nav>
                </div>
            </header>
        </div>
        </div>
    )
}

export default FaqMain