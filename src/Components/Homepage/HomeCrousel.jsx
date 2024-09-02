import React from 'react'
import { Carousel } from 'react-bootstrap'

function HomeCrousel() {
    const imageStyle = {
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)' // Inset box shadow
    };
    return (
        // <img src={require('../../Assets/Images/HomeAbout.jpg')} class="d-block w-100 vh-100" alt="..." />
        // <img src={require('../../Assets/Images/WhyBack.avif')} class="d-block w-100 vh-100" alt="..." />
        // {/* <img src={require('../../Assets/Images/testimonialback.avif')} class="d-block w-100 vh-100" alt="..." /> */ }
        < div style={{
            position: 'relative', top: '-48px'
        }
        }>
            <Carousel fade indicators={false}>
                <Carousel.Item className=''>
                    <img
                        class="d-block w-100 vh-100 imgshadow"
                        src="https://trak.in/wp-content/uploads/2016/05/eCommerce-Packaging.jpg"
                        alt="Innovative Packaging Solutions"
                    />
                    <Carousel.Caption>
                        <h3>Innovative Packaging Solutions</h3>
                        <p>Protect, Preserve, and Present Your Products with Style</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className=''>
                    <img
                        class="d-block w-100 vh-100 imgshadow"
                        src="https://img.freepik.com/free-photo/still-life-food-delivery_23-2149198164.jpg"
                        alt="Eco-Friendly Packaging"
                    />
                    <Carousel.Caption>
                        <h3>Eco-Friendly Packaging</h3>
                        <p>Commit to a Greener Future</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className=''>
                    <img
                        src="https://www.arka.com/cdn/shop/files/types-of-packaging-materials.jpg?v=1697192399"
                        class="d-block w-100 vh-100"
                        alt="Custom Packaging Tailored to Your Needs"
                    />
                    <Carousel.Caption>
                        <h3>Custom Packaging Tailored to Your Needs</h3>
                        <p>Stand Out on the Shelves</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default HomeCrousel