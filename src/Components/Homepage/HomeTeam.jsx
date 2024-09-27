import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { TitleHeadLight } from '../TitleHead';

const teamMembers = [
    {
        name: "Vin Diesel",
        position: "Senior App Developer",
        src: "https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "John Doe",
        position: "Project Manager",
        src: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Jane Smith",
        position: "UI/UX Designer",
        src: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Vin Diesel",
        position: "Senior App Developer",
        src: "https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "John Doe",
        position: "Project Manager",
        src: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Jane Smith",
        position: "UI/UX Designer",
        src: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "John Doe",
        position: "Project Manager",
        src: "https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
    {
        name: "Jane Smith",
        position: "UI/UX Designer",
        src: "https://1.bp.blogspot.com/-8c7QTLoyajs/YLjr2V6KYRI/AAAAAAAACO8/ViVPQpLWVM0jGh3RZhh-Ha1-1r3Oj62wQCNcBGAsYHQ/s16000/team-1-3.jpg",
        social: {
            facebook: "#",
            instagram: "#",
            twitter: "#",
        },
    },
];
function HomeTeam() {
    return (
        <div className="pt-5">
            <div className='container-lg my-5'>
                <TitleHeadLight textb1='Our' textb2='Team' lineb1='Where Hard Work' lineb2='Meets Succes With Team' />
                <div className="main row justify-content-lg-evenly justify-content-center align-items-center">

                    {teamMembers.map((member, index) => (
                        <div className="profileheight">
                            <div className="profile-card my-4 col-lg-4 col-md-6 col-sm-10 col-12">
                                <div className="img">
                                    <img src={member.src} alt={member.name} />
                                </div>
                                <div className="caption">
                                    <h3>{member.name}</h3>
                                    <p>{member.position}</p>
                                    <div className="social-links">
                                        <a href={member.social.facebook}>
                                            <FaFacebook />
                                        </a>
                                        <a href={member.social.instagram}>
                                            <FaInstagram />
                                        </a>
                                        <a href={member.social.twitter}>
                                            <FaTwitter />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeTeam