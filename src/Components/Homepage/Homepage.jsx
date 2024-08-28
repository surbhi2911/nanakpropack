import React from 'react'
import HOC from '../HOC'
import HomeAbout from './HomeAbout'
import HomeWhyUs from './HomeWhyUs'
import HomeProduct from './HomeProduct'

function Homepage() {
    return (
        <>
            <HomeAbout />
            <HomeWhyUs />
            <HomeProduct />
        </>
    )
}

export default HOC(Homepage)