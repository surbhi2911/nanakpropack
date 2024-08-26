import React from 'react'
import HOC from '../HOC'
import HomeAbout from './HomeAbout'
import HomeWhyUs from './HomeWhyUs'

function Homepage() {
    return (
        <>
            <HomeAbout />
            <HomeWhyUs/>
        </>
    )
}

export default HOC(Homepage)