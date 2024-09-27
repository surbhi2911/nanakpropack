import React, { useState } from 'react';
import AllBtn from '../AllBtn';
import { TitleHeadLight } from '../TitleHead';
import emailjs from '@emailjs/browser'; // Import EmailJS

function ProductDesignBox() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        boxType: '',
        size: '',
        color: '',
        customization: '',
        quantity: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(prevQty => prevQty + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQty => prevQty - 1);
        }
    };

    const handleSubmit = (e) => {
        const dataToSend = {
            ...formData,
            quantity, // Ensure quantity is included
        };


        console.log(dataToSend);

        emailjs.send("service_zepm12o", "template_7ul0y5d", dataToSend, "riFOd-JVCm2W9dXYR",)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your design request has been sent successfully!');
                // Optionally reset the form
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    boxType: '',
                    size: '',
                    color: '',
                    customization: '',
                    quantity: '',
                    message: ''
                });
                setQuantity(1);
            }, (err) => {
                console.error('FAILED...', err);
                alert('There was an error sending your request. Please try again later.');
            });
    };

    return (
        <div className="container design-box-form py-5">
            <TitleHeadLight
                textb1='Design Your Own'
                textb2='Box'
                lineb1='Customize your box'
                lineb2="to fit your product's needs perfectly!"
            />
            <div className="row">

                <div className="col-md-6 col-11">
                    {/* Box Size */}
                    <div className="form-group mb-4">
                        <label htmlFor="size">Box Size</label>
                        <select
                            className="form-control"
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select box size</option>
                            <option value="Small">Small (10x10x10 cm)</option>
                            <option value="Medium">Medium (20x20x20 cm)</option>
                            <option value="Large">Large (30x30x30 cm)</option>
                            <option value="Custom">Custom (Enter size below)</option>
                        </select>
                    </div>

                    {/* Box Type */}
                    <div className="form-group mb-4">
                        <label htmlFor="boxType">Box Type</label>
                        <select
                            className="form-control"
                            id="boxType"
                            name="boxType"
                            value={formData.boxType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select box type</option>
                            <option value="Corrugated Box">Corrugated Box</option>
                            <option value="Die-Cut Box">Die-Cut Box</option>
                            <option value="Rigid Box">Rigid Box</option>
                            <option value="Folding Carton">Folding Carton</option>
                            <option value="Laminated Printed Box">Laminated Printed Box</option>
                        </select>
                    </div>

                    {/* Box Color */}
                    <div className="form-group mb-4">
                        <label htmlFor="color">Box Color</label>
                        <select
                            className="form-control"
                            id="color"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select box color</option>
                            <option value="White">White</option>
                            <option value="Brown">Brown</option>
                            <option value="Black">Black</option>
                            <option value="Custom">Custom Color</option>
                        </select>
                    </div>

                    {/* Customization */}
                    <div className="form-group mb-4">
                        <label htmlFor="customization">Customizations (Logo, Text, Finishings)</label>
                        <textarea
                            className="form-control"
                            id="customization"
                            name="customization"
                            value={formData.customization}
                            onChange={handleChange}
                            rows="4"
                            placeholder="Describe any special requests, like adding a logo, text, or finishing options"
                        ></textarea>
                    </div>

                </div>

                <div className="col-md-6 col-11">
                    {/* Name */}
                    <div className="form-group mb-4">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group mb-4">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Contact Number */}
                    <div className="form-group mb-4">
                        <label htmlFor="contact">Contact Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>

                    {/* Quantity */}
                    <div className="form-group mb-4">
                        <label htmlFor="quantity">Quantity</label>
                        <div className="display-flex">
                            <div className="qtyminus" onClick={decreaseQuantity}>-</div>
                            <input type="text" name="quantity" value={quantity} readOnly className="qty" />
                            <div className="qtyplus" onClick={increaseQuantity}>+</div>
                        </div>
                        <div className='pt-4 mt-1' onClick={handleSubmit}>
                            <AllBtn text='Click ME To Send Details' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDesignBox;
