import { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./Works.scss";

const Works: FC<any> = (props: any) => {
  const [workTiles] = useState(props.details);
  return (
    workTiles && (
      <div className="infoCard mt-3 px-4 py-3">
        <div className="cardTitle">Technologies I works with</div>
        <Row className="justify-content-evenly">
          {workTiles.map((work: any, index: number) => (
            <Col key={index} sm={6} md={4} lg={3} xl={2} xxl={2}>
              <div className="workTile">
                <div className="d-flex flex-column align-items-center justify-content-between h-100">
                  <img className="workIcon" src={work.image} alt={"icon"} />
                  <div className="title">{work.title}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    )
  );
};

export default Works;
