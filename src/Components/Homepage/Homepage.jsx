import React from 'react'
import HOC from '../HOC'
import HomeAbout from './HomeAbout'
import HomeWhyUs from './HomeWhyUs'
import HomeProduct from './HomeProduct'
import HomeService from './HomeService'
import '../../Assets/Css/Homepage.css'
import HomeTeam from './HomeTeam'
import Hometestimonial from './Hometestimonial'
import HomeCrousel from './HomeCrousel'

function Homepage() {
    return (
        <>
            <HomeCrousel />
            <HomeAbout />
            <HomeProduct />
            <HomeWhyUs />
            <HomeService />
            <Hometestimonial />
            <HomeTeam />
        </>
    )
}

export default HOC(Homepage)