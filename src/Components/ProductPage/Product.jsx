import React, { useState } from 'react';
import '../../Assets/Css/Product.css';
import HOC from '../HOC';
import { TitleHead, TitleHeadLight } from '../TitleHead';
import { Tabs, Tab, Box } from '@mui/material';
import { departments } from './departments';
import AllBtn from '../AllBtn';

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
        <div className="container my-5">
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
                        />
                    ))}
                </Tabs>
                {departments.map((department) => (
                    <TabPanel key={department.id} value={activeTab} index={department.id}>
                        <div className=''>
                            {department.subimage.map((item, index) => (
                                <div className="my-2" key={index}>
                                    <div className='row my-5 justify-content-center'>
                                        <div className='col-lg-6 col-12 text-center px-5 text-light'>
                                            <img
                                                className="my-4 unique-box-shadow"
                                                src={mainImages[index]}
                                                alt={item.MainName}
                                                style={{ height: 350 }}
                                            />
                                            <div className="col-12">
                                                {item.SubImageData.map((subImage, subIndex) => (
                                                    <div className="d-inline m-3" key={subIndex}>
                                                        <img
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
                                        <div className='col-lg-6 col-md-12 col-12 lh-lg custom-border bg_black px-5 py-2 unique-box-shadow'>
                                            <div className="py-3 overflow-x-hidden  my-4">
                                                <TitleHead text2={item.MainName} />
                                            </div>
                                            <p className=' text-light'>{item.ProductDetails}</p>
                                            <a href={`https://wa.me/7048313227?text=Hello,%20I'm%20interested%20in%20${item.MainName}.%20Could%20you%20please%20provide%20more%20information?`} target='_blank'>
                                                <AllBtn text='Get Quote' />
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