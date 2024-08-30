import React from 'react'
import HOC from '../HOC'
import HomeAbout from './HomeAbout'
import HomeWhyUs from './HomeWhyUs'
import HomeProduct from './HomeProduct'
import HomeService from './HomeService'
import '../../Assets/Css/Homepage.css'
import HomeTeam from './HomeTeam'

function Homepage() {
    return (
        <>
            <HomeAbout />
            <HomeWhyUs />
            <HomeProduct />
            <HomeService />
            <HomeTeam />
        </>
    )
}

export default HOC(Homepage)