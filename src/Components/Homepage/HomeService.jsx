import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBoxOpen, FaRecycle, FaShieldAlt, FaChartLine, FaLightbulb, FaTruck } from 'react-icons/fa';
import { TitleHeadLight } from "../TitleHead";

const services = [
    {
        title: "Custom Packaging Design",
        description: "Tailored designs that capture your brand's identity, ensuring your products stand out in a crowded market.",
        icon: <FaBoxOpen className='display-2 p-lg-3 p-md-2 p-0 my-3 rounded-circle p-2 footerHandshake' />,
        data_aos: 'fade',
        data_aos_duration: '1000',
        data_aos_delay: '500'
    },
    {
        title: "Sustainable Packaging Solutions",
        description: "Eco-friendly materials that reduce waste, meet your sustainability goals, and appeal to environmentally conscious customers.",
        icon: <FaRecycle className='display-2 p-lg-3 p-md-2 p-0 my-3 rounded-circle p-2 footerHandshake' />,
        data_aos: 'fade',
        data_aos_duration: '1000',
        data_aos_delay: '1000'
    },
    {
        title: "Protective Packaging",
        description: "Robust, secure packaging that safeguards your products during transit, reducing damage and returns.",
        icon: <FaShieldAlt className='display-2 p-lg-3 p-md-2 p-0 my-3 rounded-circle p-2 footerHandshake' />,
        data_aos: 'fade',
        data_aos_duration: '1000',
        data_aos_delay: '1500'
    },
    {
        title: "Brand Enhancement",
        description: "Packaging that tells your story, builds brand recognition, and leaves a lasting impression on customers.",
        icon: <FaChartLine className='display-2 p-lg-3 p-md-2 p-0 my-3 rounded-circle p-2 footerHandshake' />,
        data_aos: 'fade',
        data_aos_duration: '500',
        data_aos_delay: '1500'
    },
    {
        title: "Innovative Packaging Technology",
        description: "Cutting-edge solutions that combine aesthetics with functionality, enhancing both product appeal and usability.",
        icon: <FaLightbulb className='display-2 p-lg-3 p-md-2 p-0 my-3 rounded-circle p-2 footerHandshake' />,
        data_aos: 'fade',
        data_aos_duration: '500',
        data_aos_delay: '1000'
    },
    {
        title: "Logistics and Fulfillment Support",
        description: "Seamless integration with your supply chain to ensure timely delivery and optimized storage of your packaging.",
        icon: <FaTruck className='display-2 p-lg-3 p-md-2 p-0 my-3 rounded-circle p-2 footerHandshake' />,
        data_aos: 'fade',
        data_aos_duration: '500',
        data_aos_delay: '500'
    },
]

function HomeService() {

    return (
        <>
            <div className="py-5 overflow-x-hidden">
                <div className='container px-0 px-lg-5 mt-5 py-5'>
                    <div className='row justify-content-center'>
                        <div className="col-md-6 col-11" data-aos='fade-up' data-aos-duration='1200'>
                            <TitleHeadLight textb1='Our' textb2='services' lineb1='services' lineb2='That we provide' />
                        </div>
                        <div className='col-md-6 col-11 fs-6 lh-lg mt-4' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa. Quae ab eaque magnam voluptatum autem nesciunt provident minima dicta? Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                    <div>
                        <div>
                            <Container className="service-section py-5 mx-auto" fluid="xxl">
                                <Row className="justify-content-md-between justify-content-center">
                                    {services.map((service, index) => (
                                        <Col lg={4} md={5} sm={12} xs={11} key={index} className="card my-lg-0 mx-lg-0 my-sm-5 mx-sm-3 my-5 mx-5" data-aos='fade' data-aos-delay={service.data_aos_delay} data-aos-duration={service.data_aos_duration}>
                                            <Card className="service-card h-100 shadow-sm content">
                                                <Card.Body className="pt-0 ps-0 pb-4">
                                                    {service.icon && (
                                                        <span className="fs-3">{service.icon}</span>
                                                    )}
                                                    <Card.Title className="mb-3 font-weight-bold">{service.title}</Card.Title>
                                                    <Card.Text className="text-muted fw-semibold">{service.description}</Card.Text>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService
