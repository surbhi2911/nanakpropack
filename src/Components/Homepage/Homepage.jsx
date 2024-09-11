import React from 'react'
import HOC from '../HOC'
import HomeAbout from './HomeAbout'
import HomeWhyUs from './HomeWhyUs'
import HomeProduct from './HomeProduct'
import HomeService from './HomeService'
import '../../Assets/Css/Homepage.css'
// import HomeTeam from './HomeTeam'
import Hometestimonial from './Hometestimonial'
import HomeCrousel from './HomeCrousel'
import HomeContact from './HomeContact'

function Homepage() {
    return (
        <>
            <div className="overflow-x-hidden" style={{ marginTop: '-43px' }}>
                <HomeCrousel />
                <HomeAbout />
                <HomeProduct />
                <HomeWhyUs />
                <HomeService />
                <Hometestimonial />
                <HomeContact />
                {/* <HomeTeam /> */}
            </div>
        </>
    )
}

export default HOC(Homepage)