import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { TitleHeadLight } from "../TitleHead";
import AllBtn from "../AllBtn";
const data = [
    {
        title: "Email",
        description: "omaxindus@gmail.com",
        icon: <IoMdMail />,
        aos: "fade-right",
    },
    {
        title: "Location",
        description:
            "Omax industries, Block no. 233-A, plot no. 1 to 6, Krishna park industries, Near Canal road, Village Lindiad, Dist. Surat - 394110, Gujarat, India.",
        icon: <FaMapLocationDot />,
        aos: "fade-up",
    },
    {
        title: "Call Us",
        description: "+91 97271 55560",
        icon: <PiPhoneCallFill />,
        aos: "fade-left",
    },
];

function ContactForm() {

    const [errmsg, seterrmsg] = useState({});
    const [blankobj, setblankobj] = useState({});
    const [obj, setobj] = useState({});
    let getdata = (e) => {
        if (e.target.name === "name") {
            if (e.target.value?.length <= 0) {
                errmsg.name = "Your name is require !"
            } else {
                errmsg.name = ""
            }
        }
        if (e.target.name === "email") {
            if (e.target.value?.length <= 0) {
                errmsg.email = "Your email is require !"
            } else {
                errmsg.email = ""
            }
        }
        if (e.target.name === "phonenumber") {
            if (e.target.value.length === 10) {
                errmsg.phonenumber = ""
            } else if (e.target.value.length < 10) {
                errmsg.phonenumber = "Number must be require 10 digits."
            } else if (e.target.value.length > 10) {
                errmsg.phonenumber = "Number is not valid."
            }
        }
        if (e.target.name === "subject") {
            if (e.target.value?.length <= 0) {
                errmsg.subject = "Your email is require !"
            } else {
                errmsg.subject = ""
            }
        }
        if (e.target.name === "textarea") {
            if (e.target.value?.length <= 0) {
                errmsg.textarea = "Please Write Your Message !"
            } else {
                errmsg.textarea = ""
            }
        }
        obj[e.target.name] = e.target.value;
        blankobj[e.target.name] = ""
        setobj({ ...obj })
        setblankobj({ ...blankobj })
        seterrmsg({ ...errmsg })
    }
    let savedata = (event) => {
        event.preventDefault();

        if (obj.name === "" || obj.name === undefined) {
            errmsg.name = "Your name is require !"
        }
        if (obj.email === "" || obj.email === undefined) {
            errmsg.email = "Your email is require !"
        }
        if (obj.phonenumber === "" || obj.phonenumber === undefined) {
            errmsg.phonenumber = "Your phone number is require !"
        }
        if (obj.subject === "" || obj.subject === undefined) {
            errmsg.subject = "Subject is reaquire!"
        }
        if (obj.textarea === "" || obj.textarea === undefined) {
            errmsg.textarea = "Please Write Your Message!"
        }
        if (Object.values(errmsg).every((x) => x === "")) {
            setobj({ ...blankobj })
            // setobj({...obj})
            console.log(obj);
        }
        seterrmsg({ ...errmsg })
    }
    return (
        <>
            <div className="pb-5 overflow-x-hidden">
                <div class="container overflow-hidden">
                    <div class="row g-4 p-3 my-5 m-0">
                        <div class="col-lg-4 section overflow-hidden d-flex align-items-center justify-content-center" data-aos="zoom-in-right" data-aos-duration="1800">
                            <img src={require('../../Assets/Images/WhyBack.avif')} alt="" className="img-fluid h-100" />
                        </div>
                        <div class="col-lg-8" >
                            <form data-aos="zoom-in-left" data-aos-duration="1800">
                                <div className="col-lg-11 col-md-12 col-11 pb-5 ">
                                    <TitleHeadLight textb1='Connect With' textb2='Us' lineb1='Get in touch' lineb2='we are here to help!' />
                                </div>
                                <div class="row gy-2">
                                    <div className='col-md-6'>
                                        <input type="text" name='name' placeholder='Your Name' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.name} />
                                        <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.name}</span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="email" name='email' placeholder='Email' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.email} />
                                        <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.email}</span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="number" name='phonenumber' placeholder='Phone Number' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.phonenumber} />
                                        <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.phonenumber}</span>
                                    </div>
                                    <div className='col-md-6'>
                                        <input type="text" name='subject' placeholder='Subject' className='p-3 w-100 border-0 shadow-lg rounded rounded-3' onChange={getdata} value={obj.subject} />
                                        <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.subject}</span>
                                    </div>
                                    <div className='col-md-12'>
                                        <textarea name="textarea" id="" rows="5" className='w-100 border-0 shadow-lg rounded rounded-3 p-3' onChange={getdata} placeholder='Message' value={obj.textarea}></textarea>
                                        <span className='text-danger d-block' style={{ fontSize: "14px", height: "17px" }} >{errmsg.textarea}</span>
                                    </div>
                                    <div
                                        class=" col-md-12 ">
                                        <div className='btn_hover w-100'>
                                            <AllBtn text='submit' />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
