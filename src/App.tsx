import React from "react";
import "./App.scss";
import Profile from "./components/Profile/Profile";
import Summary from "./components/Summary/Summary";
import { Col, Container, Row } from "react-bootstrap";
import facebookIcon from "./assets/images/facebook.svg";
import instagramIcon from "./assets/images/insta.svg";
import telegramIcon from "./assets/images/telegram.svg";
import phoneIcon from "./assets/images/phone.svg";
import githubIcon from "./assets/images/github.svg";
import companyIcon from "./assets/images/company.svg";
import locationIcon from "./assets/images/location.svg";
import homeIcon from "./assets/images/home.svg";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Works from "./components/Works/Works";
import Certifications from "./components/Certifications/Certifications";

const details = {
  profileCardDetails: {
    name: "Bibin Baby",
    role: "Fullstack Developer - Angular | React | Node.js | Python",
    info: [
      {
        label: "KnowledgeLens",
        link: "https://www.knowledgelens.com/",
        icon: companyIcon,
      },
      {
        label: "Bengaluru, Karnataka",
        link: "https://goo.gl/maps/4SqY4wEgmLCQHujX8",
        icon: locationIcon,
      },
      {
        label: "Kannur, Kerala",
        link: "https://goo.gl/maps/Ak7jJiCXMS3nYfkK8",
        icon: homeIcon,
      },
    ],
    contact: [
      {
        icon: githubIcon,
        label: "Github",
        link: "https://github.com/baby-bibin",
        userId: "baby-bibin",
      },
      {
        icon: instagramIcon,
        label: "Instagram",
        link: "https://www.instagram.com/bibin.baby_/",
        userId: "bibin.baby_",
      },
      {
        icon: telegramIcon,
        label: "Telegram",
        link: "https://t.me/baby_bibin",
        userId: "baby_bibin",
      },
      {
        icon: facebookIcon,
        label: "Facebook",
        link: "https://www.facebook.com/kunjunji.bibin/",
        userId: "kunjunji.bibin",
      },
      {
        icon: phoneIcon,
        label: "Phone",
        link: "+919747023547",
        userId: "+919747023547",
      },
    ],
  },
  summaryCardDetails: {
    summary:
      "A Fullstack Developer with five years of hands-on experience in designing, developing, and maintaining robust web applications. Proficient in both frontend and backend technologies and have a deep understanding of various programming languages, frameworks, and tools and well-versed in HTML, CSS, JavaScript, and frontend frameworks React and Angular.\n\nOn the backend, skilled in server-side scripting languages Node.js and Python, along with experience in database management using technologies MySQL, MongoDB, PostgreSQL. And I've comprehensive skill set that enables to handle the entire software development life cycle, from design to deployment and maintenance. With a commitment to staying updated on emerging technologies and industry best practices.",
  },
  experience: {
    timeline: [
      {
        title: "Internship Trainee",
        company: "Knowledgelens",
        from: "Tue Jan 01 2019 00:00:00",
        to: "Wed May 01 2019 00:00:00",
        location: "Bangalore, Karnataka, India",
        timePeriod: "5 Months",
      },
      {
        title: "Full Stack Developer",
        company: "Knowledgelens",
        from: "Wed May 01 2019 00:00:00",
        to: "Sat May 01 2021 00:00:00",
        location: "Pune, Maharashtra, India",
        timePeriod: "2 Years",
      },
      {
        title: "Sr. Full Stack Developer",
        company: "Knowledgelens",
        from: "Sat May 01 2021 00:00:00",
        to: "Sat Oct 01 2022 00:00:00",
        location: "Bangalore, Karnataka, India",
        timePeriod: "1.5 Years",
      },
      {
        title: "Technology Lead",
        company: "Knowledgelens",
        from: "Sat Oct 01 2022 00:00:00",
        to: "",
        location: "Bangalore, Karnataka, India",
        timePeriod: "Present",
      },
    ],
  },
  education: [
    {
      title: "Master of Computer Applications",
      subtitle: "TKM College Of Engineering, Kollam",
      year: "2017 - 2019",
      image: "assets/images/tkm.png",
      link: "https://www.tkmce.ac.in/",
    },
    {
      subtitle: "Mahatma Gandhi College, Iritty",
      title: "Bachelor of Science in Computer Science",
      year: "2014 - 2017",
      image: "assets/images/mg-college.png",
      link: "https://mgcollege.ac.in/",
    },
  ],
  certifications: [
    {
      title: "Introduction to Generative AI Learning Path",
      authority: "Google",
    },
    {
      title: "Angular - The Complete Guide",
      authority: "Udemy",
    },
    {
      title: "React - The Complete Guide",
      authority: "Udemy",
    },
  ],
  works: [
    {
      title: "Angular",
      image: "assets/images/tech/angular.svg",
      description:
        "Angular is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS",
      link: "",
    },
    {
      title: "React",
      image: "assets/images/tech/react.svg",
      description:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.",
      link: "",
    },
    {
      title: "Node.js",
      image: "assets/images/tech/nodejs.svg",
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      link: "",
    },
    {
      title: "ExpressJS",
      image: "assets/images/tech/expressjs.png",
      description: "",
      link: "",
    },
    {
      title: "Python",
      image: "assets/images/tech/python.svg",
      description:
        "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects.",
      link: "",
    },
    {
      title: "Flask",
      image: "assets/images/tech/flask.svg",
      description: "",
      link: "",
    },
    {
      title: "Fast API",
      image: "assets/images/tech/fastapi.png",
      description: "",
      link: "",
    },
    {
      title: "MySQL",
      image: "assets/images/tech/mysql.png",
      description: "",
      link: "",
    },
    {
      title: "PostgreSQL",
      image: "assets/images/tech/postgres.png",
      description: "",
      link: "",
    },
    {
      title: "MongoDB",
      image: "assets/images/tech/mongodb.png",
      description: "",
      link: "",
    },
  ],
};

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="mainContainer">
            <Profile details={details.profileCardDetails} />
            <Summary details={details.summaryCardDetails} />
            <Row>
              <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                <Experience details={details.experience} />
              </Col>
              <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                <Certifications details={details.certifications} />
                <Education details={details.education} />
              </Col>
            </Row>
            <Works details={details.works} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
