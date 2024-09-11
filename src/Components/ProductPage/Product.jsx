import React, { useState } from 'react';
import '../../Assets/Css/Product.css';
import HOC from '../HOC';
import { TitleHead } from '../TitleHead';
import { Tabs, Tab, Box } from '@mui/material';
import { departments } from './departments';
import AllBtn from '../AllBtn';
import ProductsMain from '../PortfolioPage/ProductsMain';

function Product() {
    const [activeTab, setActiveTab] = useState("tabs-tab-1");
    const [selectedDepartment, setSelectedDepartment] = useState(departments[0]);
    const [mainImages, setMainImages] = useState(
        selectedDepartment.subimage.map((item) => item.MainImage)
    );

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
        const department = departments.find((d) => d.id === newValue);
        setSelectedDepartment(department);
        setMainImages(department.subimage.map((item) => item.MainImage));
    };

    const handleSubImageClick = (subImage, index) => {
        const newMainImages = [...mainImages];
        newMainImages[index] = subImage;
        setMainImages(newMainImages);
    };

    return (
        <><ProductsMain />
            <div className="container my-5 overflow-x-hidden">
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        aria-label="department tabs"
                        variant="scrollable"
                        id="departmenttabs"
                        scrollButtons="auto"
                        sx={{ mb: 4 }}
                    >
                        {departments.map((department) => (
                            <Tab
                                key={department.id}
                                value={department.id}
                                label={department.title}
                                className='bg-danger'
                            />
                        ))}
                    </Tabs>
                    {departments.map((department) => (
                        <TabPanel key={department.id} value={activeTab} index={department.id}>
                            <div >
                                {department.subimage.map((item, index) => (
                                    <div className="my-2" key={index}>
                                        <div className='row my-5 justify-content-center'>
                                            <div className='col-lg-6 col-12 text-center px-sm-5 px-0 text-light'>
                                                <img
                                                    data-aos="fade-up" data-aos-duration="2000"
                                                    className="my-4 unique-box-shadow img-fluid w-auto"
                                                    src={mainImages[index]}
                                                    alt={item.MainName}
                                                    style={{ height: 350 }}
                                                />
                                                <div className="col-12">
                                                    {item.SubImageData.map((subImage, subIndex) => (
                                                        <div className="d-inline m-lg-3" key={subIndex}>
                                                            <img data-aos="fade-down" data-aos-duration="2000"
                                                                src={subImage}
                                                                alt={`SubImage ${subIndex + 1}`}
                                                                className="img-fluid my-2"
                                                                style={{ width: 80, height: 80, }}
                                                                onClick={() => handleSubImageClick(subImage, index)}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className='col-lg-6 col-md-12 col-12 lh-lg custom-border bg_black px-lg-5 px-md-4 px-sm-3 px-1 border border-5 border-start-5 border-end-0 border-top-0 border-bottom-0 py-2 unique-box-shadow'>
                                                <div className="py-3 overflow-x-hidden  my-4">
                                                    <TitleHead text2={item.MainName} />
                                                </div>
                                                <p className='text-light' data-aos="fade-left" data-aos-duration="2000">{item.ProductDetails}</p>
                                                <a href={`https://wa.me/7048313227?text=Hello,%20I'm%20interested%20in%20${item.MainName}.%20Could%20you%20please%20provide%20more%20information?`} data-aos="fade-left" data-aos-duration="2000" target='_blank' rel="noreferrer"ss>
                                                    <AllBtn text='Get Quote' data-aos="fade-left" data-aos-duration="2000" />
                                                    <p style={{ fontSize: '12px' }} className='text-decoration-underline text-light'>whats'app your custom packaging now!</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Box>
            </div>
        </>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default HOC(Product);