import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Logorun from './Logorun'

function HOC(Component) {
    function NewComponent() {
        return (
            <>
                <Header />
                <Component />
                {/* <Logorun /> */}
                <Footer />
            </>
        )
    }
    return NewComponent
}

export default HOC