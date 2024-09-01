import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { styled } from "@mui/system";
import { FaLeftLong } from "react-icons/fa6";
import AllBtn from "../AllBtn";
import { FaBoxOpen, FaRecycle, FaShieldAlt, FaChartLine, FaLightbulb, FaTruck } from 'react-icons/fa';
import { TitleHead, TitleHeadLight } from "../TitleHead";

const services = [
    {
        title: "Custom Packaging Design",
        description: "Tailored designs that capture your brand's identity, ensuring your products stand out in a crowded market.",
        icon: <FaBoxOpen />,
    },
    {
        title: "Sustainable Packaging Solutions",
        description: "Eco-friendly materials that reduce waste, meet your sustainability goals, and appeal to environmentally conscious customers.",
        icon: <FaRecycle />,
    },
    {
        title: "Protective Packaging",
        description: "Robust, secure packaging that safeguards your products during transit, reducing damage and returns.",
        icon: <FaShieldAlt />,
    },
    {
        title: "Brand Enhancement",
        description: "Packaging that tells your story, builds brand recognition, and leaves a lasting impression on customers.",
        icon: <FaChartLine />,
    },
    {
        title: "Innovative Packaging Technology",
        description: "Cutting-edge solutions that combine aesthetics with functionality, enhancing both product appeal and usability.",
        icon: <FaLightbulb />,
    },
    {
        title: "Logistics and Fulfillment Support",
        description: "Seamless integration with your supply chain to ensure timely delivery and optimized storage of your packaging.",
        icon: <FaTruck />,
    },
];


const StyledCard = styled(Card)(() => ({
    height: '100%',
    borderRadius: '15px',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: 'auto',
    background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
    color: '#fff',
    padding: '8px 16px',
    '&:hover': {
        background: 'linear-gradient(to right, #feb47b, #ff7e5f)',
    },
}));

function HomeService() {

    return (
        <>
            <div className="py-5">
                <div className='container-lg mt-5'>
                    <div className='row justify-content-center'>
                        <div className="col-md-6 col-11">
                            <TitleHeadLight textb1='Our' textb2='services' lineb1='services' lineb2='That we provide' />
                        </div>
                        <div className='col-md-6 col-11 fs-6 lh-lg mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa. Quae ab eaque magnam voluptatum autem nesciunt provident minima dicta? Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                    <div>
                        <div>
                            <Container className="service-section py-5 mx-auto" fluid="xxl">
                                <Row className="g-4 justify-content-center">
                                    {services.map((service, index) => (
                                        <Col lg={3} md={4} sm={7} xs={11} key={index} className="card m-4">
                                            <Card className="service-card h-100 shadow-sm content">
                                                <Card.Body className=" pt-0 ps-0 pb-4">
                                                    {service.icon && (
                                                        <span className="fs-3">{service.icon}</span>
                                                    )}
                                                    <Card.Title className="mb-3 font-weight-bold">{service.title}</Card.Title>
                                                    <Card.Text className="text-muted">{service.description}</Card.Text>

                                                </Card.Body>
                                                <AllBtn text='Learn More' />
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
