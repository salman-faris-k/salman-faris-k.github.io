import React from 'react';
import './App.scss';
import Profile from "./components/Profile/Profile";
import Summary from "./components/Summary/Summary";
import { Col, Container, Row } from "react-bootstrap";
import facebookIcon from './assets/images/facebook.svg'
import instagramIcon from './assets/images/insta.svg'
import telegramIcon from './assets/images/telegram.svg'
import phoneIcon from './assets/images/phone.svg'
import githubIcon from './assets/images/github.svg'
import companyIcon from "./assets/images/company.svg";
import locationIcon from "./assets/images/location.svg";
import homeIcon from "./assets/images/home.svg";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";

const details = {
    profileCardDetails: {
        name: 'Bibin Baby',
        role: 'Sr. Fullstack Developer - Angular | React | Node.js | Python',
        info: [
            {
                label: 'KnowledgeLens',
                link: 'https://www.knowledgelens.com/',
                icon: companyIcon
            },
            {
                label: 'Pune, Maharashtra',
                link: 'https://goo.gl/maps/JPSbxtkq8LLsc8ws9',
                icon: locationIcon
            },
            {
                label: 'Kannur, Kerala',
                link: 'https://goo.gl/maps/Ak7jJiCXMS3nYfkK8',
                icon: homeIcon
            }
        ],
        contact: [
            {
                icon: githubIcon,
                label: 'Github',
                link: 'https://github.com/baby-bibin',
                userId: 'baby-bibin'
            },
            {
                icon: instagramIcon,
                label: 'Instagram',
                link: 'https://www.instagram.com/bibin.baby_/',
                userId: 'bibin.baby_'
            },
            {
                icon: telegramIcon,
                label: 'Telegram',
                link: 'https://t.me/baby_bibin',
                userId: 'baby_bibin'
            },
            {
                icon: facebookIcon,
                label: 'Facebook',
                link: 'https://www.facebook.com/kunjunji.bibin/',
                userId: 'kunjunji.bibin'
            },
            {
                icon: phoneIcon,
                label: 'Phone',
                link: '+919747023547',
                userId: '+919747023547'
            }
        ]
    },
    summaryCardDetails: {
        summary: 'Passionate and motivated Full stack developer with over 3 years of experience in designing, building, scaling, and maintaining applications.'
    },
    experience: {
        timeline: [
            {
                title: 'Internship Trainee',
                company: 'Knowledgelens',
                from: 'Jan 2019',
                to: 'May 2019',
                location: 'Bangalore, Karnataka, India',
                timePeriod: '5 Months'
            },
            {
                title: 'Full Stack Developer',
                company: 'Knowledgelens',
                from: 'May 2019',
                to: 'May 2021',
                location: 'Pune, Maharashtra, India',
                timePeriod: '2 Years'
            },
            {
                title: 'Sr. Full Stack Developer',
                company: 'Knowledgelens',
                from: 'May 2021',
                to: '',
                location: 'Pune, Maharashtra, India',
                timePeriod: 'Present'
            }
        ]
    }
}


function App() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='mainContainer'>
                        <Profile details={details.profileCardDetails}/>
                        <Summary details={details.summaryCardDetails}/>
                        <Row>
                            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <Experience details={details.experience}/>
                            </Col>
                            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                                <Education details={details.experience}/>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
