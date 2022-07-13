import { FC, useState } from "react";
import { Col, Row } from "react-bootstrap";
import './Works.scss';

import navigationIcon from '../../assets/images/go.svg'

const Works: FC<any> = (props: any) => {
    const [workTiles] = useState(props.details);
    return workTiles && (
        <div className='infoCard mt-3 px-4 py-3'>
            <div className='cardTitle'>
                Projects
            </div>
            <Row>
                {workTiles.map((work: any, index: number) => (
                    <Col key={index} sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <div className='workTile'>
                            <div className='d-flex flex-column align-items-center'>
                                <img className='workIcon' src={work.image} alt={'icon'}/>
                                <div className='title'>{work.title}</div>
                                <div className='description'>{work.description}</div>
                            </div>
                            <div className='navigation d-flex align-items-center'>
                                <div>
                                    View <img src={navigationIcon} alt='go'/>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Works;