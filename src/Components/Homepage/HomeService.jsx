import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";  // Import Material-UI components
import { styled } from "@mui/system";
import { FaLeftLong } from "react-icons/fa6";
const services = [
    {
        title: "Web Development",
        description: "Build modern and responsive websites with the latest technologies.",
        icon: "bi bi-code-slash",
    },
    {
        title: "Graphic Design",
        description: "Create stunning visual designs that captivate and engage your audience.",
        icon: "bi bi-brush",
    },
    {
        title: "Digital Marketing",
        description: "Grow your business online with comprehensive digital marketing strategies.",
        icon: "bi bi-bullseye",
    },
    {
        title: "Graphic Design",
        description: "Create stunning visual designs that captivate and engage your audience.",
        icon: "bi bi-brush",
    },
    {
        title: "Digital Marketing",
        description: "Grow your business online with comprehensive digital marketing strategies.",
        icon: "bi bi-bullseye",
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
            <div>
                <div className='container-lg'>
                    <div className='row'>
                        <div className="abouttwo mx-auto mt-4 col-4">
                            <div class="two">
                                <h1 className='h1'>Our <span className='orangecolor'>services</span>
                                    <span className='span fs-6'>services <span className='fw-semibold span'>That we provide</span></span>
                                </h1>
                            </div>
                        </div>
                        <div className='col-8 fs-5 lh-lg mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa. Quae ab eaque magnam voluptatum autem nesciunt provident minima dicta? Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                    <div>
                        <div>
                            <Container className="service-section py-5 mx-auto" fluid="xxl">
                                <Row className="g-4 justify-content-center">
                                    {services.map((service, index) => (
                                        <Col lg={3} md={5} key={index} className="card m-4">
                                            <Card className="service-card h-100 shadow-sm content">
                                                <Card.Body className=" p-4 ps-0">
                                                    {service.icon && (
                                                        <i className={`${service.icon} service-icon mb-3`} style={{ fontSize: '3rem', color: '#ff7e5f' }}></i>
                                                    )}
                                                    <Card.Title className="mb-3 font-weight-bold">{service.title}</Card.Title>
                                                    <Card.Text className="text-muted">{service.description}</Card.Text>
                                                    {/* {service.img && (
                                                        <img src={service.img} alt="" className="img-fluid mb-3" style={{ maxHeight: 120 }} />
                                                    )} */}
                                                </Card.Body>
                                                <Button variant="primary" className="btn-learn-more xyzbutton" style={{ width: "fit-content" }}>Learn More</Button>
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
