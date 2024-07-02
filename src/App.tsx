import "./App.scss";
import Profile from "./components/Profile/Profile";
import Summary from "./components/Summary/Summary";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Works from "./components/Works/Works";
import Certifications from "./components/Certifications/Certifications";
import { useEffect, useState } from "react";

interface MasterData {
  profileCardDetails: any;
  summaryCardDetails: any;
  experience: any;
  certifications: any;
  education: any;
  works: any;
}

function App() {
  const [masterData, setMasterData] = useState<MasterData>();

  useEffect(() => {
    console.log("UseEffect");

    fetch("assets/json/master-data.json")
      .then((response) => response.json())
      .then((data: any) => {
        setMasterData(data);
      });
  }, []);

  return (
    masterData && (
      <Container fluid>
        <Row>
          <Col>
            <div className="mainContainer">
              <Profile details={masterData.profileCardDetails} />
              <Summary details={masterData.summaryCardDetails} />
              <Row>
                <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <Experience details={masterData.experience} />
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                  <Certifications details={masterData.certifications} />
                  <Education details={masterData.education} />
                </Col>
              </Row>
              <Works details={masterData.works} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  );
}

export default App;
